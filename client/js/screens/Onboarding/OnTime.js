import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import OnboardingTime from '../../assets/images/OnboardingTime';

const OnTime = ({ navigation }) => {
    return (
        <Background>
            <Heading>Track your green time</Heading>
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