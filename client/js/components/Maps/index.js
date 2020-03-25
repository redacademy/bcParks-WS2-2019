import React, {useEffect, useState, useRef, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';
import polyline from '@mapbox/polyline';
import fetchData from '../../config/fetchData';
import styled from 'styled-components';
import {addMapMutation} from './helper/mutation';
import {GOOGLE_API_KEY} from '../../config';
import {QueenElizabeth, VanDusen} from './utils/PolygonSample';
import BackButton from '../BackButton';
import MapContext from '../../context/MapContext';

const Containter = styled.View`
  height: 333px;
  background: #fff;
  width: 100%;
`;
const SearchButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
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
  opacity: ${({selected}) => (selected ? 1 : 0.5)};
`;
const Maps = ({children, navigation, _carousel}) => {
  const {
    mapData,
    APIData,
    setAPIData,
    selectedMap,
    setSelectedMap,
    userLocation,
    coords,
    setCoords,
    selectedIndex,
    setSelectedIndex,
    region,
    setRegion,
    setArrived,
  } = useContext(MapContext);

  const calcRadius = () => region.longitudeDelta * 40000;
  const GoogleAPIFetch = (lat, lng) => {
    const dataURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${calcRadius()}&type=park&fields=place_id,name,opening_hours,formatted_address,geometry&key=${GOOGLE_API_KEY}`;
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setAPIData(data.results))
      .then(() => AddDataFromGoogleAPI());
  };
  const AddDataFromGoogleAPI = () => {
    APIData.map(APIMap => {
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
      mapData.filter(map => {
        if (map.externalId !== APIMap.id) {
          fetchData(mutation);
        }
      });
    });
  };

  const mergeLot = (latitude, longitude) => `${latitude}, ${longitude}`;
  useEffect(() => {
    if (selectedMap && userLocation) {
      const {location} = selectedMap.geometry;
      getDirections(
        mergeLot(userLocation.latitude, userLocation.longitude),
        mergeLot(location.lat, location.lng),
      );
    }
  }, [selectedMap, userLocation]);
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
        if (data.routes[0].legs[0].distance.value >= 100) {
          setArrived(true);
        }
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
    setSelectedIndex(index);
  };
  useEffect(() => {
    if (userLocation) {
      GoogleAPIFetch(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);
  useEffect(() => {
    if (_carousel) {
      _carousel.current.snapToItem(selectedIndex);
    }
  }, [selectedIndex]);
  useEffect(() => {
    setSelectedMap(APIData[0]);
  }, [APIData]);

  const getMarkers = () =>
    APIData.map((map, index) => {
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
          latitude: userLocation ? userLocation.latitude : 49.2506506,
          longitude: userLocation ? userLocation.longitude : -123.0981612,
          latitudeDelta: 0.0298,
          longitudeDelta: 0.0228,
        }}
        onRegionChange={region => setRegion(region)}
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
      <BackButton navigation={navigation} />
      <SearchButton
        onPress={() => GoogleAPIFetch(region.latitude, region.longitude)}>
        <Text style={styles.button}>Search in this area</Text>
      </SearchButton>
      <Containter>{children}</Containter>
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
export default Maps;
