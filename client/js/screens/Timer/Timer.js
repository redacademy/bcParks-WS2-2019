import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StartStopTimer from '../../components/StartStopTimer/StartStopTimer';
import styled from 'styled-components';

const Placeholder = styled.View`
    height: 320px;
`

const TimerScreen = ({ navigation }) => {

    return (
        <View>
            <Placeholder />
            <View>
                <StartStopTimer />
                <TouchableOpacity onPress={() => navigation.push('MoodSelect')}>
                    <Text>next slide</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TimerScreen;