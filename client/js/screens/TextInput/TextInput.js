import React from 'react';
import { TouchableOpacity } from 'react-native';
import { theme, ScreenBkgCont, PrimaryBtn } from '../../globalStyles';
import { NextBtnCont, InputSkipText } from '../Timer/styles';
import InputTextBox from '../../components/InputText/InputText';
import styled from 'styled-components';

const InputHeading = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.bodyFont};
    width: 70%
    margin: 70px 35px 40px;
    line-height: 30px;
`

const TextInputScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <InputHeading>Write about your experience with Green Time.</InputHeading>
            <InputTextBox />
            <NextBtnCont>
                <TouchableOpacity onPress={() => {
                    navigation.popToTop()
                    navigation.navigate('Home')
                }}>
                    <PrimaryBtn>done</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
            <TouchableOpacity onPress={() => {
                navigation.popToTop()
                navigation.navigate('Home')
            }}>
                <InputSkipText>skip</InputSkipText>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default TextInputScreen;