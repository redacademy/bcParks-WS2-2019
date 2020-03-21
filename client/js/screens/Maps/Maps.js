import React from 'react';
import Maps from './components/Maps';
import Timer from './components/Timer';

const MapScreen = ({navigation}) => {
  return (
    <Maps>
      <Timer navigation={navigation} />
    </Maps>
  );
};

export default MapScreen;
