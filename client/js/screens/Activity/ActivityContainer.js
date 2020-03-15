import React, { useState } from 'react';
import Activity from './Activity';
import {
    Text,
    View,
} from 'react-native';
import moment from "moment";

function ActivityContainer() {
    const [focusDay, setFocusDay] = useState(moment());
    const [period, setPeriod] = useState(moment());

    return (
        <Activity
            focusDay={focusDay}
            setFocusDay={setFocusDay}
            period={period}
            setPeriod={setPeriod}
        />
    )
}

export default ActivityContainer;