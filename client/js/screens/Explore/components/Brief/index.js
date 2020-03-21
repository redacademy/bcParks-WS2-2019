import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Brief = ({detail}) => {
  return (
    <View>
      <Text>{detail.name}</Text>
      <Text>distance</Text>
      <Text>{detail.vicinity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Brief;
