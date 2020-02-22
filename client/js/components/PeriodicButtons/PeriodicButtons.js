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
                <TouchableOpacity>
                    <Text>Daily</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Weekly</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Monthly</Text>
                </TouchableOpacity>
            </View>
        )
    };

};

export default TimePeriods;