import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { NoFlexHeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import OnboardingLanding from '../../assets/images/OnboardingLanding';

const OnLanding = ({ navigation }) => {
    return (
        <Background>
            <NoFlexHeaderCont>
                <Heading>Welcome to PaRx</Heading>
            </NoFlexHeaderCont>
            <SubHeading>Connecting to nature is one of the most powerful ways to improve your health</SubHeading>
            <OnboardingLanding style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('OnLocation')}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnLanding);