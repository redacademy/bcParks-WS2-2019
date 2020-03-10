import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import ActivityList from '../../components/ActivityList/ActivityList';
import ActivityDisplay from '../../components/ActivityDisplay/ActivityDisplay'


const ActivityScreen = ({ data }) => {
    console.log('activity', data)
    return (
        <ScrollView>
            <View>
                <ActivityChart data={data} />
                <ActivityDisplay data={data} />
                <ActivityList data={data} />

            </View>

        </ScrollView >

    );
};

export default ActivityScreen;