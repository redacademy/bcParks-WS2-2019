import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

const TextInputScreen = ({ navigation }) => {

    return (
        <View>
            <View>
                <Text>Write about your experience on Green Time</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5} />
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.popToTop()
                    navigation.navigate('Home')
                }}>
                    <Text>done</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.popToTop()
                    navigation.navigate('Home')
                }}>
                    <Text>skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default withNavigation(TextInputScreen);