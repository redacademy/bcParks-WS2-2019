import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapContext from '../../../../context/MapContext';
import {GOOGLE_API_KEY} from '../../../../config';
import styled from 'styled-components';
const Brief = ({detail}) => {
  const {userLocation, APIData} = useContext(MapContext);
  const {location} = detail.geometry;
  const [distance, setDistance] = useState();

  useEffect(() => {
    const Url = userLocation
      ? `https://maps.googleapis.com/maps/api/directions/json?origin=${userLocation.latitude},${userLocation.longitude}&destination=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`
      : null;
    fetch(Url)
      .then(response => response.json())
      .then(data => setDistance(data.routes[0].legs[0].distance.text));
  }, [userLocation, APIData]);
  return (
    <View>
      <Box>
        <Text style={styles.title}>{detail.name}</Text>
        <Text>{distance}</Text>
      </Box>
      <Text style={styles.details}>{detail.vicinity}</Text>
    </View>
  );
};

const Box = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#303030',
  },
  distance: {
    fontSize: 16,
    color: '#303030',
  },
  details: {
    fontSize: 12,
    color: '#505050',
  },
});

export default Brief;
