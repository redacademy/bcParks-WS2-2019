import React, {useRef} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Card from '../Card';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';
const Box = styled.View`
  padding: 15px;
`;
const MapSwiper = ({mapData, cardWidth, setSelectedMap, _carousel}) => {
  const _renderItem = ({item, index}) => {
    return <Card detail={item} key={index} />;
  };
  return (
    <Box>
      <Text>Near By Green Spaces</Text>
      <Carousel
        ref={_carousel}
        data={mapData}
        renderItem={_renderItem}
        sliderWidth={375}
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

export default MapSwiper;
