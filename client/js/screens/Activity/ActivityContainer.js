import React, { useState } from 'react';
import { withNavigation } from "react-navigation";
import Activity from './Activity';
import {
    Text,
    View,
} from 'react-native';
import moment from "moment";

function ActivityContainer({ navigation }) {
    const [focusDay, setFocusDay] = useState(moment());
    const [period, setPeriod] = useState(moment());

    return (
        <Activity
            focusDay={focusDay}
            setFocusDay={setFocusDay}
            period={period}
            setPeriod={setPeriod}
            navigation={navigation}
        />
    )
}

export default withNavigation(ActivityContainer);