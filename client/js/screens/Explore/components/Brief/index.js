import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapContext from '../../../../context/MapContext';
import {GOOGLE_API_KEY} from '../../../../config';
import styled from 'styled-components';
import {theme} from '../../../../globalStyles';
const Brief = ({detail, limit}) => {
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

  const maxLimit = 20;
  const Elipsis = text =>
    text.length > maxLimit ? text.substring(0, maxLimit - 3) + '...' : text;

  return (
    <View>
      <Box>
        <Text style={styles.title}>
          {limit ? Elipsis(detail.name) : detail.name}
        </Text>
        <Text style={styles.distance}>{distance}</Text>
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
  margin-bottom: 12px;
`;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#303030',
  },
  distance: {
    fontSize: 18,
    color: '#303030',
  },
  details: {
    fontSize: 16,
    color: '#505050',
  },
});

export default Brief;
