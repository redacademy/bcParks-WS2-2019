import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Heading, ScreenBkgCont, PrimaryBtn, SubHeading } from '../../../globalStyles';
import { FormCont, InputCont, InputLabel, StyledInput, TextLink, SignBtnCont, LinkCont, SubmitBtnCont } from '../styles';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
//import bcrypt from "bcrypt";

const ADD_USER = gql`
    mutation CreateUser($data: UserCreateInput!) {
        createUser(data: $data) {
            id,
            email
        }
    }
`;


const SignUpScreen = ({ navigation, setUser }) => {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUser] = useMutation(ADD_USER, {
        onCompleted: insertData => {
            setUser({
                id: insertData.id,
                email: insertData.email
            })
        }
    })


    const handleSignup = () => {
        createUser({ variables: { data: { id, email, password } } })
    }

    return (
        <ScreenBkgCont>
            <Heading>Create your Account</Heading>
            <SubHeading>Having an account will help save your personal tracking data.</SubHeading>
            <FormCont>
                <InputCont>
                    <InputLabel>Email</InputLabel>
                    <StyledInput onChangeText={(text) => { 
                        setEmail(text)
                        setId(text)
                        }} />
                </InputCont>
                <InputCont>
                    <InputLabel>Password</InputLabel>
                    <StyledInput onChangeText={(text) => { setPassword(text) }} />
                </InputCont>
            </FormCont>
            <SignBtnCont>
                <TouchableOpacity onPress={handleSignup}>
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