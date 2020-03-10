import React from 'react';
import { TouchableOpacity } from 'react-native';
import { theme, Heading, ScreenBkgCont, NextBtnCont, PrimaryBtn, InputSkipText } from '../../globalStyles';
import styled from 'styled-components';
import MoodSlider from '../../components/MoodSlider/MoodSlider';

const SubHeading = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.headlineFont};
    text-align: center;
`

const MoodSelectScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Amazing!</Heading>
            <SubHeading>How are you feeling?</SubHeading>
            <MoodSlider />
            <NextBtnCont>
                <TouchableOpacity onPress={() => navigation.push('TextInput')}>
                    <PrimaryBtn>Next</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
            <TouchableOpacity onPress={() => navigation.push('TextInput')}>
                <InputSkipText>Skip</InputSkipText>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default MoodSelectScreen;