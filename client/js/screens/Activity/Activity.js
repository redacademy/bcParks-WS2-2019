import React from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import styles from './styles';
import PeriodicButtons from '../../components/PeriodicButtons/PeriodicButtons';
import ActivityChart from '../../components/ActivityChart/ActivityChart';

const ActivityScreen = ({ navigation }) => {
    return (
        <ScrollView>

            <View >
                <PeriodicButtons />

            </View>
            <View>
                <ActivityChart />
            </View>

        </ScrollView >

    );
};

export default ActivityScreen;