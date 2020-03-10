import React from "react"
import { withNavigation } from 'react-navigation';
import Goal from "./Goal"

const GoalContainer = ({ navigation }) => {
    return (
        <Goal navigation={navigation} />
    )
}

export default withNavigation(GoalContainer);