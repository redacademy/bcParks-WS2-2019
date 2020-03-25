import React, { useState } from 'react';
import { DayButton, DayTextBtn } from '../../screens/Goal/styles';

const DaysButton = (props) => {
    const [selected] = useState(false);
    const [toggle, setToggle] = useState(false)
    return (
        <DayButton
            toggle={toggle ? !selected : selected}
            everyday={props.everyday}
            onPress={() => {
                props.addDays(props.long)
                setToggle(!toggle)
            }}>
            <DayTextBtn toggle={toggle? !selected : selected}
                        everyday={props.everyday}
            >
                {props.short}
            </DayTextBtn>
        </DayButton>
    )
}

export default DaysButton;