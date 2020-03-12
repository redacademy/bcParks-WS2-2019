import React from "react";
import { withNavigation } from 'react-navigation';
import ForgotPw from "./ForgotPw";

const ForgotPwContainer = ({ navigation }) => {
    return (
        <ForgotPw navigation={navigation} />
    )
}

export default withNavigation(ForgotPwContainer);