import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import styles from './styles';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";

const barData = {
    labels: ['9AM', '2PM', '8PM'],
    datasets: [
        {
            data: [60, 90, 100],
        },
    ],
};

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    decimalPlaces: 0
};

const ActivityChart = ({ data }) => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <BarChart
                    // style={graphStyle}
                    data={barData}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    yAxisLabel={'Today'}
                    yAxisSuffix={'m'}
                    withInnerLines={false}
                    fromZero
                />
            </View>
        </ScrollView>
    )
};

export default ActivityChart;