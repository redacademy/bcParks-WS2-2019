import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading } from '../../globalStyles';
import { Background, Subheading, Flex, BtnText } from './styles';

const OnLanding = ({ navigation }) => {
    return (
        <Background>
            <Heading>Welcome to PaRx</Heading>
            <Subheading>Connecting to nature is one of the most powerful ways to improve your health</Subheading>
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('OnLocation')}>
                    <BtnText>next slide</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnLanding);