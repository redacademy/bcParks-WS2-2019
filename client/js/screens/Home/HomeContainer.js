import React, {useContext, useEffect } from "react"
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

const HomeContainer = ({ navigation }) => {
    const {user} = useContext(AuthContext);

    // const { loading: sessionLoading, error: sessionError, data: sessionData } = 
    //     useQuery(QUERY_SESSIONS, {
    //         variables: {
    //             email: user.email || "admin@gmail.com"
    //         }
    //     });
    console.log('goalQuery', useQuery(QUERY_GOALS))
    const { loading: goalLoading, error: goalError, data: goalData } = useQuery(QUERY_GOALS);


            console.log('containerNav', navigation)

            if (goalLoading) {
                return (
                    <Text>Loading</Text>
                )
            } else if (goalError) {
                return (
                    <Text>Error</Text>
                )
            } else {
                return (
                    <Home goalData={goalData} navigation={navigation} user={user} />
                )
            }



}

export default withNavigation(HomeContainer)