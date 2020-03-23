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

const OnTime = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnLocation')}>
                    <FontAwesomeIcon icon={faChevronLeft} color={theme.primaryColor} size={30} style={styles.longTxtBackIcon} />
                </TouchableOpacity>
                <Heading>Track your green time</Heading>
            </HeaderCont>
            <SubHeading>When you get to a green space, just start your timer!</SubHeading>
            <OnboardingTime style={styles.imageTime} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <DotNav activeIndex={1} />
                <TouchableOpacity onPress={() => navigation.push('OnActivity')}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex>
        </LinearGradient>
    )
}

export default withNavigation(OnTime);