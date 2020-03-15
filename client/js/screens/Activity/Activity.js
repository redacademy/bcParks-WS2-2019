import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import moment from "moment";
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import ActivityList from '../../components/ActivityList/ActivityList';
import ActivityDisplay from '../../components/ActivityDisplay/ActivityDisplay';
import {
    ButtonsContainer,
    PeriodButtons,
    PeriodText,
    ArrowsContainer,
    ArrowText,
    ActivityView,
    GraphDate
} from './styles';


const SESSIONS_QUERY = gql`
  query Sessions($where: SessionWhereInput){
    sessions(where: $where) {
        id
        timeStart
        timeEnd
        locations {
            id
            name
        }
        mood
        date
    }
  }
`


const ActivityScreen = ({ focusDay, setFocusDay, period, setPeriod }) => {

    let start = focusDay.format('YYYY-MM-DD');
    let end = focusDay.clone().add(1, 'd').format('YYYY-MM-DD');

    // let startWeek = period.format('YYYY-MM-DD');
    // let endWeek = period.clone().add(7, 'd').format('YYYY-MM-DD');

    const { loading, data, error, networkStatus } = useQuery(SESSIONS_QUERY, {
        variables: {
            where: {
                timeStart_gt: start, timeEnd_lt: end,
                // timeStart_gt: startWeek, timeEnd_lt: endWeek
            }
        }
    });

    if (networkStatus === 4) return <Text>Refetching!</Text>
    if (loading) return <Text>Loading!</Text>;
    if (error) return <Text>Error!</Text>;

    return (
        <View>
            <ButtonsContainer>

                <PeriodButtons onPress={() => {

                }}>
                    <PeriodText>Daily</PeriodText>
                </PeriodButtons>

                <PeriodButtons onPress={() => {

                }}>
                    <PeriodText>Weekly</PeriodText>
                </PeriodButtons>
            </ButtonsContainer>
            <ArrowsContainer>
                <TouchableOpacity onPress={() => {
                    setFocusDay(focusDay.clone().subtract(1, 'd'))
                }}
                >
                    <ArrowText>&lt;</ArrowText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocusDay(focusDay.clone().add(1, 'd'))
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
                    <ActivityChart data={data.sessions} />
                    <ActivityDisplay data={data.sessions} />
                    <ActivityList data={data.sessions} navigation />
                </>
            }


        </View>
    );
};

export default ActivityScreen;