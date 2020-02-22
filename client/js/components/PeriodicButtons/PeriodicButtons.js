import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';


class TimePeriods extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity
                    onPress={() => console.log('Daily')}>
                    <Text>Daily</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Weekly')}>
                    <Text>Weekly</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Monthly')}>
                    <Text>Monthly</Text>
                </TouchableOpacity>
            </View>
        )
    };

};

export default TimePeriods;