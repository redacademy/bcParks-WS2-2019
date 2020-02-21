import React from 'react';
import {
    ScrollView,
    View,
} from 'react-native';
// import styles from './styles';
import TimePeriods from '../../components/TimePeriods';

const Activity = ({ data }) => {
    return (
        <ScrollView>

            <View >
                <TimePeriods data={data} />
            </View>

        </ScrollView >

    );
};

export default Activity;