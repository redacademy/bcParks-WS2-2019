import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { theme, PrimaryBtn } from '../../globalStyles';
import { NextBtnCont, InputSkipText } from '../Timer/styles';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import InputTextBox from '../../components/InputText/InputText';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import MapContext from '../../context/MapContext';
import AuthContext from '../../context/AuthContext';

const InputHeading = styled.Text`
    font-size:${theme.bodyFontSize};
    font-family: ${theme.bodyFont};
    width: 70%
    margin: 100px 35px 40px;
    line-height: 30px;
`

const Mutation_CreateSession = gql`
    mutation createSession(
        $timeStart: DateTime!
        $timeEnd: DateTime!
        $mood: Float
        $journal: String
        $date: DateTime!
        $externalId: String!
        $locationName: String!
        $vicinity: String!
        $locLat: Float!
        $locLng: Float!
        $neLat: Float!
        $neLng: Float!
        $swLat: Float!
        $swLng: Float!
        $userId: ID
    ){
        createSession(
            data: {
                timeStart: $timeStart
                timeEnd: $timeEnd
                mood: $mood
                journal: $journal
                date: $date
                locations: {
                    create: {
                        externalId: $externalId
                        name: $locationName
                        vicinity: $vicinity
                        geometry: {
                            create: {
                                location: {
                                    create: {
                                        lat: $locLat
                                        lng: $locLng
                                    }
                                }
                                viewport: {
                                    create: {
                                        northeast: {
                                            create: {
                                                lat: $neLat
                                                lng: $neLng
                                            }
                                        }
                                        southwest: {
                                            create: {
                                                lat: $swLat
                                                lng: $swLng
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                user: {
                    connect: {
                        id: $userId
                    }
                }
            }
        ){ 
            id
        }
    }
`

const TextInputScreen = ({ navigation, params }) => {
    const { selectedMap } = useContext(MapContext)
    const { user } = useContext(AuthContext)
    const [journal, setJournal] = useState("");
    const [CreateSession] = useMutation(Mutation_CreateSession);

    const updateJournal = text => {
        setJournal(text)
    }

    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <InputHeading>Write about your experience with Green Time.</InputHeading>
            <InputTextBox update={updateJournal} journal={journal} />
            <NextBtnCont>
                <TouchableOpacity onPress={() => {
                    // console.log('params', params)
                    // console.log('selected', selectedMap)
                    // CreateSession({
                    //     variables: {
                    //         timeStart: params.startTime,
                    //         timeEnd: params.endTime,
                    //         mood: params.mood,
                    //         journal: journal,
                    //         date: params.date,
                    //         externalId: "Random",
                    //         locationName: selectedMap.name,
                    //         vicinity: selectedMap.vicinity,
                    //         locLat: selectedMap.geometry.location.lat,
                    //         locLng: selectedMap.geometry.location.lng,
                    //         neLat: selectedMap.geometry.viewport.northeast.lat,
                    //         neLng: selectedMap.geometry.viewport.northeast.lng,
                    //         swLat: selectedMap.geometry.viewport.southwest.lat,
                    //         swLng: selectedMap.geometry.viewport.southwest.lng,
                    //         userId: user.id,
                    //     },
                    //     refetchQueries: [{
                    //         query: gql`
                    //         query {
                    //             sessions(
                    //                 where: {
                    //                     user: {
                    //                         id: ${user.id}
                    //                     }
                    //                 }
                    //             ){
                    //                 timeStart
                    //                 timeEnd
                    //                 date
                    //                 user{
                    //                     id
                    //                 }
                    //             }
                    //         }
                    //     `
                    //     }]
                    // })
                    alert('A session has been created')
                    navigation.popToTop()
                    navigation.navigate('Home')
                }}>
                    <PrimaryBtn>done</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
            <TouchableOpacity onPress={() => {
                // CreateSession({
                //     variables: {
                //         timeStart: params.startTime,
                //         timeEnd: params.endTime,
                //         date: params.date,
                //         mood: params.mood,
                //     }
                // })
                alert('A session has been created')
                navigation.popToTop()
                navigation.navigate('Home')
            }}>
                <InputSkipText>skip</InputSkipText>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default TextInputScreen;