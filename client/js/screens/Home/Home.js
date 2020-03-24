import React, { useState, useEffect, useContext, useReducer } from 'react';
import { View, Text, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Calendar } from 'react-native-calendars';
import ProgressContext from '../../context/ProgressContext';
import moment from 'moment-timezone';
import {
    DetailedProgressContainer,
    TextTitle,
    ProgressBarContainer,
    Complete,
    Goal
} from './style';


const HomeScreen = ({ navigation, sessionData, goalData, user }) => {

    const { goals } = goalData;
    const { sessions } = sessionData;
    const { sample } = useContext(ProgressContext);
    const [goal, setGoal] = useState(3600000);
    const [num, setNum] = useState('')
    const [today, setToday] = useState(0);

    let changedTime = moment.tz(sessions[29].timeStart, "America/Vancouver").format();

    const display = () => {
        for (let i = 0; i < sample.length; i++) {
            if (sample[i].groupedDate === num) {
                setToday(sample[i].diff)
                break;
            } else {
                setToday(0)
            }
        }
    }

    useEffect(() => {
        display()
    }, [num])

    return (
        <View>
            <View style={{ backgroundColor: "white" }}>
                <Calendar
                    current={new Date()}

                    hideExtraDays={true}
                    dayComponent={({ date, state, marking }) => {
                        let progress = 0;
                        let day;
                        let dayGoal = 0;

                        for (let i = 0; i < sample.length; i++) {
                            if (sample[i].groupedDate === date.dateString) {
                                progress = sample[i].diff
                                break;
                            } else {
                                progress = 0
                            }
                        }
                        for (let i = 0; i < goals.length; i++) {
                            day = goals[i].days.title;
                            if (day === moment.tz(date.dateString, "America/Vancouver").format('dddd')) {
                                dayGoal = goals[i].hours * 3600 * 1000;
                                break;
                            }
                        }

                        return (
                            <ProgressCircle
                                percent={(progress / dayGoal) * 100}
                                radius={15}
                                borderWidth={3}
                                color="green"
                                shadowColor="#999"
                                bgColor="white"
                            >
                                <Text
                                    onPress={() => {
                                        setNum(date.dateString)
                                        for (let i = 0; i < goals.length; i++) {
                                            day = goals[i].days.title;
                                            if (day === moment.tz(date.dateString, "America/Vancouver").format('dddd')) {
                                                setGoal(goals[i].hours * 3600 * 1000)
                                                display()
                                                break;
                                            }
                                        }
                                    }}
                                >
                                    {date.day}</Text>
                            </ProgressCircle>
                        )

                    }}
                    monthFormat={'MMMM dd, yyyy'}
                    style={{ marginTop: 50 }}
                />
            </View>
            <DetailedProgressContainer>
                <Text>{user && user.email ? user.email : "No user logged in"}</Text>
                <TextTitle>Daily Progress</TextTitle>
                <ProgressBarContainer>
                    <Complete>
                        <Text>Complete</Text>
                        <Text>{(today / goal * 100).toFixed(1)}%</Text>
                    </Complete>
                    <ProgressCircle
                        percent={today / goal * 100}
                        radius={50}
                        borderWidth={10}
                        color="green"
                        shadowColor="#999"
                        bgColor="white"
                    >
                        <View>
                            <Text>{(today / 1000 / 3600).toFixed(1)}</Text>
                            <Text>hours</Text>
                        </View>
                    </ProgressCircle>
                    <Goal>
                        <Text>Goal</Text>
                        <Text>{parseInt(goal / 1000 / 3600)} hours</Text>
                    </Goal>
                </ProgressBarContainer>
            </DetailedProgressContainer>
            <Button
                title="Go to Onboarding"
                onPress={() => navigation.navigate('Onboarding')}

            />
            <Button
                title="Go to User Login"
                onPress={() => navigation.navigate('User')}

            />
        </View>
    );
}


export default HomeScreen;