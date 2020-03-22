import React, {useEffect} from 'react';
import {Text, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import GetImages from '../utils/GetImages';
import Brief from '../Brief';
import {PrimaryBtn} from '../../../../globalStyles';

const Details = ({modalVisible, setModalVisible, detail}) => {
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.header}></View>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text>close</Text>
      </TouchableOpacity>
      <View style={styles.image}>
        <GetImages reference={detail.photo_reference} />
      </View>
      <Brief detail={detail} />
      <PrimaryBtn>Google Maps</PrimaryBtn>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 44,
  },
  image: {
    height: 307,
  },
});

export default Details;
