import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Heading, ScreenBkgCont, PrimaryBtn } from '../../../globalStyles';
import { Subheading } from '../../Onboarding/styles';
import { FormCont, InputCont, InputLabel, StyledInput, TextLink, BtnCont, LinkCont, SubmitBtnCont } from '../styles';


const SignUpScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Create your Account</Heading>
            <Subheading>Having an account will help save your personal tracking data.</Subheading>
            <FormCont>
                <InputCont>
                    <InputLabel>Email</InputLabel>
                    <StyledInput />
                </InputCont>
                <InputCont>
                    <InputLabel>Password</InputLabel>
                    <StyledInput />
                </InputCont>
                <InputCont>
                    <InputLabel>Confirm Password</InputLabel>
                    <StyledInput />
                </InputCont>
            </FormCont>
            <SubmitBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <PrimaryBtn>Submit</PrimaryBtn>
                </TouchableOpacity>
            </SubmitBtnCont>
            <LinkCont>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <TextLink>I have a login</TextLink>
                </TouchableOpacity>
            </LinkCont>
        </ScreenBkgCont>
    );
}

export default SignUpScreen;