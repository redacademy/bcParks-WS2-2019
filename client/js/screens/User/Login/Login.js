import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenBkgCont, Heading, SubHeading, PrimaryBtn } from '../../../globalStyles';
import { FormCont, InputCont, InputLabel, StyledInput, Flex, LoginBtnCont, LinkCont, TextLink } from '../styles';

const LoginScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Login</Heading>
            <SubHeading>Log into your account to start your journey!</SubHeading>
            <FormCont>
                <InputCont>
                    <InputLabel>Email</InputLabel>
                    <StyledInput />
                </InputCont>
                <InputCont>
                    <InputLabel>Password</InputLabel>
                    <StyledInput />
                </InputCont>
                <Flex>
                    <InputLabel>Remember me</InputLabel>
                </Flex>
            </FormCont>
            <LoginBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <PrimaryBtn>login</PrimaryBtn>
                </TouchableOpacity>
            </LoginBtnCont>
            <LinkCont>
                <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                    <TextLink>Create an Account</TextLink>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('ForgotPw')}>
                    <TextLink>Forgot Password</TextLink>
                </TouchableOpacity>
            </LinkCont>
        </ScreenBkgCont>
    );
}

export default LoginScreen;