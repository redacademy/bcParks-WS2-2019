import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import moment from "moment";
import Mood from '../Mood/Mood';
import { ListContainer, ActivityDetails, FlatListContainer, ListItem, styles, DetailRow, NotebookIcon } from './styles';
import MoodFace from '../../assets/images/MoodVeryHappy';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';


const ActivityList = ({ data, navigation }) => {

    return (
        <View>
            <FlatListContainer
                data={data}
                renderItem={({ item }) => {
                    let diff = (moment.utc(item.timeEnd)).diff((moment.utc(item.timeStart)));
                    let duration = moment.utc(diff).format('HH:mm:ss');
                    let moodsData = item && item.map(session => session.mood);
                    console.log('data', data);
                    return (
                        <ListContainer>
                            <Text> {item.mood}</Text>

                            {moodsData.map((number) => {
                                if (number > 0 && number <= 1) {
                                    <Text>Very Sad</Text>;
                                } else if (number > 1 && number <= 2) {
                                    <Text>Sad</Text>;
                                } else if (number > 2 && number <= 3) {
                                    <Text>Neutral</Text>;
                                } else if (number > 3 && number <= 4) {
                                    <Text>Happy</Text>;
                                } else if (number > 4 && number <= 5) {
                                    <Text>Very Happy</Text>;
                                }
                            })}

                            <ActivityDetails>
                                <DetailRow>
                                    <Icon name='access-time' size={22} color='green'></Icon>
                                    <ListItem> {moment.utc(item.timeStart).format('HH:mm a')} </ListItem>
                                </DetailRow>
                                <DetailRow>
                                    <Icon2 name='leaf' size={22} color='green'></Icon2>
                                    <ListItem> {duration} </ListItem>
                                </DetailRow>
                                <DetailRow>
                                    <Icon2 name='map-marker' size={22} color='green'></Icon2>
                                    <ListItem> {item.locations && item.locations.length > 0 && item.locations[0].name} </ListItem>
                                </DetailRow>
                            </ActivityDetails>
                            <NotebookIcon>
                                <TouchableOpacity onPress={() => navigation.navigate('Journal', { item })}>
                                    <Icon3 name='notebook' size={18}></Icon3>
                                </TouchableOpacity>
                            </NotebookIcon>
                        </ListContainer>
                    )
                }}
                keyExtractor={item => item.id}
            >
            </FlatListContainer>


        </View >
    )

}

export default ActivityList;
