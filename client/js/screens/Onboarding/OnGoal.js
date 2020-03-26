import React from 'react';
import {withNavigation} from 'react-navigation';
import {HeaderCont, Heading, SubHeading} from '../../globalStyles';
import LinearGradient from 'react-native-linear-gradient';
import Goal from '../Goal/Goal';
import BackButton from '../../components/BackButton';

const OnGoal = ({navigation, route}) => {
  const params = route.params;

  return (
    <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
      <BackButton to="OnActivity" />
      <HeaderCont>
        <Heading>Let's set a goal</Heading>
      </HeaderCont>
      <SubHeading>
        2 hours in nature each week, and at least 20mins each time is
        recommended. Of course, more the better!
      </SubHeading>
      <Goal navigation={navigation} page={params.page} />
    </LinearGradient>
  );
};

export default withNavigation(OnGoal);
