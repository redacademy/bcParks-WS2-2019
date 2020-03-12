import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
// import styles from './styles';
import moment from "moment";


const ActivityList = ({ data }) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    let duration = (moment.utc(item.timeEnd)).diff((moment.utc(item.timeStart)), 'hours', true);
                    return (
                        <View>
                            <Text> {item.mood} </Text>
                            <Text> {moment.utc(item.timeStart).format('HH:mm a')} </Text>
                            <Text> {duration}h </Text>
                            <Text> {item.locations && item.locations.length > 0 && item.locations[0].name} </Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            >
            </FlatList>


        </View>
    )

}

export default ActivityList;
