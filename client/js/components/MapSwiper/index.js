import React from 'react';
import {Text} from 'react-native';
import Card from '../Card';
import styled from 'styled-components';

const Box = styled.View`
  padding: 15px;
`;
const MapSwiper = ({mapData}) => {
  const Slides = () => mapData.map(map => <Card detail={map} key={map.id} />);
  return (
    <Box>
      <Text>Near By Green Spaces</Text>
      {Slides()}
    </Box>
  );
};

export default MapSwiper;
