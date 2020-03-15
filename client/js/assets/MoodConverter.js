// import { MoodVerySad } from './index';
import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const SESSIONS_QUERY = gql`
{
    sessions {
        id
        mood
    }
}
`
const MoodConverter = () => {
    const { data } = useQuery(SESSIONS_QUERY);
    const moodsData = data && data.sessions.map(session => session.mood);
    let mood;
    if (data) {
        console.log('mood num', moodsData)
        for (let i = 0; i <= moodsData.length; i++) {
            let number = moodsData[i];
            // console.log('number', number)
            if (number > 0 && number <= 1) {
                mood = <Text>Very Sad</Text>;
            } else if (number > 1 && number <= 2) {
                mood = <Text>Sad</Text>;
            } else if (number > 2 && number <= 3) {
                mood = <Text>Neutral</Text>;
            } else if (number > 3 && number <= 4) {
                mood = <Text>Happy</Text>;
            } else if (number > 4 && number <= 5) {
                mood = <Text>Very Happy</Text>;
            }
        }
    }
    return mood;
}

export default MoodConverter;
