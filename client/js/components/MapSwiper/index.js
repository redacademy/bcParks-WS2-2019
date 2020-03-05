import React, {useState} from 'react';
import {Text, Animated, ScrollView} from 'react-native';
import Card from '../Card';
import styled from 'styled-components';

const Box = styled.View`
  padding: 15px;
`;
const MapSwiper = ({mapData}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const cardWidth = 291;
  const Slides = () => mapData.map(map => <Card detail={map} key={map.id} />);
  return (
    <Box>
      <Text>Near By Green Spaces</Text>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animation,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {Slides()}
      </Animated.ScrollView>
    </Box>
  );
};

export default MapSwiper;
