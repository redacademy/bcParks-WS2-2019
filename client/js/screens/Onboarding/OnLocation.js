import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading } from '../../globalStyles';
import { Background, Subheading, Flex, BtnText, styles } from './styles';
import OnboardingLocation from '../../assets/images/OnboardingLocation';

const OnLocation = ({ navigation }) => {
    return (
        <Background>
            <Heading>Find green space</Heading>
            <Subheading>You can search for green spaces near you</Subheading>
            <OnboardingLocation style={styles.image} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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