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

    if (loading) return null;
    if (error) return <Text>Error!</Text>;

    const [graphData, setGraphData] = useState(data);
    const [graphLabels, setGraphLabels] = useState(['8AM', '12PM', '4PM', '8PM']);

    return (
        <View>
            <TouchableOpacity onPress={() => {
                setGraphLabels(['8AM', '12PM', '4PM', '8PM']);
                setGraphData(data);
            }}>
                <Text>Daily</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setGraphLabels(['M', 'T', 'W', 'F'])

            }}>
                <Text>Weekly</Text>
            </TouchableOpacity>
            {graphData && <Activity data={graphData} labels={graphLabels} />}

        </View>

    )
}

export default ActivityContainer;