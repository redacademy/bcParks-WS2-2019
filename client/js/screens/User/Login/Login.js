import React from 'react';
import { TouchableOpacity, Text, TextInput, CheckBox } from 'react-native';
import { Heading, ScreenBkgCont } from '../../../globalStyles';

const LoginScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Login</Heading>
            <Text>Email</Text>
            <TextInput />
            <Text>Password</Text>
            <TextInput />
            <Text>Remember me</Text>
            <CheckBox />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                <Text>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('ForgotPw')}>
                <Text>Forgot Password</Text>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default LoginScreen;