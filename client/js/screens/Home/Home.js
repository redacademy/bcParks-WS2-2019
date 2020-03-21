import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Calendar } from 'react-native-calendars';
import ProgressContext from '../../context/ProgressContext';
import moment from 'moment';

const HomeScreen = ({ navigation, sessionData, goalData }) => {
    const { goals } = goalData;
    const { sessions } = sessionData;
    const { sample } = useContext(ProgressContext);

    const [goal, setGoal] = useState(3600000);
    // const [progress, setProgress] = useState(0)
    const [arr, setArr] = useState([])

    console.log('goals', goals)
    console.log(moment().format('YYYY-MM-DD'))
    console.log(sessions)
    let changedTime = moment(sessions[27].timeStart).format('YYYY-MM-DD');
    console.log('changedTime', changedTime)

    const group = (session, date) => {
        return session.reduce(function (acc, obj) {
            let key = moment(obj[date]).format('YYYY-MM-DD');
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(obj)
            return acc
        }, {})
    }

    let grouped = group(sessions, 'timeStart');
    let newArr = [];
    console.log('grouped', grouped);

    let day;
    for (let i = 0; i < goals.length; i++) {
        day = goals[i].days.title;
        console.log('day', day)
    }

    Object.keys(grouped).forEach((groupedDate) => {
        let diff = 0;
        let data = grouped[groupedDate];
        data.forEach((session) => {
            let newDiff = moment(session.timeEnd).diff(moment(session.timeStart));
            diff += newDiff
            return diff
        })
        newArr.push({
            groupedDate,
            data,
            diff
        })
        // console.log('groupedDate', groupedDate);
        // console.log('day of the week', moment(groupedDate).format('dddd'))
        // console.log('data', grouped[groupedDate]);


        // console.log('diff', diff)
    })
    useEffect(() => {
        setArr(newArr)
    }, [sessions])
    console.log('pushed arr', arr)

    return (
        <View>
            <View style={{ backgroundColor: 'white' }}>
                <Button
                    title="Edit goals"
                    onPress={() => navigation.push('Goal')}
                />
                <Calendar
                    current={new Date()}
                    minDate={'2020-03-15'}
                    maxDate={'2020-03-21'}
                    hideExtraDays={true}
                    dayComponent={({ date, state, marking, }) => {
                        // console.log('date', date)
                        // console.log('state', state)
                        // console.log('mark', marking)
                        // console.log('grouped', grouped)

                        const [progress, setProgress] = useState(0);

                        useEffect(() => {

                            for (let i = 0; i < newArr.length; i++) {
                                if (newArr[i].groupedDate === date.dateString) {
                                    console.log('test', newArr[i])
                                    setProgress(newArr[i].diff)
                                    break;
                                } else {
                                    console.log('false', false)
                                }
                            }
                            
                        }, [arr])
                            return (
                                <ProgressCircle
                                    percent={10}
                                    radius={15}
                                    borderWidth={3}
                                    color="green"
                                    shadowColor="#999"
                                    bgColor="white"
                                >
                                    <Text
                                        onPress={() => { console.log('date', date.dateString) }}
                                    >
                                        {date.day}</Text>
                                </ProgressCircle>
                            )
                        
                    }}
                    monthFormat={'MMMM dd, yyyy'}
                // style={{marginTop: 30}}
                />
            </View>

            {/* <View style={{ backgroundColor: 'white' }}>
                <Button title="expand" />
            </View> */}
            <Text>Home Screen</Text>
            <ProgressCircle
                percent={30}
                radius={50}
                borderWidth={10}
                color="green"
                shadowColor="#999"
                bgColor="white"
            >
                <Text>{/* {progress.duration + 'hours'} */}2hours</Text>
            </ProgressCircle>

            <Button
                title="Go to Activity"
                onPress={() => navigation.navigate('Activity')}

            />
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