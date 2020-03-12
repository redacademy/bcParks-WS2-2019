import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading, PrimaryBtn, NextBtnCont } from '../../globalStyles';
import { Background, styles } from './styles';
import OnboardingEnd from '../../assets/images/OnboardingEnd';

const OnEnd = ({ navigation }) => {
    return (
        <Background>
            <Heading>Let's get started!</Heading>
            <SubHeading>You are all set. Start your journey!</SubHeading>
            <OnboardingEnd style={styles.image} />
            <NextBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <PrimaryBtn>start</PrimaryBtn>
                </TouchableOpacity>
            </NextBtnCont>
        </Background>
    )
}

export default withNavigation(OnEnd);