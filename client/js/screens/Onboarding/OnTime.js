import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import OnboardingTime from '../../assets/images/OnboardingTime';

const OnTime = ({ navigation }) => {
    return (
        <Background>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnLocation')}>
                    <FontAwesomeIcon icon={faChevronLeft} color={theme.primaryColor} size={30} style={styles.longTxtBackIcon} />
                </TouchableOpacity>
                <Heading>Track your green time</Heading>
            </HeaderCont>
            <SubHeading>When you get to a green space, just start your timer!</SubHeading>
            <OnboardingTime style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('OnActivity')}>
                    <BtnText>next slide</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnTime);