import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  StartStopCont,
  TimerDisplay,
  TimerContainer,
  InfoTextCont,
  InfoText,
  BtnCont,
} from './styles.js';
import {theme, PrimaryBtn} from '../../../../globalStyles';
import {gql} from 'apollo-boost';
import moment from 'moment';

const Query_Session = gql`
  query {
    session(where: {id: "ck7o67opa0j87094270k3z1np"}) {
      id
      timeStart
      timeEnd
      date
    }
  }
`;

const Timer = ({navigation}) => {
  const [startStop, setStartStop] = useState(true);
  const [startTime, setStartTime] = useState('');
  const [date, setDate] = useState('');

  const StopWatch = time => {
    const calculateTimeLeft = () => {
      const diff = +new Date() - time.time;

      let timeLeft = {};

      if (diff > 0) {
        timeLeft = {
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const [timer, setTimer] = useState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      let mounted = true;
      if (mounted) {
        setTimeout(() => {
          setTimer(calculateTimeLeft());
        }, 1000);
      }
    });

    const timerComponents = [];

    Object.keys(timer).forEach(interval => {
      if (interval === 'seconds') {
        timerComponents.push(
          <TimerDisplay>{addZero(timer[interval])}</TimerDisplay>,
        );
      } else {
        timerComponents.push(
          <TimerDisplay>{addZero(timer[interval])}:</TimerDisplay>,
        );
      }
    });

    return timerComponents;
  };

  const startTimer = () => {
    setStartStop(!startStop);
    setStartTime(moment().format());
    setDate(moment().format('YYYY-MM-DD'));
  };

  const stopTimer = () => {
    setStartStop(!startStop);
    const endTime = moment().format();
    navigation.push('MoodSelect', {startTime, endTime, date});
  };

  const addZero = num => (num <= 9 ? `0${num}` : num);
  return (
    <StartStopCont>
      <TimerContainer>
        {startStop ? (
          <TimerDisplay>00:00:00</TimerDisplay>
        ) : (
          <StopWatch time={parseInt(moment().format('x'))} />
        )}
      </TimerContainer>
      <InfoTextCont>
        <InfoText>
          Spending more time in nature contributes to a better sleep cycle and
          helps with lowering anxiety
        </InfoText>
      </InfoTextCont>
      <BtnCont>
        <TouchableOpacity
          onPress={() => {
            startStop ? startTimer() : stopTimer();
          }}>
          {startStop ? (
            <PrimaryBtn>Start Green Time</PrimaryBtn>
          ) : (
            <PrimaryBtn isStop theme={theme}>
              Stop Green Time
            </PrimaryBtn>
          )}
        </TouchableOpacity>
      </BtnCont>
    </StartStopCont>
  );
};

export default Timer;
