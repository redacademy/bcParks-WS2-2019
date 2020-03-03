import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';


const PeriodicButtons = () => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity >
                <Text>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Weekly</Text>
            </TouchableOpacity>

        </View>
    )
};


export default PeriodicButtons;