import React from "react"
import { withNavigation } from 'react-navigation';
import { Text } from "react-native"
import Home from "./Home"
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const QUERY_PROGRESS = gql`
    query {
        progress(where:{id:1}) {
            id
            duration
            completion
        }
    }
`;

const HomeContainer = ({ navigation }) => {
    const { loading, error, data } = useQuery(QUERY_PROGRESS);
    if (loading) {
        return (
            <Text>Loading</Text>
        )
    } else if (error) {
        return (
            <Text>Error</Text>
        )
    } else {
        return (
            <Home data={data} navigation={navigation} />
        )
    }
}

export default withNavigation(HomeContainer)