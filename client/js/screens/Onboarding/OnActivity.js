import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import OnboardingTime from '../../assets/images/OnboardingTime';
import DotNav from '../../components/DotNav/DotNav';

const OnActivity = ({ navigation }) => {
    return (
        <Background>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnTime')}>
                    <FontAwesomeIcon icon={faChevronLeft} color={theme.primaryColor} size={30} style={styles.longTxtBackIcon} />
                </TouchableOpacity>
                <Heading>Check your progress</Heading>
            </HeaderCont>
            <SubHeading>Find out how well you are doing!</SubHeading>
            <OnboardingTime style={styles.imageActivity} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <DotNav activeIndex={2} />
                <TouchableOpacity onPress={() => navigation.push('OnGoal'), {page: "onBoarding"}}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnActivity);