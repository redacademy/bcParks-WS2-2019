import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StartStopCont, TimerDisplay, InfoTextCont, InfoText, Btn } from './styles.js';
import { theme } from '../../globalStyles';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import moment from 'moment';


const StartStopTimer = ({navigation}) => {

    const [startStop, setStartStop] = useState(true);
    const [startTime, setStartTime] = useState("");
    const [date, setDate] = useState("");

    const startTimer = () => {
        setStartStop(!startStop);
        setStartTime(moment().format());
        setDate(moment().format("YYYY-MM-DD"));
    }

    const stopTimer = () => {
        setStartStop(!startStop);
        const endTime = moment().format()
        navigation.push('MoodSelect', {startTime, endTime, date})
    }


    return (
        <StartStopCont>
            <TimerDisplay>00:00:00</TimerDisplay>
            <InfoTextCont>
                <InfoText>Spending more time in nature contributes to a better sleep cycle and helps with lowering anxiety</InfoText>
            </InfoTextCont>
            <TouchableOpacity onPress={ 
                startStop ? 
                    startTimer : 
                    stopTimer
            }>
                {startStop ?
                    <Btn isStart theme={theme}>
                        Start Green Time
                    </Btn>
                    :
                    <Btn>
                        Stop Green Time
                    </Btn>
                }
            </TouchableOpacity>
        </StartStopCont>
    );
}

export default StartStopTimer;