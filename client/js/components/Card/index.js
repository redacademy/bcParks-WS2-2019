import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';

const ImageFrame = styled.Image`
  background: #333;
  height: 161px;
  border-radius: 4px;
`;
const Card = ({detail}) => {
  return (
    <View style={style.card}>
      <ImageFrame />
      <View>
        <Text>{detail.name}</Text>
        <Text>distance</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  card: {
    width: 291,
  },
});
export default Card;
