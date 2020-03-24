import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import moment from "moment";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Mood from '../../components/Mood/Mood';


import {
    Day,
    TimesContainer,
    LogContainer,
    JournalBox,
    TimeText,
    HeadContainer,
    IconDurationRow,
    IconLocationRow,
    DurationText,
    LocationText,
    JournalText
} from './styles';
import Dash from 'react-native-dash';
import { theme, HeaderCont, styles } from '../../globalStyles';

const JournalScreen = ({ params, navigation }) => {
    console.log(params)
    let listData = [];
    if (params.weekly) {
        listData = params.item.dayData.map(session => {
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

    } else {
        listData.push(params.item)
    }
    let diff = (moment(listData.timeEnd)).diff((moment(listData.timeStart)));

    let duration = moment(diff).format('H [Hour] mm [Minutes]');
    console.log('listData', listData)


    return (
        <View>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('Activity')}>
                    <Icon3 name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIcon} />
                </TouchableOpacity>
                <Day>{moment.tz(listData[0].timeStart, "America/Vancouver").format('dddd')}</Day>
            </HeaderCont>
            <HeadContainer
                data={listData}
                renderItem={({ item }) => {
                    console.log('item', item)
                    return (
                        <JournalBox>
                            <TimesContainer>
                                <TimeText>{item.timeStartDisplay}</TimeText>
                                <Icon name='flow-line' size={70} color='#cc6c4e' style={{}}></Icon>
                                <TimeText>{item.timeEndDisplay}</TimeText>
                            </TimesContainer>
                            <Dash
                                style={{ width: 0.3, height: '100%', flexDirection: 'column' }}
                                dashColor={'#979797'}
                                dashThickness={1}
                                dashGap={5}
                                dashLength={6}
                            />
                            <LogContainer>
                                <IconDurationRow>
                                    <Mood moodValue={item.mood} iconSize={50} />
                                    <DurationText>{item.duration}</DurationText>
                                </IconDurationRow>
                                <IconLocationRow>
                                    <Icon2 name='map-marker' size={24} color='#8cbe82'></Icon2>
                                    <LocationText>{item.locations && item.locations.length > 0 && item.locations[0].name}</LocationText>
                                </IconLocationRow>
                                <JournalText>{item.journal}</JournalText>
                            </LogContainer>
                        </JournalBox>
                    )
                }}
                keyExtractor={item => item.timeStart}
            />




            {/* </HeadContainer> */}
        </View>
    );
};

export default JournalScreen;
