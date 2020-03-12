import React from 'react';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import { Heading, ScreenBkgCont } from '../../../globalStyles';
import styled from 'styled-components';
import { Subheading } from '../../Onboarding/styles';


const SignUpScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Create your Account</Heading>
            <Subheading>Having an account will help save your personal tracking data.</Subheading>
            <Text>Email</Text>
            <TextInput />
            <Text>Password</Text>
            <TextInput />
            <Text>Confirm Password</Text>
            <TextInput />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>I have a login</Text>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default SignUpScreen;