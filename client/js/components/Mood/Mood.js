import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export const MoodText = styled.Text`
    font-family: ${theme.bodyFont};
    font-size: 16px;
    color: #303030;
`
const Mood = ({ moodValue, showText, iconSize }) => {
    let text;
    let iconName;

    if (moodValue <= 1) {
        text = 'Very Sad';
        iconName = 'emoticon-dead';
    } else if (moodValue > 1 && moodValue <= 2) {
        text = 'Sad';
        iconName = 'emoticon-sad';
    } else if (moodValue > 2 && moodValue <= 3) {
        text = 'Neutral';
        iconName = 'emoticon-neutral';
    } else if (moodValue > 3 && moodValue <= 4) {
        text = 'Happy';
        iconName = 'emoticon-happy';
    } else {
        text = 'Very Happy';
        iconName = 'emoticon';
    }

    return (
        <>
            <Icon2 name={iconName} size={iconSize} color={theme.MoodIconColor} ></Icon2>
            {showText && <MoodText>{text}</MoodText>}
        </>
    )
}

export default Mood;



