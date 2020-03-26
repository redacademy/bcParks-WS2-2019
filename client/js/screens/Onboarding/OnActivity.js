import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Flex, BtnText, styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import OnboardingTime from '../../assets/images/OnboardingTime';
import DotNav from '../../components/DotNav/DotNav';

const OnActivity = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnTime')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIconLongTxt} />
                </TouchableOpacity>
                <Heading>Check your progress</Heading>
            </HeaderCont>
            <SubHeading>Find out how well you are doing!</SubHeading>
            <OnboardingTime style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BtnText isSkip>back</BtnText>
                </TouchableOpacity>
                <DotNav activeIndex={2} />
                <TouchableOpacity onPress={() => navigation.push('OnGoal', { page: "onBoarding" })}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex>
        </LinearGradient>
    )
}

export default withNavigation(OnActivity);