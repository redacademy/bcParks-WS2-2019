import React, { useState } from 'react';
import { withNavigation } from "react-navigation";
import Activity from './Activity';

import {
    Text,
    View,
} from 'react-native';

import moment from "moment-timezone";


function ActivityContainer({ navigation }) {
    const [focusDay, setFocusDay] = useState(moment.tz("America/Vancouver"));
    const [focusWeek, setFocusWeek] = useState(moment().startOf('week'));
    const [showWeekly, setShowWeekly] = useState(false)
    return (
        <>
            {showWeekly &&
                <Activity
                    focus={focusWeek}
                    setFocus={setFocusWeek}
                    period={7}
                    navigation={navigation}
                    showWeekly={showWeekly}
                    setShowWeekly={setShowWeekly}
                />
            }

            {!showWeekly &&
                <Activity
                    focus={focusDay}
                    setFocus={setFocusDay}
                    period={1}
                    navigation={navigation}
                    showWeekly={showWeekly}
                    setShowWeekly={setShowWeekly}
                />
            }
        </>
    )
}

export default withNavigation(ActivityContainer);