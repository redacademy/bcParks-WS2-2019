import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const ExploreScreen = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 49.2479999,
          longitude: -123.1300971,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: 49.2479999,
            longitude: -123.1300971,
          }}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
export default ExploreScreen;
