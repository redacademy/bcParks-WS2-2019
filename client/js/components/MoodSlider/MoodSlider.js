import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MoodIcon } from './styles';

const MoodSlider = () => {
    return (
        <View>
            <MoodIcon>Face</MoodIcon>
            <TouchableOpacity>
                <Text>----slider---</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MoodSlider;