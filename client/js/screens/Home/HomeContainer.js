import React, { useContext } from "react"
import { withNavigation } from 'react-navigation';
import { Text } from "react-native"
import Home from "./Home"
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import AuthContext from "../../context/AuthContext";
import ProgressContext from '../../context/ProgressContext'

const QUERY_GOALS = gql`
    query goal($userId: ID ){
        goal(
            where: {
                id: $userId
            }
        ){
            id
            days{
                title
                hours
            }
            user{
                id
            }
        }
    }
`;

const HomeContainer = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const { sample } = useContext(ProgressContext);

    const { loading: goalLoading, error: goalError, data: goalData } = useQuery(QUERY_GOALS, {
        variables: {
            userId: user.id
        }
    });
    if (goalLoading || (user.id == "Dev@test.com" && sample.length == 0)) {
        return (
            <Text>Loading</Text>
        )
    } else if (goalError) {
        return (
            <Text>Error</Text>
        )
    } else {
        return (
            <Home goalData={goalData} navigation={navigation} user={user} sample={sample} />
        )
    }



}

export default withNavigation(HomeContainer)