import React from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import styles from './styles';
import PeriodicButtons from '../../components/PeriodicButtons/PeriodicButtons';

const ActivityScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View><Text>Activity Screen</Text></View>

            <View >
                <PeriodicButtons />


            </View>

        </ScrollView >

    );
};

export default ActivityScreen;