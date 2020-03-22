import React from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
// import styles from './styles';
// import moment from "moment";
import moment from "moment-timezone";

import {
    DisplayContainer,
    SubDisplayContainer,
    DisplayTitle,
    DisplayContent,
    DisplayRow,
    MoodDisplayContainer
} from './styles';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Mood from '../Mood/Mood';

const ActivityDisplay = ({ data }) => {

    let durationDisplay = data.map(session => {
        let start = moment(session.timeStart).tz("America/Los_Angeles");
        let end = moment(session.timeEnd).tz("America/Los_Angeles");
        return (end.diff(start, 'hours', true))
    });
    let totalDuration;
    let moodDisplay;
    let sum
    let avg
    if(durationDisplay.length === 0){
        totalDuration = 0
        sum = 0
        avg = 0
    } else {
        totalDuration = durationDisplay.reduce((result, number) => result + number )
        moodDisplay = data.map(s => s.mood);
        sum = moodDisplay.reduce((a, b) => a + b, 0 );
        avg = (sum / moodDisplay.length) || 0;
    }
    return (
        <DisplayContainer>
            <SubDisplayContainer>
                <DisplayTitle>You have spent</DisplayTitle>
                <DisplayRow>
                    <Icon2 name='leaf' size={22} color='green'></Icon2>
                    <DisplayContent>{totalDuration.toFixed(1)} hours</DisplayContent>
                </DisplayRow>
            </SubDisplayContainer>
            <SubDisplayContainer>
                <DisplayTitle>Average mood</DisplayTitle>
                <MoodDisplayContainer>
                    <Mood moodValue={avg} showText={true} iconSize={27} />
                </MoodDisplayContainer>
            </SubDisplayContainer>
        </DisplayContainer>
    )



}

export default ActivityDisplay;
