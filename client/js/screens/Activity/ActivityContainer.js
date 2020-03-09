import React, { useState } from 'react';
import Activity from './Activity';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
    Text,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SESSIONS_QUERY = gql`
  {
    sessions {
        id
        timeStart
        timeEnd
        locations {
            id
        }
        mood
        date
      }
  }
`

const PROGRESSES_QUERY = gql`
  {
    progresses {
        id
        duration
        completion
        date
      }
  }
`

const ActivityContainer = () => {
    const { loading: progressesQueryLoading, error: progressesQueryError, data: progresses } =
        useQuery(PROGRESSES_QUERY);
    const { loading: sessionsQueryLoading, error: sessionsQueryError, data: sessions } =
        useQuery(SESSIONS_QUERY);

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
                        graphValues: sessions,
                        graphLabels: sessions
                    }

                );
            }}>
                <Text>Daily</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setGraphData(
                    {
                        graphValues: progresses,
                        graphLabels: progresses
                    }
                );

            }}>
                <Text>Weekly</Text>
            </TouchableOpacity>

            {graphData.graphValues && graphData.graphLabels && <Activity data={graphData} />}

        </View>

    )
}

export default ActivityContainer;