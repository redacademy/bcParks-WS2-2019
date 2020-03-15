import React from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
// import styles from './styles';
import moment from "moment";
import { DisplayContainer, SubDisplayContainer } from './styles';
import MoodConverter from '../../assets/MoodConverter';



const ActivityDisplay = ({ data }) => {

    let durationDisplay = data.map(session => {
        let start = moment.utc(session.timeStart);
        let end = moment.utc(session.timeEnd);
        return end.diff(start, 'hours', true)
    });
    const totalDuration = durationDisplay.reduce((result, number) => result + number);


    return (
        <DisplayContainer>
            <SubDisplayContainer>
                <Text>You have spent</Text>

                <Text>{totalDuration}h</Text>
            </SubDisplayContainer>
            <SubDisplayContainer>
                <Text>Average mood</Text>
                {/* <MoodConverter /> */}

            </SubDisplayContainer>
        </DisplayContainer>
    )



}

export default ActivityDisplay;
