import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const Mutation_UpdateGoals = gql`
    mutation UpdateGoals($hours: Int!, $title: [String!]) {
        updateManyGoals(
            data: {
                hours: $hours
            },
            where: {
                days_every: {
                    title_in: $title
                }
            }
        ){
            count
        }
    }
`

const GoalScreen = () => {
    const [UpdateGoals] = useMutation(Mutation_UpdateGoals)
    return (
        <View>
            <Text>
                GoalPage
            </Text>
            <TouchableOpacity onPress={() => {
                UpdateGoals({
                    variables: {
                        hours: 1,
                        title: ["Sunday", "Monday"]
                    }
                })
            }}>
                <Text>
                    CreateGoal
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(GoalScreen);