import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, PrimaryBtn, NextBtnCont } from '../../globalStyles';
import { Subheading, Background, styles } from './styles';
import OnboardingEnd from '../../assets/images/OnboardingEnd';

const OnEnd = ({ navigation }) => {
    return (
        <Background>
            <Heading>Let's get started!</Heading>
            <Subheading>You are all set. Start your journey!</Subheading>
            <OnboardingEnd style={styles.image} />
            <NextBtnCont>
                <TouchableOpacity onPress={() => { navigation.popToTop(), navigation.navigate('Home') }}>
                    <PrimaryBtn>start</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
        </Background>
    )
}

export default withNavigation(OnEnd);