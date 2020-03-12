import React, { useState } from 'react';
import { View } from 'react-native';
import { MoodIcon } from './styles';
import styled from 'styled-components';
import { theme } from '../../globalStyles';

const StyledSlider = styled.Slider`
    width: 300px;
    margin: 0 auto 120px;
`

const MoodSlider = (props) => {

    return (
        <View>
            <MoodIcon>Face test:{props.mood}</MoodIcon>
            <StyledSlider
                step={1}
                value={props.mood}
                minimumValue={0}
                maximumValue={5}
                onValueChange={value => props.update(value)}
                thumbTintColor={theme.accentColor}
                minimumTrackTintColor={theme.accentColor}
                maximumTrackTintColor={theme.invertTextColor}
            />
        </View>
    );
}

export default MoodSlider;