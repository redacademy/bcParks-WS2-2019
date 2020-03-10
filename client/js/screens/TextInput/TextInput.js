import React from 'react';
import { TouchableOpacity } from 'react-native';
import { theme, ScreenBkgCont, PrimaryBtn, NextBtnCont, InputSkipText } from '../../globalStyles';
import styled from 'styled-components';
import InputTextBox from '../../components/InputText/InputText';

const SubHeading = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.headlineFont};
    width: 70%
    margin: 70px 35px 40px;
    line-height: 30px;
`

const TextInputScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <SubHeading>Write about your experience with Green Time.</SubHeading>
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