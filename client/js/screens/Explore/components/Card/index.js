import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GetImages from '../utils/GetImages';
import Details from '../Details';
import styled from 'styled-components';
import Brief from '../Brief';

const ImageWrap = styled.View`
  height: 170px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Card = ({detail}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Details
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        detail={detail}
      />
      <TouchableOpacity
        style={styles.card}
        onPress={() => setModalVisible(true)}>
        <ImageWrap>
          <GetImages
            reference={
              detail.photos
                ? detail.photos[0].photo_reference
                : detail.photo_reference
            }
          />
        </ImageWrap>
        <Brief detail={detail} limit={true} />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
});
export default Card;
