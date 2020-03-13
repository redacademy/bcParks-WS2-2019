import React from "react";
import { withNavigation } from 'react-navigation';
import Login from "./Login";

const LoginContainer = ({ navigation }) => {
    return (
        <Login navigation={navigation} />
    )
}

export default withNavigation(LoginContainer);