import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { NoFlexHeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Flex, BtnText, styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import OnboardingLocation from '../../assets/images/OnboardingLocation';
import DotNav from '../../components/DotNav/DotNav';

const OnLocation = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <NoFlexHeaderCont>
                <Heading>Find green space</Heading>
            </NoFlexHeaderCont>
            <SubHeading>Search for green spaces near you!</SubHeading>
            <OnboardingLocation style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <DotNav activeIndex={0} />
                <TouchableOpacity onPress={() => navigation.push('OnTime')}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex>
        </LinearGradient>
    )
}

export default withNavigation(OnLocation);