import React, { useState } from 'react';
import Activity from './Activity';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
    Text,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
    const { loading, error, data } = useQuery(PROGRESSES_QUERY);
    const [graphData, setGraphData] = useState(
        {
            graphValues: null,
            graphLabels: null
        }
    );

    if (loading) return null;
    if (error) return <Text>Error!</Text>;




    return (
        <View>
            <TouchableOpacity onPress={() => {
                setGraphData(
                    {
                        graphValues: data,
                        graphLabels: ['8AM', '12PM', '4PM', '8PM']
                    }

                );
            }}>
                <Text>Daily</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setGraphData(
                    {
                        graphValues: data,
                        graphLabels: ['M', 'T', 'W', 'TH']
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