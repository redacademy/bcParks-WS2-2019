import React from "react";
import { withNavigation } from 'react-navigation';
import TextInput from "./TextInput";

const TextInputContainer = ({ navigation }) => {
    return (
        <TextInput navigation={navigation} />
    )
}

export default withNavigation(TextInputContainer);