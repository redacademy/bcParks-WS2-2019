import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import moment from "moment";
import Mood from '../Mood/Mood';
import { ListContainer, ActivityDetails, FlatListContainer, ListItem, styles, DetailRow, NotebookIcon } from './styles';
import MoodFace from '../../assets/images/MoodVeryHappy';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';

const ActivityList = ({ data, navigation, weekly }) => {
    let transformedData;

    if (weekly) {
        console.log(data);
        let groupedSessions = [];
        data.map(session => {
            const start = moment(session.timeStart);
            let timeDisplay = start.format('dddd');
            let dayOfTheWeekIndex = start.format('d');
            let duration = moment(session.timeEnd).diff(start, 'minutes');

            let { mood, locations } = session;
            if (groupedSessions[dayOfTheWeekIndex]) {
                groupedSessions[dayOfTheWeekIndex].totalMood += mood;
                groupedSessions[dayOfTheWeekIndex].totalDuration += duration;
                groupedSessions[dayOfTheWeekIndex].count += 1;
                groupedSessions[dayOfTheWeekIndex].locations.push(...locations);
            } else {
                groupedSessions[dayOfTheWeekIndex] = {
                    timeDisplay,
                    totalMood: mood,
                    locations,
                    totalDuration: duration,
                    count: 1
                }
            }
        });
        console.log(groupedSessions)

        transformedData = groupedSessions.map(session => {
            let { locations, timeDisplay, totalMood, count, totalDuration } = session;
            let hours = Math.floor(totalDuration / 60);
            let min = totalDuration % 60;
            let duration = `${hours ? hours + 'h ' : ''}${min}min`;

            return {
                duration,
                mood: totalMood / count,
                locations,
                timeDisplay
            }
        }).filter(item => item);

        console.log(transformedData)

    } else {
        transformedData = data.map(session => {
            const start = moment(session.timeStart);
            const timeDisplay = start.format('HH:mm a');
            let diff = moment(session.timeEnd).diff(start, 'minutes');
            let hours = Math.floor(diff / 60);
            let min = diff % 60;
            let duration = `${hours ? hours + 'h ' : ''}${min}min`;
            let { mood, locations } = session;

            return {
                duration,
                mood,
                locations,
                timeDisplay
            }
        });
    }

    return (
        <View>
            <FlatListContainer
                data={transformedData}
                renderItem={({ item }) => {

                    return (
                        <ListContainer>
                            <Mood moodValue={item.mood} iconSize={50} />
                            <ActivityDetails>
                                <DetailRow>
                                    <Icon name='access-time' size={22} color='#66b17e'></Icon>
                                    <ListItem> {item.timeDisplay} </ListItem>
                                </DetailRow>
                                <DetailRow>
                                    <Icon2 name='leaf' size={22} color='#66b17e'></Icon2>
                                    <ListItem> {item.duration} </ListItem>
                                </DetailRow>
                                <DetailRow>
                                    <Icon2 name='map-marker' size={22} color='#66b17e'></Icon2>
                                    <ListItem> {item.locations && item.locations.length > 0 && item.locations[0].name} </ListItem>
                                </DetailRow>
                            </ActivityDetails>
                            {!weekly &&
                                <NotebookIcon>
                                    <TouchableOpacity onPress={() => navigation.navigate('Journal', { item })}>
                                        <Icon3 name='notebook' size={18} color='#878787'></Icon3>
                                    </TouchableOpacity>
                                </NotebookIcon>
                            }

                        </ListContainer>
                    )
                }}
                keyExtractor={item => item.timeDisplay}
            >
            </FlatListContainer>


        </View >
    )

}

export default ActivityList;
