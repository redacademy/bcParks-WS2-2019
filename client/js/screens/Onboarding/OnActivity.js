import React from 'react';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native';
import {theme, HeaderCont, Heading, SubHeading} from '../../globalStyles';
import {Flex, BtnText, styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import OnboardingTime from '../../assets/images/OnboardingTime';
import DotNav from '../../components/DotNav/DotNav';
import BackButton from '../../components/BackButton';
const OnActivity = ({navigation}) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
      <BackButton to="OnTime" />
      <HeaderCont>
        <Heading>Check your progress</Heading>
      </HeaderCont>
      <SubHeading>Find out how well you are doing!</SubHeading>
      <OnboardingTime style={styles.image} />
      <Flex>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <BtnText isSkip>skip</BtnText>
        </TouchableOpacity>
        <DotNav activeIndex={2} />
        <TouchableOpacity
          onPress={() => navigation.push('OnGoal', {page: 'onBoarding'})}>
          <BtnText>next</BtnText>
        </TouchableOpacity>
      </Flex>
    </LinearGradient>
  );
};

export default withNavigation(OnActivity);
