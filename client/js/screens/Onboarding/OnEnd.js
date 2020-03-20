import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { NoFlexHeaderCont, Heading, SubHeading, PrimaryBtn } from '../../globalStyles';
import { Background, StartBtnCont, styles } from './styles';
import OnboardingEnd from '../../assets/images/OnboardingEnd';
import DotNav from '../../components/DotNav/DotNav';

const OnEnd = ({ navigation }) => {
    return (
        <Background>
            <NoFlexHeaderCont>
                <Heading>Let's get started!</Heading>
            </NoFlexHeaderCont>
            <SubHeading>You are all set. Start your journey!</SubHeading>
            <OnboardingEnd style={styles.image} />
            <StartBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <PrimaryBtn>start</PrimaryBtn>
                </TouchableOpacity>
                <DotNav />
            </StartBtnCont>
        </Background>
    )
}

export default withNavigation(OnEnd);