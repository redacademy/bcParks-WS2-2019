import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { NoFlexHeaderCont, Heading, SubHeading, PrimaryBtn } from '../../globalStyles';
import { StartBtnCont, BottomCont, styles } from './styles';
import OnboardingEnd from '../../assets/images/OnboardingEnd';
import DotNav from '../../components/DotNav/DotNav';
import LinearGradient from 'react-native-linear-gradient';

const OnEnd = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <NoFlexHeaderCont>
                <Heading>Let's get started!</Heading>
            </NoFlexHeaderCont>
            <SubHeading>You are all set. Start your journey!</SubHeading>
            <OnboardingEnd style={styles.image} />
            <StartBtnCont>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <PrimaryBtn>start</PrimaryBtn>
                </TouchableOpacity>
                <BottomCont>
                    <DotNav activeIndex={4} />
                </BottomCont>
            </StartBtnCont>
        </LinearGradient>
    )
}

export default withNavigation(OnEnd);