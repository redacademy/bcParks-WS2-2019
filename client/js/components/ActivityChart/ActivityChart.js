import React, { Component, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
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
        if (chartData !== false) {
            const timeLabel = chartData.graphLabels.sessions ?
                (chartData.graphLabels.sessions.map(session => moment.utc(session.timeStart).format('HH:mm'))) :
                chartData.graphLabels.progresses.map(progress => moment.utc(progress.date).format('dd'));
            const duration = chartData.graphValues.progresses ?
                (chartData.graphValues.progresses.map(progress => progress.duration)) :
                (chartData.graphValues.sessions.map(session => {
                    let start = moment.utc(session.timeStart);
                    let end = moment.utc(session.timeEnd);
                    return end.diff(start, 'hours', true)
                }));
            console.log("duration", duration)


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
    console.log('data graphvalues', data.graphValues.sessions)
    return (
        <ScrollView>
            <View >
                <BarChart
                    // style={graphStyle}
                    data={transformedData}
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

