import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import moment from "moment-timezone";
import Mood from '../Mood/Mood';
import {
    ListContainer,
    ActivityDetails,
    FlatListContainer,
    ListItem,
    DetailRow,
    NotebookIcon
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';

const ActivityList = ({ data, navigation, weekly }) => {
    let transformedData;
    if (weekly) {
        let groupedSessions = [];
        data.map(session => {
            const start = moment.tz(session.timeStart, "America/Los_Angeles");
            let timeStartDisplay = start.format('dddd');
            let dayOfTheWeekIndex = start.format('d');
            let duration = moment.tz(session.timeEnd, "America/Los_Angeles").diff(start, 'minutes');

            let { mood, locations } = session;
            if (groupedSessions[dayOfTheWeekIndex]) {
                groupedSessions[dayOfTheWeekIndex].totalMood += mood;
                groupedSessions[dayOfTheWeekIndex].totalDuration += duration;
                groupedSessions[dayOfTheWeekIndex].count += 1;
                groupedSessions[dayOfTheWeekIndex].locations.push(...locations);
                groupedSessions[dayOfTheWeekIndex].dayData.push(session);
            } else {
                groupedSessions[dayOfTheWeekIndex] = {
                    timeStartDisplay,
                    totalMood: mood,
                    locations,
                    totalDuration: duration,
                    count: 1,
                    dayData: [session]
                }
            }
        });

        transformedData = groupedSessions.map(session => {
            let { locations, timeStartDisplay, totalMood, count, totalDuration, dayData } = session;
            let hours = Math.floor(totalDuration / 60);
            let min = totalDuration % 60;
            let duration = `${hours ? hours + 'h ' : ''}${min}min`;

            return {
                duration,
                mood: totalMood / count,
                locations,
                timeStartDisplay,
                dayData
            }
        }).filter(item => item);

    } else {
        transformedData = data.map(session => {
            const start = moment.tz(session.timeStart, "America/Los_Angeles");
            const timeStart = start.format();
            const timeStartDisplay = start.format('HH:mm a');
            const end = moment.tz(session.timeEnd, "America/Vancouver");
            const timeEnd = end.format();
            const timeEndDisplay = end.format('HH:mm a');
            let diff = moment.tz(session.timeEnd, "America/Los_Angeles").diff(start, 'minutes');
            let hours = Math.floor(diff / 60);
            let min = diff % 60;
            let duration = `${hours ? hours + 'h ' : ''}${min}min`;
            let { mood, locations, journal } = session;

            return {
                duration,
                mood,
                locations,
                timeStart,
                timeEnd,
                journal,
                timeStartDisplay,
                timeEndDisplay
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
                                    <ListItem> {item.timeStartDisplay} </ListItem>
                                </DetailRow>
                                <DetailRow>
                                    <Icon2 name='leaf' size={22} color='#66b17e'></Icon2>
                                    <ListItem> {item.duration} </ListItem>
                                </DetailRow>
                                <DetailRow>
                                    <Icon2 name='map-marker' size={22} color='#66b17e'></Icon2>
                                    <ListItem> {item.locations && item.locations.length > 0 ? item.locations[0].name : "Location Unavailable"}</ListItem>
                                </DetailRow>
                            </ActivityDetails>
                            <NotebookIcon>
                                <TouchableOpacity onPress={() => navigation.navigate('Journal', { item, weekly })}>
                                    <Icon3 name='notebook' size={18} color='#878787'></Icon3>
                                </TouchableOpacity>
                            </NotebookIcon>
                        </ListContainer>
                    )
                }}
                keyExtractor={item => item.timeStartDisplay}
            >
            </FlatListContainer>


        </View >
    )

}

export default ActivityList;
