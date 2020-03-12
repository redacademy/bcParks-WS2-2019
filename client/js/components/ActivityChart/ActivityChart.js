import React, { Component, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import moment from "moment";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba( 190 ,87 ,62 , ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    decimalPlaces: 0
};

const ActivityChart = ({ data }) => {
    let displayData = (chartData) => {
        if (chartData) {
            const timeLabel = chartData.map(session => moment.utc(session.timeStart).format('HH:mm'));
            const duration = chartData.map(session => {
                let start = moment.utc(session.timeStart);
                let end = moment.utc(session.timeEnd);
                return end.diff(start, 'hours', true)
            })

            const barData = {
                labels: timeLabel,
                datasets: [
                    {
                        data: duration,
                    },
                ],
            };
            return barData;
        }
    }

    let transformedData = displayData(data);
    return (
        <ScrollView>
            <View >
                <Text>
                    {moment.utc(data[0].timeStart).format('YYYY-MM-DD')}
                </Text>
                <BarChart
                    // style={graphStyle}
                    data={transformedData}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    yAxisSuffix={'h'}
                    withInnerLines={false}
                    fromZero

                />

            </View>
        </ScrollView>
    )
};

export default ActivityChart;

