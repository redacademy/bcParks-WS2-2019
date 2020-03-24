import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading, PrimaryBtn } from '../../../globalStyles';
import { FormCont, InputCont, InputLabel, StyledInput, LoginBtnCont, LinkCont, TextLink, styles } from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnLanding')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIconLogin} />
                </TouchableOpacity>
                <Heading>Login</Heading>
            </HeaderCont>
            <SubHeading>Let's continue your journey!</SubHeading>
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
                    <PrimaryBtn>start</PrimaryBtn>
                </TouchableOpacity>
            </LoginBtnCont>
            <LinkCont>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <TextLink>skip to Home</TextLink>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                    <TextLink>Create an Account</TextLink>
                </TouchableOpacity>
            </LinkCont>
        </LinearGradient>
    );
}

export default LoginScreen;