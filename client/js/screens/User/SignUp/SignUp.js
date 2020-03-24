import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, PrimaryBtn, SubHeading } from '../../../globalStyles';
import { FormCont, InputCont, InputLabel, StyledInput, SignBtnCont, styles } from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
            navigation.navigate('OnLocation');
        }
    })


    const handleSignup = () => {
        createUser({ variables: { data: { id, email, password } } })
    }

    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnLanding')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIconSignUp} />
                </TouchableOpacity>
                <Heading>Create your Account</Heading>
            </HeaderCont>
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
        </LinearGradient>
    );
}

export default SignUpScreen;