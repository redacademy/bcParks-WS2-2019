import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import moment from "moment";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';



const JournalScreen = ({ params }) => {

    let diff = (moment.utc(params.item.timeEnd)).diff((moment.utc(params.item.timeStart)));
    let duration = moment.utc(diff).format('HH:mm');
    return (
        <View>
            <Text>{moment.utc(params.item.date).format('dddd')}</Text>
            <Text>{moment.utc(params.item.timeStart).format('HH:mm a')}</Text>
            <Text>{moment.utc(params.item.timeEnd).format('HH:mm a')}</Text>
            <Text>{params.item.mood}</Text>
            <Text>{duration} hours</Text>
            <Icon2 name='map-marker' size={22} color='#8cbe82'></Icon2>
            <Text>{params.item.locations && params.item.locations.length > 0 && params.item.locations[0].name}</Text>
            <Text>{params.item.journal}</Text>



        </View>
    );
};

export default JournalScreen;