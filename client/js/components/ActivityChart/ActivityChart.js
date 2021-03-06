import React from 'react';
import {
    ScrollView,
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import moment from "moment-timezone";
import { GraphContainer } from './styles';
import { GraphDate } from '../../screens/Activity/styles'

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: () => `#DA6645`,
    labelColor: (opacity = 0.6) => `rgba(65, 65, 63, ${opacity})`,
    barPercentage: 0.5,
    barRadius: 2,
    decimalPlaces: 1,
};

const ActivityChart = ({ data, focus, weekly }) => {
    const labels = weekly ?
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] :
        data.map(session => moment.tz(session.timeStart, "America/Los_Angeles").format('h A'));

    let duration;

    if (weekly) {
        let times = [0, 0, 0, 0, 0, 0, 0];
        data.map(session => {
            let start = moment.tz(session.timeStart, "America/Los_Angeles");
            let end = moment.tz(session.timeEnd, "America/Los_Angeles");
            let dayOfTheWeek = start.format('d');
            let time = end.diff(start, 'hours');
            times[dayOfTheWeek] = times[dayOfTheWeek] + time;
        })
        duration = times;

    } else {
        duration = data.map(session => {
            let start = moment.tz(session.timeStart, "America/Vancouver");
            let end = moment.tz(session.timeEnd, "America/Vancouver");
            return end.diff(start, 'hours', true)
        })
    }

    const graphData = {
        labels,
        datasets: [
            {
                data: duration,
            },
        ],
    };

    return (
        <ScrollView>
            <GraphContainer >
                <GraphDate >
                    {weekly ?
                        `${focus.format('YYYY-MM-DD')} - ${focus.clone().add(6, 'd').format('YYYY-MM-DD')}` :
                        focus.format('YYYY-MM-DD')}
                </GraphDate>
                <BarChart
                    data={graphData}
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

