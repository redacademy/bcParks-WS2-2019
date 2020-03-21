import React from 'react';
import StartStopTimer from '../../components/StartStopTimer/StartStopTimer';
import Maps from '../../components/Maps';

const TimerScreen = ({navigation}) => {
  return (
    <Maps navigation={navigation} _carousel={false}>
      <StartStopTimer navigation={navigation} />
    </Maps>
  );
};

export default TimerScreen;
