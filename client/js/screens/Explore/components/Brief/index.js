import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapContext from '../../../../context/MapContext';
import {GOOGLE_API_KEY} from '../../../../config';
const Brief = ({detail}) => {
  const {userLocation} = useContext(MapContext);
  const {location} = detail.geometry;
  const [distance, setDistance] = useState();

  useEffect(() => {
    const Url = `https://maps.googleapis.com/maps/api/directions/json?origin=${userLocation.latitude},${userLocation.longitude}&destination=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`;
    fetch(Url)
      .then(response => response.json())
      .then(data => setDistance(data.routes[0].legs[0].distance.text));
  }, [userLocation]);
  return (
    <View>
      <Text>{detail.name}</Text>
      <Text>{distance}</Text>
      <Text>{detail.vicinity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Brief;
