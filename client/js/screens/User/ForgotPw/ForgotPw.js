import React from 'react';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import { Heading, ScreenBkgCont } from '../../../globalStyles';
import styled from 'styled-components';
import { Subheading } from '../../Onboarding/styles';


const ForgotPwScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Forgot Password</Heading>
            <Subheading>Please enter your email so we can send you a password reset link.</Subheading>
            <Text>Email</Text>
            <TextInput />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default ForgotPwScreen;