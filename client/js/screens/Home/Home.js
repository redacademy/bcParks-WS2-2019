import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const QUERY_PROGRESS = gql`
    query {
        progress(where:{id:1}) {
            id
            duration
            completion
        }
    }
`;


const HomeScreen = ({ navigation }) => {
    const { loading, error, data } = useQuery(QUERY_PROGRESS);

    if (loading) {
        return (
            <Text>
                Loading
            </Text>
        )
    } else if (error) {
        return (
            <Text>
                Error
            </Text>
        )
    } else {
        return (
            <View>
                <Text>Home Screen</Text>
        <Text>{}</Text>
                <Button
                    title="Go to Activity"
                    onPress={() => navigation.navigate('Activity')}

                />
            </View>
        );
    }
}

export default withNavigation(HomeScreen);