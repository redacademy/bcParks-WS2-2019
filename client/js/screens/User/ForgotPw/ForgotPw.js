import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScreenBkgCont, Heading, SubHeading, PrimaryBtn } from '../../../globalStyles';
import { FormCont, InputCont, InputLabel, StyledInput, PwBtnCont, PwLinkCont, TextLink } from '../styles';


const ForgotPwScreen = ({ navigation }) => {

    return (
        <ScreenBkgCont>
            <Heading>Forgot Password</Heading>
            <SubHeading>Please enter your email so we can send you a password reset link.</SubHeading>
            <FormCont>
                <InputCont>
                    <InputLabel>Email</InputLabel>
                    <StyledInput />
                </InputCont>
            </FormCont>
            <PwBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <PrimaryBtn>submit</PrimaryBtn>
                </TouchableOpacity>
            </PwBtnCont>
            <PwLinkCont>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <TextLink>Back to login</TextLink>
                </TouchableOpacity>
            </PwLinkCont>
        </ScreenBkgCont>
    );
}

export default ForgotPwScreen;