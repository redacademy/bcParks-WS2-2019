import React from "react";
import { withNavigation } from 'react-navigation';
import TextInput from "./TextInput";

const TextInputContainer = ({ navigation, route }) => {
    return (
        <TextInput navigation={navigation} params={route.params}/>
    )
}

export default withNavigation(TextInputContainer);