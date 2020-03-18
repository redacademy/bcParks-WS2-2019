// import { MoodVerySad } from './index';
import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ActivityList } from '../ActivityList/ActivityList'


const Mood = () => {
    const SESSIONS_QUERY = gql`
    {
        sessions {
            id
            mood
        }
    }
    `
    const { data } = useQuery(SESSIONS_QUERY);
    const moodsArray = data && data.sessions.map(session => session.mood);
    console.log(moodsArray);

    if (!moodsArray || !moodsArray.length) {
        return <Text>no moods</Text>
    }

    return moodsArray.map(number => {
        if (number > 0 && number <= 1) {
            return <Text>Very Sad</Text>
        } else if (number > 1 && number <= 2) {
            return <Text>Sad</Text>
        } else if (number > 2 && number <= 3) {
            return <Text>Neutral</Text>
        } else if (number > 3 && number <= 4) {
            return <Text>Happy</Text>
        } else if (number > 4 && number <= 5) {
            return <Text>Very Happy</Text>
        }
    })

    // let label = undefined;

    // moodsArray && moodsArray.map(() => {
    //     if (number > 0 && number <= 1) {
    //         label = 'Very Sad';
    //     } else if (number > 1 && number <= 2) {
    //         label = 'Sad';
    //     } else if (number > 2 && number <= 3) {
    //         label = 'Neutral';
    //     } else if (number > 3 && number <= 4) {
    //         label = 'Happy';
    //     } else if (number > 4 && number <= 5) {
    //         label = 'Very Happy';
    //     }

    // });

    // return (
    //     <Text>{label}</Text>
    // )

    // for (let i = 0; i < moodsArray.length; ++i) {
    //     let number = moodsArray[i];
    //     if (number > 0 && number <= 1) {
    //         return <Text>Very Sad</Text>
    //     } else if (number > 1 && number <= 2) {
    //         return <Text>Sad</Text>
    //     } else if (number > 2 && number <= 3) {
    //         return <Text>Neutral</Text>
    //     } else if (number > 3 && number <= 4) {
    //         return <Text>Happy</Text>
    //     } else if (number > 4 && number <= 5) {
    //         return <Text>Very Happy</Text>
    //     }
    // }


}

export default Mood;
