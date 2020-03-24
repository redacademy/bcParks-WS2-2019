import React from "react";
import { withNavigation } from 'react-navigation';
import SignUp from "./SignUp";
import AuthContext from "../../../context/AuthContext";

const SignUpContainer = ({ navigation }) => {
    return (
        <AuthContext.Consumer>
            {({ user, setUser }) => {
                return <SignUp navigation={navigation} user={user} setUser={setUser} />
            }}
        </AuthContext.Consumer>

    )
}

export default withNavigation(SignUpContainer);