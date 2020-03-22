import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import moment from "moment";
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import ActivityList from '../../components/ActivityList/ActivityList';
import ActivityDisplay from '../../components/ActivityDisplay/ActivityDisplay';
import Mood from '../../components/Mood/Mood';
import {
    ButtonsContainer,
    PeriodButtons,
    PeriodText,
    ArrowsContainer,
    ArrowText,
    ActivityView,
    GraphDate
} from './styles'
import { theme, HeaderCont, Heading, styles } from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';


const SESSIONS_QUERY = gql`
  query Sessions($where: SessionWhereInput){
    sessions(where: $where, orderBy:timeStart_ASC) {
        id
        timeStart
        timeEnd
        locations {
            id
            name
        }
        mood
        date
        journal
    }
  }
`


const ActivityScreen = ({ focus, setFocus, navigation, period, showWeekly, setShowWeekly }) => {

    let start = focus.format('YYYY-MM-DD');
    console.log('start', start);
    let end = focus.clone().add(period, 'd').format('YYYY-MM-DD');
    console.log('end', end);

    const { loading, data, error, networkStatus } = useQuery(SESSIONS_QUERY, {
        variables: {
            where: {
                timeStart_gt: start, timeEnd_lt: end,
            }
        }
    });

    if (networkStatus === 4) return <Text>Refetching!</Text>
    if (loading) return <Text>Loading!</Text>;
    if (error) return <Text>Error!</Text>;

    return (
        <View>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIcon} />
                </TouchableOpacity>
                <Heading>Activity</Heading>
            </HeaderCont>
            <ButtonsContainer>

                <PeriodButtons onPress={() => {
                    setShowWeekly(false)

                }}>
                    <PeriodText>Daily</PeriodText>
                </PeriodButtons>

                <PeriodButtons onPress={() => {
                    setShowWeekly(true)
                }}>
                    <PeriodText>Weekly</PeriodText>
                </PeriodButtons>
            </ButtonsContainer>
            <ArrowsContainer>
                <TouchableOpacity onPress={() => {
                    setFocus(focus.clone().subtract(period, 'd'))
                }}
                >
                    <ArrowText>&lt;</ArrowText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocus(focus.clone().add(period, 'd'))
                }}
                >
                    <ArrowText>&gt;</ArrowText>
                </TouchableOpacity>
            </ArrowsContainer>
            {(!data.sessions || data.sessions.length === 0) && <GraphDate >
                No data for this day
            </GraphDate>}
            {(data.sessions.length > 0) &&
                <>
                    <ActivityChart data={data.sessions} focus={focus} weekly={showWeekly} />
                    <ActivityDisplay data={data.sessions} />
                    <ActivityList data={data.sessions} navigation={navigation} weekly={showWeekly} />
                </>
            }


        </View>
    );
};

export default ActivityScreen;