import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Heading, ScreenBkgCont } from '../../../globalStyles';
import styled from 'styled-components';


const ForgotPwScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>ForgotPw</Heading>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default ForgotPwScreen;