import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
    DayButtonContainer,
    ToggleMenu,
    Flex,
    BtnText,
    LinesContainer,
    TimeButtons,
    ButtonText,
    LineText,
    EverydayButton,
    DayTextBtn,
    InputContainer,
    TextHours,
    BodyCont,
    Background,
    SaveButton,
    SaveText,
    LogOutButton,
    LogOutText,
    SaveContainer
} from './style';
import DaysButton from '../../components/DaysButton/DaysButton';
import { theme, HeaderCont, Heading, styles } from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dash from 'react-native-dash';
import DotNav from '../../components/DotNav/DotNav';


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
        <Background>
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

            <LinesContainer >
                <Dash
                    style={{ width: 60, height: 1, flexDirection: 'row' }}
                    dashColor={'#5a8a4d'}
                    dashThickness={1}
                    dashGap={0}
                    dashLength={60}
                />
                <LineText >I want to repeat spending time in green space</LineText>
                <Dash
                    style={{ width: 60, height: 1, flexDirection: 'row' }}
                    dashColor={'#5a8a4d'}
                    dashThickness={1}
                    dashGap={0}
                    dashLength={60}
                />
            </LinesContainer>

            <ToggleMenu>
                <TimeButtons
                    title="Daily"
                    onPress={() => {
                        setType("daily");
                    }}
                >
                    <ButtonText>Daily</ButtonText>
                </TimeButtons >
                <TimeButtons
                    title="Weekly"
                    onPress={() => {
                        setType("weekly");
                        setDays("weekly");
                    }}
                >
                    <ButtonText>Weekly</ButtonText>
                </TimeButtons >
            </ToggleMenu>

            {type.includes("daily") ?

                <View>
                    <LinesContainer >
                        <Dash
                            style={{ width: 150, height: 1, flexDirection: 'row' }}
                            dashColor={'#5a8a4d'}
                            dashThickness={1}
                            dashGap={0}
                            dashLength={150}
                        />
                        <LineText >On these days</LineText>
                        <Dash
                            style={{ width: 150, height: 1, flexDirection: 'row' }}
                            dashColor={'#5a8a4d'}
                            dashThickness={1}
                            dashGap={0}
                            dashLength={150}
                        />
                    </LinesContainer>
                    <DayButtonContainer>
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="S" long="Sunday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="M" long="Monday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="T" long="Tuesday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="W" long="Wednesday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="T" long="Thursday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="F" long="Friday" />
                        <DaysButton addDays={addDays} days={days} setDays={setDays} short="S" long="Saturday" />
                    </DayButtonContainer>
                    <EverydayButton title="everyday"
                        onPress={() => {
                            days.length === 7 ?
                                setDays([]) :
                                setDays(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
                        }} >
                        <DayTextBtn>Everyday</DayTextBtn>
                    </EverydayButton>
                    <LinesContainer >
                        <Dash
                            style={{ width: 100, height: 1, flexDirection: 'row' }}
                            dashColor={'#5a8a4d'}
                            dashThickness={1}
                            dashGap={0}
                            dashLength={100}
                        />
                        <LineText >I want to spend this amount of time</LineText>
                        <Dash
                            style={{ width: 100, height: 1, flexDirection: 'row' }}
                            dashColor={'#5a8a4d'}
                            dashThickness={1}
                            dashGap={0}
                            dashLength={100}
                        />
                    </LinesContainer>
                    <InputContainer>
                        <TextInput style={{ height: 32, backgroundColor: '#fff', width: 72, borderRadius: 10, color: '#cc6c4e', fontSize: 22, textAlign: 'center' }}
                            onChangeText={text => {
                                setHours(parseInt(text));
                                setText(text)
                            }}
                            value={text} >

                        </TextInput>
                        <TextHours>hours per day</TextHours>
                    </InputContainer>
                </View> :
                <View>
                    <LinesContainer >
                        <Dash
                            style={{ width: 100, height: 1, flexDirection: 'row' }}
                            dashColor={'#5a8a4d'}
                            dashThickness={1}
                            dashGap={0}
                            dashLength={100}
                        />
                        <LineText >I want to spend this amount of time</LineText>
                        <Dash
                            style={{ width: 100, height: 1, flexDirection: 'row' }}
                            dashColor={'#5a8a4d'}
                            dashThickness={1}
                            dashGap={0}
                            dashLength={100}
                        />
                    </LinesContainer>
                    <InputContainer>
                        <TextInput style={{ height: 32, backgroundColor: '#fff', width: 72, borderRadius: 10, color: '#cc6c4e', fontSize: 22, textAlign: 'center' }}
                            onChangeText={text => {
                                setHours(parseInt(text));
                                setText(text)
                            }}
                            value={text} />
                        <TextHours>hours per week</TextHours>
                    </InputContainer>
                </View>
            }
            {page === "onBoarding" ?

                <Flex>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Tabs')
                    }}>
                        <BtnText isSkip>skip</BtnText>
                    </TouchableOpacity>

                    <DotNav activeIndex={3} />

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

                <SaveContainer>
                    <SaveButton title="Save" onPress={() => {

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

                    }} >
                        <SaveText>Save</SaveText>
                    </SaveButton>
                    <LogOutButton title="Log out" >
                        <LogOutText >Log out</LogOutText>
                    </LogOutButton>
                </SaveContainer>
            }
        </Background>

    )
}

export default GoalScreen;