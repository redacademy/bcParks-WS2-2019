import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Heading, ScreenBkgCont } from '../../../globalStyles';

const LoginScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Login</Heading>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                <Text>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default LoginScreen;