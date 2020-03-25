import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { StyledSlider, MoodIconCont } from './styles';
import Mood from '../Mood/Mood';


const MoodSlider = (props) => {
    return (
        <View>
            <MoodIconCont>
                <Mood moodValue={props.mood} iconSize={140} />
            </MoodIconCont>
            <StyledSlider
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