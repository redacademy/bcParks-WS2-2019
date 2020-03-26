import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
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
    Background,
    DotNavView,
    LogOutButton,
    LogOutText,
    SaveContainer
} from './styles';
import DaysButton from '../../components/DaysButton/DaysButton';
import { Heading, PrimaryBtn, NoFlexHeaderCont } from '../../globalStyles';
import Dash from 'react-native-dash';
import DotNav from '../../components/DotNav/DotNav';
import AuthContext from '../../context/AuthContext';


const Mutation_UpdateGoals = gql`
    mutation UpdateGoals($userId: ID!, $titleArr: [String!], $hours: Float) {
        updateGoal(
            data: {
                days: {
                    updateMany: {
                        where: {
                            title_in: $titleArr
                        }
                        data: {
                            hours: $hours
                        }
                    }
                }
            },
            where: {
                id: $userId
            }
        ){
            id
            user{
                id
            }
            days{
                title
                hours
            }
        }
    }
`
const Mutation_CreateGoal = gql`
    mutation createGoal($goalArr: [DaysCreateInput!] , $userId: ID) {
        createGoal(
            data: {
                id: $userId
                days: {
                    create: $goalArr
                }
                user: {
                    connect: {
                        id: $userId
                    }
                }
            }
        ){
            id
            days{
                id
                title
                hours
            }
            user{
                id
                email
            }
        }
    }
`

const GoalScreen = ({ navigation, page, setUser }) => {
    const [type, setType] = useState("daily");
    const [current, setCurrent] = useState(true)
    const [days, setDays] = useState([]);
    const [hours, setHours] = useState(1);
    const [text, setText] = useState("");
    const [everyday, setEveryday] = useState(false)
    const [UpdateGoals] = useMutation(Mutation_UpdateGoals);
    const [createGoal] = useMutation(Mutation_CreateGoal);
    const { user } = useContext(AuthContext);
    console.log('user', user)

    let goalArr = [
        {title: "Sunday",hours: 1},
        {title: "Monday",hours: 1},
        {title: "Tuesday",hours: 1},
        {title: "Wednesday",hours: 1},
        {title: "Thursday",hours: 1},
        {title: "Friday",hours: 1},
        {title: "Saturday",hours: 1},
        {title: "weekly", hours: 7}
    ]

    const addDays = (day) => {
        days.includes(day) ?
            setDays(days.filter(name =>
                name !== day
            )) :
            setDays([...days, day])
    }
    return (
        <Background theme={page}>
            {page !== "onBoarding" ?
                <NoFlexHeaderCont>
                    <Heading>
                        Settings
                    </Heading>
                </NoFlexHeaderCont> :
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
                    isDaily={current}
                    onPress={() => {
                        setType("daily");
                        setCurrent(!current)
                    }}
                >
                    <ButtonText>Daily</ButtonText>
                </TimeButtons >
                <TimeButtons
                    title="Weekly"
                    isDaily={!current}
                    onPress={() => {
                        setType("weekly");
                        setDays(["weekly"]);
                        setCurrent(!current)
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
                        <DaysButton addDays={addDays} everyday={everyday} days={days} setDays={setDays} short="S" long="Sunday" />
                        <DaysButton addDays={addDays} everyday={everyday} days={days} setDays={setDays} short="M" long="Monday" />
                        <DaysButton addDays={addDays} everyday={everyday} days={days} setDays={setDays} short="T" long="Tuesday" />
                        <DaysButton addDays={addDays} everyday={everyday} days={days} setDays={setDays} short="W" long="Wednesday" />
                        <DaysButton addDays={addDays} everyday={everyday} days={days} setDays={setDays} short="T" long="Thursday" />
                        <DaysButton addDays={addDays} everyday={everyday} days={days} setDays={setDays} short="F" long="Friday" />
                        <DaysButton addDays={addDays} everyday={everyday} days={days} setDays={setDays} short="S" long="Saturday" />
                    </DayButtonContainer>
                    <EverydayButton title="everyday"
                        onPress={() => {
                            setEveryday(!everyday)
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
                                setDays(["weekly"]);
                            }}
                            value={text} />
                        <TextHours>hours per week</TextHours>
                    </InputContainer>
                </View>
            }
            {page === "onBoarding" ?

                <Flex>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <BtnText isSkip>back</BtnText>
                    </TouchableOpacity>
                    <DotNavView>
                        <DotNav activeIndex={3} />
                    </DotNavView>
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
                            days.forEach(day=>{
                                for(let i = 0; i<goalArr.length; i++){
                                    if(goalArr[i].title === day){
                                        goalArr[i].hours = hours
                                        break;
                                    }
                                }
                            })
                            

                            createGoal({
                                variables: {
                                    goalArr: goalArr,
                                    userId: user.id
                                }
                            })
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
                    <TouchableOpacity title="Save" onPress={() => {
                        if(user.id==null){
                            alert("Please sign in first.")
                        } else {
                        
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
                                    titleArr: days,
                                    userId: user.id
                                }
                            });
                            setHours(1);
                            setText("");
                            alert("Goal has been updated")
                            navigation.navigate('Home')
                        }
                        }
                    }} >
                        <PrimaryBtn>Save</PrimaryBtn>
                    </TouchableOpacity>
                    <LogOutButton title="Log out"
                        onPress={() => {
                            setUser({
                                id: null,
                                email: null
                            })
                            navigation.popToTop()
                            navigation.navigate('User')

                        }}
                    >
                        <LogOutText>{user.id==null ? "Sign In" : "Log out"}</LogOutText>
                    </LogOutButton>
                </SaveContainer>
            }
        </Background>
    )
}

export default GoalScreen;