import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';
import polyline from '@mapbox/polyline';
import fetchData from '../../config/fetchData';
import MapSwiper from './components/MapSwiper';
import styled from 'styled-components';
import { addMapMutation } from './helper/mutation';
import { GOOGLE_API_KEY } from '../../config';
import Geolocation from '@react-native-community/geolocation';
import { QueenElizabeth, VanDusen } from './utils/PolygonSample';

const Containter = styled.View`
  height: 333px;
  background: #fff;
  width: 100%;
`;
const SearchButton = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  background: #fff;
  padding: 10px 30px;
  border-radius: 5px;
`;
const CustomMarker = styled.View`
  width: 33px;
  height: 33px;
  border-radius: 100px;
  background: #2ba31d;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CustomMarkerOpacity = styled.View`
  width: 55px;
  height: 55px;
  background: rgba(88, 139, 74, 0.4);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;
const ExploreScreen = ({ navigation }) => {
  const [mapData, setMapData] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [selectedMap, setSelectedMap] = useState();
  const [userLocation, setUserLocation] = useState();
  const [coords, setCoords] = useState([]);
  const _carousel = useRef();

  const cardWidth = 291;
  const GoogleAPIFetch = () => {
    const dataURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.latitude},${userLocation.longitude}&radius=1000&type=park&fields=place_id,name,opening_hours,formatted_address,geometry&key=${GOOGLE_API_KEY}`;
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setAPIData(data.result))
      .then(() => AddDataFromGoogleAPI());
  };
  const AddDataFromGoogleAPI = () => {
    APIData.map(APIMap => {
      mapData.filter(map => {
        if (map.externalId !== APIMap.id) {
          const mutation = addMapMutation(
            APIMap.id,
            APIMap.name,
            APIMap.vicinity,
            APIMap.photos ? APIMap.photos[0].photo_reference : '',
            APIMap.plus_code,
            APIMap.geometry.location,
            APIMap.geometry.viewport.northeast,
            APIMap.geometry.viewport.southwest,
          );
          fetchData(mutation);
        }
      });
    });
  };

  const query = `query {
    maps {
      id
      name
      externalId
      vicinity
      photo_reference
      geometry {
        location {
          lat
          lng
        }
      }
    }
  }`;

  useEffect(() => {
    fetchData(query).then(data => {
      setMapData(data.maps);
      setSelectedMap(data.maps[0]);
    });
    Geolocation.watchPosition(({coords}) => setUserLocation(coords));
  }, []);
  const mergeLot = (latitude, longitude) => `${latitude}, ${longitude}`;
  useEffect(() => {
    if (selectedMap && userLocation) {
      const {location} = selectedMap.geometry;
      getDirections(
        mergeLot(userLocation.latitude, userLocation.longitude),
        mergeLot(location.lat, location.lng),
      );
    }
  }, [selectedMap]);
  const getDirections = (startLoc, destinationLoc) => {
    const directionAPI = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${GOOGLE_API_KEY}`;
    fetch(directionAPI)
      .then(response => response.json())
      .then(data => {
        const points = polyline.decode(data.routes[0].overview_polyline.points);
        const coords = points.map((point, index) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        setCoords(coords);
      });
  };
  const matchSelected = map => {
    if (selectedMap) {
      return selectedMap.id === map.id ? true : false;
    }
  };
  const onPress = (map, index) => {
    setSelectedMap(map);
    _carousel.current.snapToItem(index);
  };
  const getMarkers = () =>
    mapData.map((map, index) => {
      return (
        <Marker
          onPress={() => onPress(map, index)}
          coordinate={{
            latitude: map.geometry.location.lat,
            longitude: map.geometry.location.lng,
          }}
          title={map.name}
          description={map.vicinity}
          key={map.id}>
          <MapView.Callout tooltip={true} />
          <CustomMarkerOpacity selected={matchSelected(map)}>
            <CustomMarker>
              <Text>{index + 1}</Text>
            </CustomMarker>
          </CustomMarkerOpacity>
        </Marker>
      );
    });
  return (
    <View style={styles.wrap}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 49.2479999,
          longitude: -123.1300971,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        {getMarkers()}
        <MapView.Polyline
          coordinates={coords}
          strokeWidth={3}
          strokeColor="#588b4a"
        />
        <Polygon coordinates={QueenElizabeth} />
        <Polygon coordinates={VanDusen} />
      </MapView>
      <TouchableOpacity onPress={() => navigation.goBack('Home')}>
        <Icon name='chevron-left' size={30} color={theme.bodyTextColor} />
      </TouchableOpacity>
      <SearchButton onPress={() => GoogleAPIFetch()}>
        <Text style={styles.button}>Search in this area</Text>
      </SearchButton>
      <Containter>
        <MapSwiper
          mapData={mapData}
          cardWidth={cardWidth}
          setSelectedMap={setSelectedMap}
          _carousel={_carousel}
        />
      </Containter>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: 484,
  },
  button: {
    fontSize: 16,
    color: '#588b4a',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
export default ExploreScreen;
