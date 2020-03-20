import React from "react";
import { withNavigation } from 'react-navigation';
import { View } from "react-native";
import Explore from "./Explore";

const ExploreContainer = ({ navigation }) => {
    return (
        <View>
            <Explore navigation={navigation} />
        </View>
    )
}

export default withNavigation(ExploreContainer);