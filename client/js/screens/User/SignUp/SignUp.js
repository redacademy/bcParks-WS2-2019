import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Heading, ScreenBkgCont, PrimaryBtn, SubHeading } from '../../../globalStyles';
import { FormCont, InputCont, InputLabel, StyledInput, TextLink, SignBtnCont, LinkCont, SubmitBtnCont } from '../styles';


const SignUpScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Create your Account</Heading>
            <SubHeading>Having an account will help save your personal tracking data.</SubHeading>
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
            <SignBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <PrimaryBtn>submit</PrimaryBtn>
                </TouchableOpacity>
            </SignBtnCont>
            <LinkCont>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <TextLink>I have a login</TextLink>
                </TouchableOpacity>
            </LinkCont>
        </ScreenBkgCont>
    );
}

export default SignUpScreen;