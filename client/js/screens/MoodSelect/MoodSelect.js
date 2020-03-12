import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenBkgCont, Heading, SubHeading, PrimaryBtn } from '../../globalStyles';
import { NextBtnCont, InputSkipText } from '../Timer/styles';
import MoodSlider from '../../components/MoodSlider/MoodSlider';


const MoodSelectScreen = ({ navigation, params }) => {
    const [mood, updateMood] = useState(2.5)
    const [newParams, updateParams] = useState(params)
    
    return (
        <ScreenBkgCont>
            <Heading>Amazing!</Heading>
            <SubHeading>How are you feeling?</SubHeading>
            <MoodSlider mood={mood} update={updateMood}/>
            <NextBtnCont>
                <TouchableOpacity onPress={() => {
                    params.mood = mood;
                    updateParams(params)
                    navigation.push('TextInput', newParams);
                }}>
                    <PrimaryBtn>Next</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
            <TouchableOpacity onPress={() => {
                navigation.push('TextInput', params)
            }}>
                <InputSkipText>Skip</InputSkipText>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default MoodSelectScreen;