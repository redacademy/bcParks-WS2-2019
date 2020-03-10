import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';

const ImageFrame = styled.Image`
  background: #333;
  height: 161px;
  border-radius: 4px;
`;
const Card = ({detail}) => {
  return (
    <View>
      <ImageFrame />
      <View>
        <Text>{detail.name}</Text>
        <Text>distance</Text>
      </View>
    </View>
  );
};

export default Card;
