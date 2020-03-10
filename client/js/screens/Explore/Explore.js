import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import fetchData from '../../config/fetchData';
import MapSwiper from '../../components/MapSwiper';
import styled from 'styled-components';
import {addMapMutation} from './helper/mutation';

const GOOGLE_API_KEY = '';
const dataURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.2479999,-123.1300971&radius=1500&type=park&fields=place_id,name,opening_hours,formatted_address,geometry&key=${GOOGLE_API_KEY}`;
const Containter = styled.View`
  height: 333px;
  background: #fff;
`;
const SearchButton = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
  height: 40px;
  background: #fff;
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
  opacity: ${({selected}) => (selected ? 1 : 0.5)};
`;
const ExploreScreen = () => {
  const [mapData, setMapData] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [selectedMap, setSelectedMap] = useState();
  const _carousel = useRef();

  const cardWidth = 291;
  const getImages = reference => {
    const photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${GOOGLE_API_KEY}`;
  };
  const GoogleAPIFetch = () => {
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
    });
  }, []);
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
    <View>
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
      </MapView>
      <SearchButton onPress={() => GoogleAPIFetch()}>
        <Text>Search Area</Text>
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
  map: {
    width: '100%',
    height: 484,
  },
});
export default ExploreScreen;
