import React, { useState, useContext } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
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
    const [type, setType] = useState("daily");
    const [days, setDays] = useState([]);
    const [hours, setHours] = useState(1);
    const [UpdateGoals] = useMutation(Mutation_UpdateGoals);

    const addDays = (day) => {
        days.includes(day) ?
        setDays(days.filter(name => 
            name !== day
        )) :
        setDays([...days, day])
    }
    
    return (
        <View>
            <Text>
                GoalPage
            </Text>
            <View>
                <Button title="Daily"
                        onPress={() => {
                            setType("daily");
                        }}
                />
                <Button title="Weekly"
                        onPress={() => {
                            setType("weekly");
                            setDays("weekly");
                        }}
                />
            </View>

            {type.includes("daily") ? 

            <View>
                <Button title="S" onPress={() => {addDays("Sunday")}} />
                <Button title="M" onPress={() => {addDays("Monday")}} />
                <Button title="T" onPress={() => {addDays("Tuesday")}} />
                <Button title="W" onPress={() => {addDays("Wednesday")}} />
                <Button title="T" onPress={() => {addDays("Thursday")}} />
                <Button title="F" onPress={() => {addDays("Friday")}} />
                <Button title="S" onPress={() => {addDays("Saturday")}} />
                             
                <Button title="everyday" 
                        onPress={() => { days.length === 7 ? 
                            setDays([]) :
                            setDays(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
                        }}/>

                <TextInput  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => setHours(parseInt(text))} />
            </View> :

            <TextInput  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setHours(parseInt(text))} />
            }

            <TouchableOpacity onPress={() => {isNaN(hours) ? alert("Please enter a number") :
                UpdateGoals({
                    variables: {
                        hours: hours,
                        title: days
                    }
                })
            }}>
                <Text>
                    UpdateGoal
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(GoalScreen);