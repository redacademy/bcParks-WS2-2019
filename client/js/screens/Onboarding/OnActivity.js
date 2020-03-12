import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import OnboardingTime from '../../assets/images/OnboardingTime';

const OnActivity = ({ navigation }) => {
    return (
        <Background>
            <Heading>Check your progress</Heading>
            <SubHeading>Find out how well you are doing!</SubHeading>
            <OnboardingTime style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('OnGoal')}>
                    <BtnText>next slide</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnActivity);