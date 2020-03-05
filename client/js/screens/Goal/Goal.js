import React, { useState, useContext } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { DayButtonContainer, DayButton } from './style';
import DaysButton from '../../components/DaysButton/DaysButton';

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
                    <DayButtonContainer>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="S" long="Sunday"/>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="M" long="Monday"/>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="T" long="Tuesday"/>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="W" long="Wednesday"/>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="T" long="Thursday"/>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="F" long="Friday"/>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="S" long="Saturday"/>
                    </DayButtonContainer>
                    <Button title="everyday"
                        onPress={() => {
                        days.length === 7 ?
                            setDays([]) :
                            setDays(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
                        }} />
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setHours(parseInt(text))} />
                </View> :

                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setHours(parseInt(text))} />
            }

            <Button title="Update goal" onPress={() => {
                if(days.length === 0) {
                    alert("Please select at least one day")
                } else if(isNaN(hours)) {
                    alert("Please enter a number")
                } else if(hours<=1) {
                    alert("Please enter more than 1 hour")
                } else {
                    UpdateGoals({
                        variables: {
                            hours: hours,
                            title: days
                        }
                    });
                    setHours(1);
                    alert("Goal has been updated")
                }
            }} />
        </View>
    )
}

export default withNavigation(GoalScreen);