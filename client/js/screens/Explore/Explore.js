
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import fetchData from '../../config/fetchData';
import MapSwiper from '../../components/MapSwiper';

const dataURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.2479999,-123.1300971&radius=1500&type=park&fields=place_id,name,opening_hours,formatted_address,geometry&key=`;
const ExploreScreen = () => {
  const [mapData, setMapData] = useState([]);

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
  const getMarkers = () => {
    mapData.map(map => {
      <Marker
        coordinate={{
          latitude: map.geometry.location.lat,
          longitude: map.geometry.location.lng,
        }}
        title={map.name}
        key={map.id}
      />;
    });
  };
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
        {mapData.length ? getMarkers() : null}
      </MapView>
      <MapSwiper />
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
export default ExploreScreen;
