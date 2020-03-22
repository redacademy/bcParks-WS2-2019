import React from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
// import styles from './styles';
import moment from "moment";
import {
    DisplayContainer,
    SubDisplayContainer,
    styles,
    DisplayTitle,
    DisplayContent,
    DisplayRow,
    MoodDisplayContainer
} from './styles';
import MoodFace from '../../assets/images/MoodVeryHappy';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Mood from '../Mood/Mood';



const ActivityDisplay = ({ data }) => {

    let durationDisplay = data.map(session => {
        let start = moment(session.timeStart);
        let end = moment(session.timeEnd);
        return (end.diff(start, 'hours', true))
    });
    const totalDuration = durationDisplay.reduce((result, number) => result + number);
    let moodDisplay = data.map(s => s.mood);
    const sum = moodDisplay.reduce((a, b) => a + b, 0);
    const avg = (sum / moodDisplay.length) || 0;
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
