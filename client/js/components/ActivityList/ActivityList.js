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
    console.log('activity list', data);
    return (
        <View>
            <FlatList
                data={data.graphValues.sessions}
                renderItem={({ item }) => {
                    let duration = (moment.utc(item.timeEnd)).diff((moment.utc(item.timeStart)), 'hours', true);
                    return (
                        <View>
                            <Text> {item.mood} </Text>
                            <Text> {moment.utc(item.timeStart).format('HH:mm a')} </Text>
                            <Text> {duration}h </Text>
                            <Text> {item.locations} </Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            >
            </FlatList>

            <FlatList
                data={data.graphValues.progresses}
                renderItem={({ item }) => {

                    return (
                        <View>
                            {/* <Text> {item.mood} </Text> */}
                            <Text> {moment.utc(item.date).format('dddd')} </Text>
                            <Text> {item.duration}h </Text>
                            {/* <Text> {item.locations} </Text> */}
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
