import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Flex, BtnText, styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import OnboardingTime from '../../assets/images/OnboardingTime';
import DotNav from '../../components/DotNav/DotNav';
import LinearGradient from 'react-native-linear-gradient';

const OnActivity = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnTime')}>
                    <FontAwesomeIcon icon={faChevronLeft} color={theme.primaryColor} size={30} style={styles.longTxtBackIcon} />
                </TouchableOpacity>
                <Heading>Check your progress</Heading>
            </HeaderCont>
            <SubHeading>Find out how well you are doing!</SubHeading>
            <OnboardingTime style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
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