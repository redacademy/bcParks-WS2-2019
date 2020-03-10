import React, { useState } from 'react';
import Activity from './Activity';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
    Text,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from "moment";

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

const PROGRESSES_QUERY = gql`
  query Progresses($where: ProgressWhereInput){
    progresses(where: $where) {
        id
        duration
        completion
        date
        weekday
      }
  }
`

const ActivityContainer = () => {
    let focusedDay = new Date();
    let focusedDayMoment = moment(focusedDay);

    let sessionQueryStartDate = null;
    let sessionQueryEndDate = null;
    let progressQueryStartDate = null;
    let progressQueryEndDate = null;

    const updateQueryDates = (dateMoment) => {
        sessionQueryStartDate = dateMoment.format('YYYY-MM-DD');
        sessionQueryEndDate = dateMoment.add(1, 'd').format('YYYY-MM-DD');
        progressQueryStartDate = dateMoment.startOf('week').format('YYYY-MM-DD');
        progressQueryEndDate = dateMoment.endOf('week').add(1, 'd').format('YYYY-MM-DD');
    }

    updateQueryDates(focusedDayMoment.subtract(1, 'w'));

    const [graphData, setGraphData] = useState(
        {
            graphValues: null,
            graphLabels: null
        }
    );

    const { loading: progressesQueryLoading, error: progressesQueryError, data: progresses } =
        useQuery(PROGRESSES_QUERY, {
            variables: {
                where: {
                    date_gt: progressQueryStartDate, date_lt: progressQueryEndDate
                }
            }
        });
    const { loading: sessionsQueryLoading, error: sessionsQueryError, data: sessions, refetch: refetchSessions } =
        useQuery(SESSIONS_QUERY, {
            variables: {
                where: {
                    timeStart_gt: sessionQueryStartDate, timeEnd_lt: sessionQueryEndDate
                }
            }
        });

    const [graphData, setGraphData] = useState(
        {
            graphValues: null,
            graphLabels: null
        }
    );


    if (progressesQueryLoading || sessionsQueryLoading) return null;
    if (progressesQueryError || sessionsQueryError) return <Text>Error!</Text>;


    console.log('activity container', sessions, progresses)
    return (
        <View>
            <TouchableOpacity onPress={() => {
                setGraphData(
                    {
                        graphValues: sessions
                    }

                );
            }}>
                <Text>Daily</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setGraphData(
                    {
                        graphValues: progresses
                    }
                );

            }}>
                <Text>Weekly</Text>
            </TouchableOpacity>

            {graphData.graphValues && <Activity data={graphData} />}

        </View>

    )
}

export default ActivityContainer;