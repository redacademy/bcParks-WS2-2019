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
import GoalContainer from '../Goal';

const HomeScreen = ({ navigation, sessionData, goalData, user, sample }) => {
    console.log('HomeUser', user)
    const { days } = goalData.goal;
    console.log('days', days)
    console.log('sample', sample)
    const [num, setNum] = useState('')
    const [today, setToday] = useState(0);
    const [goalIndex, setGoalIndex] = useState(0)

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
    const percent = (index) => {
        let p = 0;
        return p = days[index].hours * 3600000
    }
    // console.log('num', num)
    // console.log('today', today)
    useEffect(() => {
        display()
    }, [num])

    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <View style={{ backgroundColor: "white" }}>
                <Calendar
                    current={new Date()}

                    hideExtraDays={true}
                    dayComponent={({ date }) => {
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
                        for (let i = 0; i < days.length; i++) {
                            day = days[i].title;
                            if (day === moment.tz(date.dateString, "America/Vancouver").format('dddd')) {
                                dayGoal = days[i].hours * 3600 * 1000;                               
                                break;
                            }
                        }
                        console.log('date', date.dateString)
                        // console.log('progress', progress)
                        // console.log('dayGoal', percent(goalIndex))
                        return (
                            <ProgressCircle
                                percent={(progress / dayGoal) * 100}
                                radius={15}
                                borderWidth={3}
                                color="#5DB353"
                                shadowColor="#DBDBDB"
                                bgColor="white"
                            >
                                <Text
                                    onPress={() => {
                                        setNum(date.dateString)
                                        setGoalIndex(moment.tz(date.dateString, "America/Vancouver").format('d'))
                                        console.log('goalIndex', goalIndex)
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
                        <HomeText>{today > percent(goalIndex) ? 100 : (today / percent(goalIndex) * 100).toFixed(1)}%</HomeText>
                    </Complete>
                    <ProgressCircle
                        percent={(today / percent(goalIndex)) * 100}
                        radius={90}
                        borderWidth={15}
                        color="#5DB353"
                        shadowColor="#DBDBDB"
                        bgColor="white"
                    >
                        <Flex>
                            <ProgressText isNumber>{(today / 1000 / 3600).toFixed(1)}</ProgressText>
                            <ProgressText>hours</ProgressText>
                        </Flex>
                    </ProgressCircle>
                    <Goal>
                        <HomeText>Goal</HomeText>
                        <HomeText>{parseInt(days[goalIndex].hours)} hours</HomeText>
                    </Goal>
                </ProgressBarContainer>
            </DetailedProgressContainer>
        </LinearGradient>
    );
}


export default HomeScreen;