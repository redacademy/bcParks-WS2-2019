import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenBkgCont, Heading, SubHeading, PrimaryBtn } from '../../globalStyles';
import { NextBtnCont, InputSkipText } from '../Timer/styles';
import MoodSlider from '../../components/MoodSlider/MoodSlider';

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