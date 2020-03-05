import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DayButton } from '../../screens/Goal/style';

const DaysButton = (props) => {
    const [selected] = useState(false);

    return (
            <DayButton  
                toggle={props.days.includes(props.long) ? !selected : selected} 
                onPress={() => {
                    props.addDays(props.long)
                }}>
                <Text>{props.short}</Text>
            </DayButton>
    )
}

export default DaysButton;