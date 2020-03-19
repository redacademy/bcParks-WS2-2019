import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StartStopTimer from '../../components/StartStopTimer/StartStopTimer';
import styled from 'styled-components';
import { theme, styles } from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Placeholder = styled.View`
    height: 550px;
    background-color: lightgray;
`
const TimeHeaderCont = styled.View`
    display:flex;
    flex-direction: row;
    position: absolute;
    margin: 30px 0 0;
    z-index: 50;
`
const ScreenCont = styled.View`
    position: relative;
`

const TimerScreen = ({ navigation }) => {

    return (
        <ScreenCont>
            <TimeHeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIcon} />
                </TouchableOpacity>
            </TimeHeaderCont>
            <Placeholder />
            <View>
                <StartStopTimer navigation={navigation} />
            </View>
        </ScreenCont>
    );
}

export default TimerScreen;