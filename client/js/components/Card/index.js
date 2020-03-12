import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {GOOGLE_API_KEY} from '../../config';

const ImageFrame = styled.Image`
  background: #333;
  height: 161px;
  border-radius: 4px;
`;
const Card = ({detail}) => {
  const getImages = reference => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${reference}&key=${GOOGLE_API_KEY}`;
  };
  const noImage = '';
  return (
    <View style={styles.card}>
      <ImageFrame
        source={{
          url: detail.photo_reference
            ? getImages(detail.photo_reference)
            : noImage,
        }}
      />
      <View>
        <Text>{detail.name}</Text>
        <Text>distance</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
});
export default Card;
