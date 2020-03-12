import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StartStopCont, TimerDisplay, InfoTextCont, InfoText, BtnCont } from './styles.js';
import { theme, PrimaryBtn } from '../../globalStyles';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import moment from 'moment';

const Mutation_CreateSession = gql`
    mutation CreateSession($timeStart: DateTime!, $timeEnd: DateTime!, $date: DateTime!) {
        createSession(
            data:{
                timeStart: $timeStart, 
                timeEnd: $timeEnd,
                date: $date
            }
        ){
        id
        timeEnd
        timeStart
        date
        }
    }
`

const StartStopTimer = () => {

    const [startStop, setStartStop] = useState(true);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [date, setDate] = useState("");

    const [CreateSession] = useMutation(Mutation_CreateSession);
    const create = () => {
        CreateSession({
            variables: {
                timeStart: startTime,
                timeEnd: endTime,
                date: date
            }
        })
    }

    const startTimer = () => {
        setStartStop(!startStop);
        setStartTime(moment().format());
        setDate(moment().format("YYYY-MM-DD"));
    }

    const stopTimer = () => {
        setStartStop(!startStop);
        setEndTime(moment().format());
    }


    return (
        <StartStopCont>
            <TimerDisplay>00:00:00</TimerDisplay>
            <InfoTextCont>
                <InfoText>Spending more time in nature contributes to a better sleep cycle and helps with lowering anxiety</InfoText>
            </InfoTextCont>
            <BtnCont>
                <TouchableOpacity onPress={
                    startStop ? () => {
                        startTimer()
                    } : () => {
                        stopTimer();

                    }}>
                    {startStop ?
                        <PrimaryBtn>
                            Start Green Time
                    </PrimaryBtn>
                        :
                        <PrimaryBtn isStop theme={theme}>
                            Stop Green Time
                    </PrimaryBtn>
                    }
                </TouchableOpacity>
            </BtnCont>
        </StartStopCont>
    );
}

export default StartStopTimer;