import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Heading, ScreenBkgCont, PrimaryBtn } from '../../../globalStyles';
import { InputLabel, StyledInput, TextLink, FormCont, InputCont, Flex, LinkCont, BtnCont } from '../styles';

const LoginScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Login</Heading>

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
            <BtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <PrimaryBtn>Login</PrimaryBtn>
                </TouchableOpacity>
            </BtnCont>
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