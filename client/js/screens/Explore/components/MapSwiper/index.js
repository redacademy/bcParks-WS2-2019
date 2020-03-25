import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Card from '../Card';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';
const Box = styled.View`
  padding: 15px;
`;
const MapSwiper = ({mapData, setSelectedMap, _carousel}) => {
  const cardWidth = 330;

  const _renderItem = ({item, index}) => {
    return <Card detail={item} key={index} />;
  };
  return (
    <Box>
      <Text style={styles.title}>Nearby Green Spaces</Text>
      <Carousel
        ref={_carousel}
        data={mapData}
        renderItem={_renderItem}
        sliderWidth={1000}
        itemWidth={cardWidth}
        snapOnAndroid={true}
        showsHorizontalScrollIndicator={false}
        inactiveSlideScale={1}
        inactiveSlideOpacity={0.5}
        removeClippedSubviews={false}
        activeSlideAlignment="start"
        onBeforeSnapToItem={index => setSelectedMap(mapData[index])}></Carousel>
    </Box>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    letterSpacing: -0.14,
    marginBottom: 14,
    color: '#303030',
  },
});

export default MapSwiper;
