import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const MoodSelectScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Amazing!</Text>
            <Text>How are you feeling?</Text>
            <Text>Face</Text>
            <Text>----slider---</Text>
            <TouchableOpacity onPress={() => navigation.push('TextInput')}>
                <Text>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('TextInput')}>
                <Text>Skip</Text>
            </TouchableOpacity>
        </View>
    );
}

export default withNavigation(MoodSelectScreen);