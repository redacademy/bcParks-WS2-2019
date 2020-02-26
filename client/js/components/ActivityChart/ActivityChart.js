import React, { Component, useState } from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import styles from './styles';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

// const barData = {
//     labels: ['9AM', '2PM', '8PM'],
//     datasets: [
//         {
//             data: [60, 90, 100],
//         },
//     ],
// };

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba( 190 ,87 ,62 , ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    decimalPlaces: 0
};

const ActivityChart = ({ data }) => {

    const [graphData, setGraphData] = useState({

        labels: ['9AM', '2PM', '8PM'],
        datasets: [
            {
                data: [60, 90, 100],
            },
        ],
    })



    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                    setGraphData({
                        labels: ['M', 'T', 'W', "T", "F", "S", "S"],
                        datasets: [
                            {
                                data: [60, 90, 100, 90, 60, 50, 20],
                            },
                        ],
                    })
                }}><Text>Weekly</Text></TouchableOpacity>
                <BarChart
                    // style={graphStyle}
                    data={graphData}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    yAxisSuffix={'m'}
                    withInnerLines={false}
                    fromZero
                />

            </View>
        </ScrollView>
    )
};

export default ActivityChart;