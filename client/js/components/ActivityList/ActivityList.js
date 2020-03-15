import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';
import moment from "moment";
import MoodConverter from '../../assets/MoodConverter';
import { ListContainer, ActivityDetails, FlatListContainer, ListItem, styles } from './styles';
import MoodFace from '../../assets/images/MoodVeryHappy';


const ActivityList = ({ data }) => {
    return (
        <View>
            <FlatListContainer
                data={data}
                renderItem={({ item }) => {
                    let diff = (moment.utc(item.timeEnd)).diff((moment.utc(item.timeStart)));
                    let duration = moment.utc(diff).format('HH:mm:ss');
                    return (
                        <ListContainer>
                            <MoodFace style={styles.image} />
                            <Text> {item.mood}</Text>
                            <ActivityDetails>
                                <ListItem> {moment.utc(item.timeStart).format('HH:mm a')} </ListItem>
                                <ListItem> {duration} </ListItem>
                                <ListItem> {item.locations && item.locations.length > 0 && item.locations[0].name} </ListItem>
                            </ActivityDetails>
                        </ListContainer>
                    )
                }}
                keyExtractor={item => item.id}
            >
            </FlatListContainer>


        </View>
    )

}

export default ActivityList;
