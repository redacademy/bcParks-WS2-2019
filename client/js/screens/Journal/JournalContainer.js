import React from "react"
import { withNavigation } from 'react-navigation';
import Journal from "./Journal"

const JournalContainer = ({ navigation }) => {
    return (
        <Journal navigation={navigation} />
    )
}

export default withNavigation(JournalContainer);