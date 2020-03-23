import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { DayButtonContainer, ToggleMenu, Flex, BtnText } from './style';
import DaysButton from '../../components/DaysButton/DaysButton';
import { theme, HeaderCont, Heading, styles } from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Mutation_UpdateGoals = gql`
    mutation UpdateGoals($hours: Float!, $title: [String!]) {
        updateManyGoals(
            data: {
                hours: $hours
            },
            where: {
                days: {
                    title_in: $title
                }
            }
        ){
            count
        }
    }
`

const GoalScreen = ({ navigation, page }) => {
    console.log('page', page)
    const [type, setType] = useState("daily");
    const [days, setDays] = useState([]);
    const [hours, setHours] = useState(1);
    const [text, setText] = useState("");
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
            {page !== "onBoarding" ?
                <HeaderCont>
                    <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                        <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Heading>
                        Settings
                    </Heading>
                </HeaderCont> :
                null
            }
            <View style ={{ marginTop: 50}}>
                <Text style={{ alignSelf: "center" }}>I want to repeat spending time in green space</Text>
            </View>
            <ToggleMenu>
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
            </ToggleMenu>

            {type.includes("daily") ?

                <View>
                    <DayButtonContainer>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="S" long="Sunday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="M" long="Monday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="T" long="Tuesday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="W" long="Wednesday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="T" long="Thursday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="F" long="Friday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="S" long="Saturday" />
                    </DayButtonContainer>
                    <Button title="everyday"
                        onPress={() => {
                            days.length === 7 ?
                                setDays([]) :
                                setDays(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
                        }} />
                    <Text style={{ alignSelf: "center" }}>I want to spend this amount of hours</Text>
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 60 }}
                        onChangeText={text => {
                            setHours(parseInt(text));
                            setText(text)
                        }}
                        value={text} />
                </View> :

                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => {
                        setHours(parseInt(text));
                        setText(text)
                    }}
                    value={text} />
            }
            {page === "onBoarding" ? 
            
            <Flex>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Tabs')
                }}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (days.length === 0) {
                        alert("Please select at least one day")
                    } else if (isNaN(hours)) {
                        setText("");
                        alert("Please enter a number");
                    } else if (hours <= 1) {
                        setText("");
                        alert("Please enter more than 1 hour")
                    } else {
                        UpdateGoals({
                            variables: {
                                hours: hours,
                                title: days
                            }
                        });
                        setHours(1);
                        setText("");
                        alert("Goal has been updated")
                        navigation.push('OnEnd')
                    }
                }}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex>
            :
            <View>
            <Button title="Save" onPress={() => {
                if (days.length === 0) {
                    alert("Please select at least one day")
                } else if (isNaN(hours)) {
                    setText("");
                    alert("Please enter a number");
                } else if (hours <= 1) {
                    setText("");
                    alert("Please enter more than 1 hour")
                } else {
                    UpdateGoals({
                        variables: {
                            hours: hours,
                            title: days
                        }
                    });
                    setHours(1);
                    setText("");
                    alert("Goal has been updated")
                    navigation.popToTop()
                    navigation.push('Home')
                }
            }} />
            <Button title="Log out" />
            </View>
        }
        </View>
    )
}

export default GoalScreen;