import React from "react";
import Timer from "./Timer";
import { withNavigation } from "react-navigation";

const TimerContainer = ({ navigation }) => {
    return (
        <Timer navigation={navigation} />
    )
}

export default withNavigation(TimerContainer);