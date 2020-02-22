import React from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';


const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Activity"
                onPress={() => navigation.navigate('Activity')}

            />
        </View>
    );
}

export default withNavigation(HomeScreen);