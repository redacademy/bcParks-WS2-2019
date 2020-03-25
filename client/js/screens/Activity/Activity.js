import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import moment from 'moment-timezone';
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import ActivityList from '../../components/ActivityList/ActivityList';
import ActivityDisplay from '../../components/ActivityDisplay/ActivityDisplay';
import {
  ButtonsContainer,
  PeriodButtons,
  PeriodText,
  ArrowsContainer,
  ArrowText,
  GraphDate,
} from './styles';
import {HeaderCont, Heading} from '../../globalStyles';
import ProgressContext from '../../context/ProgressContext';
import BackButton from '../../components/BackButton';

const SESSIONS_QUERY = gql`
  query Sessions {
    sessions {
      timeStart
      timeEnd
      locations {
        id
        name
      }
      mood
      journal
    }
  }
`;

const ActivityScreen = ({
  focus,
  setFocus,
  navigation,
  period,
  showWeekly,
  setShowWeekly,
}) => {
  const {sample} = useContext(ProgressContext);
  const {loading, data, error, networkStatus} = useQuery(SESSIONS_QUERY);

  if (networkStatus === 4) return <Text>Refetching!</Text>;
  if (loading) return <Text>Loading!</Text>;
  if (error) return <Text>Error!</Text>;
  if (data) {
    let arr = sample;
    let newArr = [];

    if (!showWeekly) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].groupedDate === focus.clone().format('YYYY-MM-DD')) {
          newArr = arr[i].data;
          break;
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (
          +moment(arr[i].groupedDate) >= +focus.clone() &&
          +moment(arr[i].groupedDate) < +moment(focus.clone().add(period, 'd'))
        ) {
          for (let j = 0; j < arr[i].data.length; j++) {
            newArr.push(arr[i].data[j]);
          }
        }
      }
    }

    return (
      <View>
        <BackButton to="Home" />
        <HeaderCont>
          <Heading>Activity</Heading>
        </HeaderCont>
        <ButtonsContainer>
          <PeriodButtons
            showWeekly={!showWeekly}
            onPress={() => {
              setShowWeekly(!showWeekly);
            }}>
            <PeriodText showWeekly={!showWeekly}>Daily</PeriodText>
          </PeriodButtons>

          <PeriodButtons
            showWeekly={showWeekly}
            onPress={() => {
              setShowWeekly(!showWeekly);
            }}>
            <PeriodText showWeekly={showWeekly}>Weekly</PeriodText>
          </PeriodButtons>
        </ButtonsContainer>
        <ArrowsContainer>
          <TouchableOpacity
            onPress={() => {
              setFocus(focus.clone().subtract(period, 'd'));
            }}>
            <ArrowText>&lt;</ArrowText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFocus(focus.clone().add(period, 'd'));
            }}>
            <ArrowText>&gt;</ArrowText>
          </TouchableOpacity>
        </ArrowsContainer>
        {(!data.sessions || data.sessions.length === 0) && (
          <GraphDate>No data for this day</GraphDate>
        )}
        {data.sessions.length > 0 && (
          <>
            <ActivityChart data={newArr} focus={focus} weekly={showWeekly} />
            <ActivityDisplay data={newArr} />
            <ActivityList
              data={newArr}
              navigation={navigation}
              weekly={showWeekly}
            />
          </>
        )}
      </View>
    );
  }
};

export default ActivityScreen;
