import React from "react";
import { withNavigation } from 'react-navigation';
import MoodSelect from "./MoodSelect";

const MoodSelectContainer = ({ navigation, route }) => {
    return (
        <MoodSelect navigation={navigation} params={route.params}/>
    )
}

export default withNavigation(MoodSelectContainer);