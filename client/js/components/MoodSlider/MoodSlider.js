import React, { useState } from 'react';
import { View } from 'react-native';
import { MoodIcon } from './styles';
import styled from 'styled-components';
import { theme } from '../../globalStyles';

const StyledSlider = styled.Slider`
    width: 300px;
    margin: 0 auto 120px;
`

const MoodSlider = () => {
    const [changeFace, setChangeFace] = useState(0);

    changeFaceSlide = () => {
        setChangeFace(changeFace + 0.5)
    }

    return (
        <View>
            <MoodIcon>Face test:{changeFace}</MoodIcon>
            <StyledSlider
                step={0.5}
                value={2.5}
                minimumValue={0}
                maximumValue={5}
                onValueChange={this.changeFaceSlide}
                thumbTintColor={theme.accentColor}
                minimumTrackTintColor={theme.accentColor}
                maximumTrackTintColor={theme.invertTextColor}
            />
        </View>
    );
}

export default MoodSlider;