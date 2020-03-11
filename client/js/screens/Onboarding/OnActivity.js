import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading } from '../../globalStyles';
import { Subheading, Background, Flex, BtnText, styles } from './styles';
import OnboardingTime from '../../assets/images/OnboardingTime';

const OnActivity = ({ navigation }) => {
    return (
        <Background>
            <Heading>Check your progress</Heading>
            <Subheading>Find out how well you are doing!</Subheading>
            <OnboardingTime style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => { navigation.popToTop(), navigation.navigate('Home') }}>
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