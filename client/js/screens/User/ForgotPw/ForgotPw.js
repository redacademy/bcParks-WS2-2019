import React from 'react';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import { Heading, ScreenBkgCont, PrimaryBtn } from '../../../globalStyles';
import styled from 'styled-components';
import { Subheading } from '../../Onboarding/styles';
import { Btn } from '../../../components/StartStopTimer/styles';
import { FormCont, InputCont, InputLabel, StyledInput, BtnCont, LinkCont, TextLink } from '../styles';


const ForgotPwScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Forgot Password</Heading>
            <Subheading>Please enter your email so we can send you a password reset link.</Subheading>
            <FormCont>
                <InputCont>
                    <InputLabel>Email</InputLabel>
                    <StyledInput />
                </InputCont>
            </FormCont>
            <BtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <PrimaryBtn>Submit</PrimaryBtn>
                </TouchableOpacity>
            </BtnCont>
            <LinkCont>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <TextLink>Back to login</TextLink>
                </TouchableOpacity>
            </LinkCont>
        </ScreenBkgCont>
    );
}

export default ForgotPwScreen;