import React, { useContext } from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import moment from "moment-timezone";
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import ActivityList from '../../components/ActivityList/ActivityList';
import ActivityDisplay from '../../components/ActivityDisplay/ActivityDisplay';
import Mood from '../../components/Mood/Mood';
import {
    ButtonsContainer,
    PeriodButtons,
    PeriodText,
    ArrowsContainer,
    ArrowText,
    ActivityView,
    GraphDate
} from './styles'
import { theme, HeaderCont, Heading, styles } from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import helper from '../../context/helperFunction';
import ProgressContext from '../../context/ProgressContext';

const SESSIONS_QUERY = gql`
  query Sessions{
    sessions{
        timeStart
        timeEnd
        locations {
            id
            name
        }
        mood

        journal
    }
  }
`


const ActivityScreen = ({ focus, setFocus, navigation, period, showWeekly, setShowWeekly }) => {

    // console.log('focus', focus.format())
    let start = focus.format('YYYY-MM-DD');
    let end = focus.clone().add(period, 'd').format('YYYY-MM-DD');
    const { sample } = useContext(ProgressContext);


    const { loading, data, error, networkStatus } = useQuery(SESSIONS_QUERY);

    if (networkStatus === 4) return <Text>Refetching!</Text>
    if (loading) return <Text>Loading!</Text>;
    if (error) return <Text>Error!</Text>;
    if (data) {
        let arr = sample
        let newArr = []

        if(!showWeekly){
            console.log('arr', arr)
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].groupedDate === focus.clone().format("YYYY-MM-DD")) {
                    newArr = arr[i].data;
                    break;
                } else {
                    console.log(false)
                }
            }
            // console.log('newArr', newArr)
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (+moment(arr[i].groupedDate) >= +focus.clone() && +moment(arr[i].groupedDate) < +moment(focus.clone().add(period, 'd'))) {
                    for (let j = 0; j < arr[i].data.length; j++){
                        newArr.push(arr[i].data[j])
                    }
                } else {
                    console.log(false)
                }

            }
            console.log('newArr', newArr)
            console.log('milsec', +focus.clone())
            
        }

    return (
        <View>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIcon} />
                </TouchableOpacity>
                <Heading>Activity</Heading>
            </HeaderCont>
            <ButtonsContainer>

                <PeriodButtons 
                    showWeekly={!showWeekly}
                    onPress={() => {
                    setShowWeekly(!showWeekly)

                }}>
                    <PeriodText showWeekly={!showWeekly}>Daily</PeriodText>
                </PeriodButtons>

                <PeriodButtons 
                    showWeekly={showWeekly}
                    onPress={() => {
                    setShowWeekly(!showWeekly)
                }}>
                    <PeriodText showWeekly={showWeekly}>Weekly</PeriodText>
                </PeriodButtons>
            </ButtonsContainer>
            <ArrowsContainer>
                <TouchableOpacity onPress={() => {
                    setFocus(focus.clone().subtract(period, 'd'))
                }}
                >
                    <ArrowText>&lt;</ArrowText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocus(focus.clone().add(period, 'd'))
                }}
                >
                    <ArrowText>&gt;</ArrowText>
                </TouchableOpacity>
            </ArrowsContainer>
            {(!data.sessions || data.sessions.length === 0) && <GraphDate >
                No data for this day
            </GraphDate>}
                {(data.sessions.length > 0) &&
                    <>
                        <ActivityChart data={newArr} focus={focus} weekly={showWeekly} />
                        <ActivityDisplay data={newArr} />
                        <ActivityList data={newArr} navigation={navigation} weekly={showWeekly} />
                    </>
                }


            </View>
        )
    }
};

export default ActivityScreen;