import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import OnboardingLocation from '../../assets/images/OnboardingLocation';

const OnLocation = ({ navigation }) => {
    return (
        <Background>
            <Heading>Find green space</Heading>
            <SubHeading>You can search for green spaces near you</SubHeading>
            <OnboardingLocation style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('OnTime')}>
                    <BtnText>next slide</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnLocation);