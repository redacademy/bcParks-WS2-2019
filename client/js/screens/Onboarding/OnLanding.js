import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { NoFlexHeaderCont, Heading, SubHeading } from '../../globalStyles';
import { LandingFlex, BtnText, styles } from './styles';
import OnboardingLanding from '../../assets/images/OnboardingLanding';
import LinearGradient from 'react-native-linear-gradient';

const OnLanding = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <NoFlexHeaderCont>
                <Heading>Welcome to PaRx</Heading>
            </NoFlexHeaderCont>
            <SubHeading>Connecting to nature is one of the most powerful ways to improve your health</SubHeading>
            <OnboardingLanding style={styles.imageLanding} />
            <LandingFlex>
                <TouchableOpacity onPress={() => navigation.push('OnLocation')}>
                    <BtnText>Next</BtnText>
                </TouchableOpacity>
            </LandingFlex>
        </LinearGradient>
    )
}

export default withNavigation(OnLanding);