import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import OnboardingLanding from '../../assets/images/OnboardingLanding';

const OnLanding = ({ navigation }) => {
    return (
        <Background>
            <Heading>Welcome to PaRx</Heading>
            <SubHeading>Connecting to nature is one of the most powerful ways to improve your health</SubHeading>
            <OnboardingLanding style={styles.imageLanding} />
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