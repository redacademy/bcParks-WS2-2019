import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { theme, ScreenBkgCont, PrimaryBtn } from '../../globalStyles';
import { NextBtnCont, InputSkipText } from '../Timer/styles';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import InputTextBox from '../../components/InputText/InputText';
import styled from 'styled-components';

const InputHeading = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.bodyFont};
    width: 70%
    margin: 70px 35px 40px;
    line-height: 30px;
`

const Mutation_CreateSession = gql`
    mutation CreateSession($timeStart: DateTime!, $timeEnd: DateTime!, $date: DateTime!, $mood: Float, $journal: String){
        createSession(
            data: {
                timeStart: $timeStart,
                timeEnd: $timeEnd,
                date: $date,
                mood: $mood,
                journal: $journal,
            }
        ){
            id
            timeEnd
            timeStart
            date
            mood
            journal
        }
    }
`

const TextInputScreen = ({ navigation, params }) => {

    const [journal, setJournal] = useState("");
    const [CreateSession] = useMutation(Mutation_CreateSession);

    const updateJournal = text => {
        setJournal(text)
    }

    return (
        <ScreenBkgCont>
            <InputHeading>Write about your experience with Green Time.</InputHeading>
            <InputTextBox update={updateJournal} journal={journal}/>
            <NextBtnCont>
                <TouchableOpacity onPress={() => {
                    CreateSession({
                        variables: {
                            timeStart: params.startTime,
                            timeEnd: params.endTime,
                            date: params.date,
                            mood: params.mood,
                            journal: journal,
                        }
                    })
                    navigation.popToTop()
                    navigation.navigate('Home')
                }}>
                    <PrimaryBtn>done</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
            <TouchableOpacity onPress={() => {
                CreateSession({
                    variables: {
                        timeStart: params.startTime,
                        timeEnd: params.endTime,
                        date: params.date,
                        mood: params.mood,
                    }
                })
                navigation.popToTop()
                navigation.navigate('Home')
            }}>
                <InputSkipText>skip</InputSkipText>
            </TouchableOpacity>
        </ScreenBkgCont>
    );
}

export default TextInputScreen;