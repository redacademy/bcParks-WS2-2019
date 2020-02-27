import React, { useState } from 'react';
import { withNavigation } from "react-navigation";
import { View, Text, TouchableOpacity } from 'react-native';

const TimerScreen = ({ navigation }) => {

    const [startStop, setStartStop] = useState(true);

    startStopPress = () => {
        setStartStop(!startStop)
    }

    return (
        <View>
            <View>
                <Text>pic</Text>
            </View>
            <View>
                <Text>00:00:00</Text>
                <Text>Spending more time in nature contributes to a better sleep cycle and helps in lowering anxiety</Text>
                <TouchableOpacity onPress={this.startStopPress}>
                    {startStop ?
                        <Text>
                            Start Green Time
                        </Text> :
                        <Text>
                            Stop Green Time
                        </Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('MoodSelect')}>
                    <Text>00:00:00</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}

export default withNavigation(TimerScreen);