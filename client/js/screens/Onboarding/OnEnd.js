import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading, PrimaryBtn } from '../../globalStyles';
import { Background, StartBtnCont, styles } from './styles';
import OnboardingEnd from '../../assets/images/OnboardingEnd';

const OnEnd = ({ navigation }) => {
    return (
        <Background>
            <Heading>Let's get started!</Heading>
            <SubHeading>You are all set. Start your journey!</SubHeading>
            <OnboardingEnd style={styles.image} />
            <StartBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <PrimaryBtn>start</PrimaryBtn>
                </TouchableOpacity>
            </StartBtnCont>
        </Background>
    )
}

export default withNavigation(OnEnd);