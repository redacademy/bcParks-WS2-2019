import React from "react";
import { withNavigation } from 'react-navigation';
import MoodSelect from "./MoodSelect";

const MoodSelectContainer = ({ navigation }) => {
    return (
        <MoodSelect navigation={navigation} />
    )
}

export default withNavigation(MoodSelectContainer);