import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Calendar } from 'react-native-calendars';
import ProgressContext from '../../context/ProgressContext';
// import moment from 'moment';
import moment from 'moment-timezone';

const HomeScreen = ({ navigation, sessionData, goalData }) => {
    const { goals } = goalData;
    const { sessions } = sessionData;
    const { sample, setSample, update, getItem } = useContext(ProgressContext);
    console.log('sample', sample)
    console.log('sampelData', sample[0])
    console.log('nav', navigation)
    const [goal, setGoal] = useState(360000);
    // const [progress, setProgress] = useState(0)

    console.log('goals', goals)
    console.log('currentTime', moment.tz("2020-03-21 14:10", "America/Vancouver").format())
    console.log(sessions)
    let changedTime = moment.tz(sessions[29].timeStart, "America/Vancouver").format();
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
        // console.log('day of the week', moment(groupedDate).format('dddd'))
    })
    // useEffect(() => {
    //     setArr(newArr)
    // }, [sessions])
    console.log('pushed arr', newArr)

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

                        const [progress, setProgress] = useState();

                        useEffect(() => {

                            for (let i = 0; i < newArr.length; i++) {
                                if (newArr[i].groupedDate === date.dateString) {
                                    console.log('test', newArr[i])
                                    // update(25)
                                    setProgress(newArr[i].diff)
                                    break;
                                } else {
                                    console.log('false', false)
                                }
                            }
                            
                        }, [sample])
                            return (
                                <ProgressCircle
                                    percent={(progress/goal)*100}
                                    radius={15}
                                    borderWidth={3}
                                    color="green"
                                    shadowColor="#999"
                                    bgColor="white"
                                >
                                    <Text
                                        onPress={() => { /* setProgress(arr[14].diff) */
                                        console.log('prog', getItem())}}
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
                percent={sample[0]}
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