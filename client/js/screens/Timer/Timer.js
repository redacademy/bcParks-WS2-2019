import React from 'react';
import { withNavigation } from "react-navigation";
import { View, Text, TouchableOpacity } from 'react-native';
import StartStopTimer from '../../components/StartStopTimer/StartStopTimer';
import styled from 'styled-components';

const Placeholder = styled.View`
    height: 350px;
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

export default withNavigation(TimerScreen);