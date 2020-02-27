import React from 'react';
import Activity from './Activity';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import {
    Text
} from 'react-native';

const PROGRESSES_QUERY = gql`
  {
    progresses {
        id
        duration
        completion
      }
  }
`

const ActivityContainer = () => {

    return (
        <Query query={PROGRESSES_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>;
                if (error) return <Text>Error :(</Text>;

                return (
                    <Activity data={data} />
                )
            }}
        </Query>

    )
}

export default ActivityContainer;