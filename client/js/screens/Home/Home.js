import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Calendar } from 'react-native-calendars';
import ProgressContext from '../../context/ProgressContext';
import moment from 'moment-timezone';
import { Heading } from '../../globalStyles';
import {
    HomeText, DetailedProgressContainer, HomeHeaderCont, ProgressBarContainer,
    Complete, Goal, Flex, ProgressText
} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation, sessionData, goalData, user }) => {
    // const { user } = useContext(AuthContext);
    console.log('HomeUser', user)
    const { goals } = goalData;
    const { sample } = useContext(ProgressContext);
    console.log('sample', sample)
    const [goal, setGoal] = useState(3600000);
    const [num, setNum] = useState('')
    const [today, setToday] = useState(0);

    const display = () => {
        for (let i = 0; i < sample.length; i++) {
            if (sample[i].groupedDate === num) {
                setToday(sample[i].diff)
                console.log('같은날', sample[i].diff)
                break;
            } else {
                setToday(0)
            }
        }
    }
    console.log('num', num)
    console.log('today', today)
    useEffect(() => {
        display()
    })

    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
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
                                color="709868"
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
                {/* <Text>{user && user.email ? user.email : "No user logged in"}</Text> */}
                <HomeHeaderCont>
                    <Heading>Daily Progress</Heading>
                </HomeHeaderCont>
                <ProgressBarContainer>
                    <Complete>
                        <HomeText>Complete</HomeText>
                        <HomeText>{(today > goal ) ? 100 : (today / goal * 100).toFixed(1)}%</HomeText>
                    </Complete>
                    <ProgressCircle
                        percent={today / goal * 100}
                        radius={90}
                        borderWidth={15}
                        color="709868"
                        shadowColor="#999"
                        bgColor="white"
                    >
                        <Flex>
                            <ProgressText isNumber>{(today / 1000 / 3600).toFixed(1)}</ProgressText>
                            <ProgressText>hours</ProgressText>
                        </Flex>
                    </ProgressCircle>
                    <Goal>
                        <HomeText>Goal</HomeText>
                        <HomeText>{parseInt(goal / 1000 / 3600)} hours</HomeText>
                    </Goal>
                </ProgressBarContainer>
            </DetailedProgressContainer>
        </LinearGradient>
    );
}


export default HomeScreen;