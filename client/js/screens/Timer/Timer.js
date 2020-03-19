import React from 'react';
import {View, StyleSheet} from 'react-native';
import StartStopTimer from '../../components/StartStopTimer/StartStopTimer';
import Maps from '../../components/Maps';

const TimerScreen = ({navigation}) => {
  return (
    <View>
      <Maps>
        <StartStopTimer navigation={navigation} />
      </Maps>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
  },
});
export default TimerScreen;
