import React, { useState } from 'react';
import { DayButton, DayTextBtn } from '../../screens/Goal/styles';

const DaysButton = (props) => {
    const [selected] = useState(false);

    return (
        <DayButton
            toggle={props.days.includes(props.long) ? !selected : selected}
            onPress={() => {
                props.addDays(props.long)
            }}>
            <DayTextBtn toggle={props.days.includes(props.long) ? !selected : selected}>
                {props.short}
            </DayTextBtn>
        </DayButton>
    )
}

export default DaysButton;