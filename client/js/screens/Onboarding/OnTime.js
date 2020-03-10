import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading } from '../../globalStyles';
import { Subheading, Background, Flex, BtnText, styles } from './styles';
import OnboardingTime from '../../assets/images/OnboardingTime';

const OnTime = ({ navigation }) => {
    return (
        <Background>
            <Heading>Track your green time</Heading>
            <Subheading>When you get to a green space, just start your timer!</Subheading>
            <OnboardingTime style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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