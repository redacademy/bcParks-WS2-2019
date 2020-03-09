import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading } from '../../globalStyles';
import { Subheading, Background, Flex, BtnText } from './styles';

const OnActivity = ({ navigation }) => {
    return (
        <Background>
            <Heading>Check your progress</Heading>
            <Subheading>Find out how well you are doing!</Subheading>
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('OnEnd')}>
                    <BtnText>next slide</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnActivity);