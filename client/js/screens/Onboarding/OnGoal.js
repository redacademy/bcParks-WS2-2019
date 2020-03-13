import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText } from './styles';
import Goal from '../Goal/Goal';

const OnGoal = ({ navigation }) => {
    return (
        <Background>
            <Heading>Let's set a goal</Heading>
            <SubHeading>2 hours in nature each week, and at least 20mins each time is recommended. Of course, more the better! </SubHeading>
            <Goal />
            <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('OnEnd')}>
                    <BtnText>next slide</BtnText>
                </TouchableOpacity>
            </Flex>
        </Background>
    )
}

export default withNavigation(OnGoal);