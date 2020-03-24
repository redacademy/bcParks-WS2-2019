import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenBkgCont, Heading, SubHeading, PrimaryBtn } from '../../../globalStyles';
import { FormCont, InputCont, InputLabel, StyledInput, Flex, LoginBtnCont, LinkCont, TextLink } from '../styles';

import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FIND_USER = gql`
    query Users($data: UserWhereInput) {
        users(where: $data) {
            id
            email
        }
    }
`;

const LoginScreen = ({ navigation, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [getUser] = useLazyQuery(FIND_USER, {
        onCompleted: userData => {
            console.log("setting user", userData.users[0])
            setUser({
                id: userData.users[0].id,
                email: userData.users[0].email
            })
            navigation.navigate('Tabs')
        }
    })
    const handleLogin = () => {
        console.log("logging in")
        getUser({ variables: { data: { email, password } } })
    }

    return (
        <ScreenBkgCont>
            <Heading>Login</Heading>
            <SubHeading>Log into your account to start your journey!</SubHeading>
            <FormCont>
                <InputCont>
                    <InputLabel>Email</InputLabel>
                    <StyledInput onChangeText={(text) => { setEmail(text) }} />
                </InputCont>
                <InputCont>
                    <InputLabel>Password</InputLabel>
                    <StyledInput onChangeText={(text) => { setPassword(text) }} />
                </InputCont>
            </FormCont>
            <LoginBtnCont>
                <TouchableOpacity onPress={handleLogin}>
                    <PrimaryBtn>login</PrimaryBtn>
                </TouchableOpacity>
            </LoginBtnCont>
            <LinkCont>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <TextLink>Go Home</TextLink>
                </TouchableOpacity>
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