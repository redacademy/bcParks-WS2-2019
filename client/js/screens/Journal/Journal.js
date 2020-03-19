import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import moment from "moment";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import {
    Day,
    TimesContainer,
    LogContainer,
    JournalBox,
    TimeText,
    HeadContainer,
    styles,
    IconDurationRow,
    IconLocationRow,
    DurationText,
    LocationText,
    JournalText
} from './styles';
import Background from '../../assets/images/Background';
import Dash from 'react-native-dash';

const JournalScreen = ({ params }) => {

    let diff = (moment.utc(params.item.timeEnd)).diff((moment.utc(params.item.timeStart)));
    let duration = moment.utc(diff).format('HH:mm');
    return (
        <HeadContainer >
            {/* <Background style={styles.image} /> */}
            <Day>{moment.utc(params.item.date).format('dddd')}</Day>
            <JournalBox>
                <TimesContainer>
                    <TimeText>{moment.utc(params.item.timeStart).format('HH:mm A')}</TimeText>
                    <Icon name='flow-line' size={70} color='#cc6c4e' margin-right={20}></Icon>
                    <TimeText>{moment.utc(params.item.timeEnd).format('HH:mm A')}</TimeText>
                </TimesContainer>
                <Dash
                    style={{ width: 0.3, height: 160, flexDirection: 'column' }}
                    dashColor={'#979797'}
                    dashThickness={1}
                    dashGap={5}
                    dashLength={6}
                />
                <LogContainer>
                    <IconDurationRow>
                        <Text>{params.item.mood}</Text>
                        <DurationText>{duration} hours</DurationText>
                    </IconDurationRow>
                    <IconLocationRow>
                        <Icon2 name='map-marker' size={24} color='#8cbe82'></Icon2>
                        <LocationText>{params.item.locations && params.item.locations.length > 0 && params.item.locations[0].name}</LocationText>
                    </IconLocationRow>
                    <JournalText>{params.item.journal}</JournalText>
                </LogContainer>
            </JournalBox>



        </HeadContainer>
    );
};

export default JournalScreen;