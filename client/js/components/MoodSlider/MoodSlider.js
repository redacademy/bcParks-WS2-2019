import React from 'react';
import { View } from 'react-native';
import { MoodIcon } from './styles';
import styled from 'styled-components';
import { theme } from '../../globalStyles';

const StyledSlider = styled.Slider`
    width: 300px;
    height: 100px;
    margin: 0 auto 120px;
`

const MoodSlider = () => {
    return (
        <View>
            <MoodIcon>Face</MoodIcon>
            <StyledSlider
                minimumValue={0}
                maximumValue={5}
                minimumTrackTintColor={theme.accentColor}
                maximumTrackTintColor="#FFF"
            />
        </View>
    );
}

export default MoodSlider;