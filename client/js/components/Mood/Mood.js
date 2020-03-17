// import { MoodVerySad } from './index';
import React from 'react';
import { Text, ListViewBase } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ActivityList } from '../ActivityList/ActivityList'


const Mood = (props) => {
    //     const SESSIONS_QUERY = gql`
    // {
    //     sessions {
    //         id
    //         mood
    //     }
    // }
    // `
    // const { data } = useQuery(SESSIONS_QUERY);
    // const moodsData = data && data.sessions.map(session => session.mood);

    // let moodDisplay = moodsData.map((number) => {
    //     if (number > 0 && number <= 1) {
    //         label = <Text>Very Sad</Text>;
    //     } else if (number > 1 && number <= 2) {
    //         label = <Text>Sad</Text>;
    //     } else if (number > 2 && number <= 3) {
    //         label = <Text>Neutral</Text>;
    //     } else if (number > 3 && number <= 4) {
    //         label = <Text>Happy</Text>;
    //     } else if (number > 4 && number <= 5) {
    //         label = <Text>Very Happy</Text>;
    //     }

    // });


    return (
        <Text>{Label}</Text>
    )
}

export default Mood;
