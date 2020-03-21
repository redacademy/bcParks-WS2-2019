import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {GOOGLE_API_KEY} from '../../../../config';
import Placeholder from '../../../../assets/images/Placeholder';
const ImageFrame = styled.Image`
  height: 161px;
  border-radius: 4px;
`;
const Card = ({detail}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const getImages = reference => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${reference}&key=${GOOGLE_API_KEY}`;
  };
  return (
    <TouchableOpacity style={styles.card}>
      {detail.photo_reference ? (
        <ImageFrame source={{url: getImages(detail.photo_reference)}} />
      ) : (
        <Placeholder />
      )}
      <View>
        <Text>{detail.name}</Text>
        <Text>distance</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
});
export default Card;
