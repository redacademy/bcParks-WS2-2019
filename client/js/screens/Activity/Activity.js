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

const ActivityScreen = ({ data, labels }) => {
    return (
        <ScrollView>
            <View>
                <ActivityChart data={data} labels={labels} />

            </View>

        </ScrollView >

    );
};

export default ActivityScreen;