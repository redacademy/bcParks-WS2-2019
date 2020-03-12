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
import styled from 'styled-components';
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import ActivityList from '../../components/ActivityList/ActivityList';
import ActivityDisplay from '../../components/ActivityDisplay/ActivityDisplay'


const ButtonsContainer = styled.View`
    display: flex
    flexDirection: row
    justifyContent: space-around
`

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


const ActivityScreen = ({ focusDay, setFocusDay }) => {

    let start = focusDay.format('YYYY-MM-DD');
    let end = focusDay.clone().add(1, 'd').format('YYYY-MM-DD');

    const { loading, data, refetch, error, networkStatus } = useQuery(SESSIONS_QUERY, {
        variables: {
            where: {
                timeStart_gt: start, timeEnd_lt: end
            }
        }
    });
    if (networkStatus === 4) return <Text>Refetching!</Text>
    if (loading) return <Text>Loading!</Text>;
    if (error) return <Text>Error!</Text>;

    return (
        <View>
            <ButtonsContainer>
                <TouchableOpacity onPress={() => {

                }}>
                    <Text>Daily</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {


                }}>
                    <Text>Weekly</Text>
                </TouchableOpacity>
            </ButtonsContainer>
            <TouchableOpacity onPress={() => {
                setFocusDay(focusDay.clone().subtract(1, 'd'))
            }}
            >
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setFocusDay(focusDay.clone().add(1, 'd'))
            }}
            >
                <Text>Forward</Text>
            </TouchableOpacity>
            {(!data.sessions || data.sessions.length === 0) && <Text>No Data!</Text>}
            {(data.sessions.length > 0) &&
                <>
                    <ActivityChart data={data.sessions} />
                    <ActivityDisplay data={data.sessions} />
                    <ActivityList data={data.sessions} />
                </>
            }


        </View>
    );
};

export default ActivityScreen;