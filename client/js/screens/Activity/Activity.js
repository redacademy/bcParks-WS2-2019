import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
import PeriodicButtons from '../../components/PeriodicButtons/PeriodicButtons';
import ActivityChart from '../../components/ActivityChart/ActivityChart';

const ActivityScreen = ({ data }) => {
    console.log('activity', data)
    return (
        <ScrollView>
            <View>
                <ActivityChart data={data} />
            </View>

        </ScrollView >

    );
};

export default ActivityScreen;