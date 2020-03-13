import React from "react";
import { withNavigation } from 'react-navigation';
import SignUp from "./SignUp";

const SignUpContainer = ({ navigation }) => {
    return (
        <SignUp navigation={navigation} />
    )
}

export default withNavigation(SignUpContainer);