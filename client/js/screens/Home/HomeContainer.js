import React from "react"
import { withNavigation } from 'react-navigation';
import { Text } from "react-native"
import Home from "./Home"
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import AuthContext from "../../context/AuthContext";

const QUERY_GOALS = gql`
    query {
        goals{
            id
            hours
            days{
                title
            }
        }
    }
`;
export const QUERY_SESSIONS = gql`
    query {
        sessions{
            timeStart
            timeEnd
            date
        }
    }
`
const HomeContainer = ({ navigation }) => {
    const { loading: sessionLoading, error: sessionError, data: sessionData } = useQuery(QUERY_SESSIONS);
    const { loading: goalLoading, error: goalError, data: goalData } = useQuery(QUERY_GOALS);

    return (<AuthContext.Consumer>
        {({ user }) => {


            if (sessionLoading || goalLoading) {
                return (
                    <Text>Loading</Text>
                )
            } else if (sessionError || goalError) {
                return (
                    <Text>Error</Text>
                )
            } else {
                return (
                    <Home sessionData={sessionData} goalData={goalData} navigation={navigation} user={user} />
                )
            }
        }}
    </AuthContext.Consumer>)


}

export default withNavigation(HomeContainer)