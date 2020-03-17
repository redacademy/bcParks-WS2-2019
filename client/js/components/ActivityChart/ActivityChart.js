import React, { Component, useState } from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import styles from './styles';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import moment from "moment";
import { GraphContainer } from './styles';
import { GraphDate } from '../../screens/Activity/styles'

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#DA6645",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#DA6645",
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba( 218, 102, 69, ${opacity})`,
    // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

    barPercentage: 0.7,
    barRadius: 7,
    decimalPlaces: 0,


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
            <GraphContainer >
                <GraphDate >
                    {moment.utc(data[0].timeStart).format('YYYY-MM-DD')}
                </GraphDate>
                <BarChart
                    // style={graphStyle}
                    data={transformedData}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    yAxisSuffix={'h'}
                    withInnerLines={false}
                    fromZero
                    showBarTops={false}

                />

            </GraphContainer>
        </ScrollView>
    )
};

export default ActivityChart;

