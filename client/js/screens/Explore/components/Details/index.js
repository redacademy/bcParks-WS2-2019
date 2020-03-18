import React from 'react';
import {Text, Modal, StyleSheet} from 'react-native';

const Details = ({modalVisible}) => {
  return (
    <Modal
      style={styles.container}
      animationType="fade"
      transparent={false}
      visible={modalVisible}>
      <Text>Details</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
