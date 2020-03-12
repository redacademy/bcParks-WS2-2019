import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Heading, ScreenBkgCont } from '../../../globalStyles';
import styled from 'styled-components';


const SignUpScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>SignUp</Heading>

            <TouchableOpacity onPress={() => navigation.push('ForgotPw')}>
                <Text>ForgotPw</Text>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default SignUpScreen;