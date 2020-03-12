import React from 'react';
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
                <StartStopTimer navigation={navigation} />
            </View>
        </View>
    );
}

export default TimerScreen;