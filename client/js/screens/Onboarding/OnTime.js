import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Flex, BtnText, styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OnboardingTime from '../../assets/images/OnboardingTime';
import DotNav from '../../components/DotNav/DotNav';

const OnTime = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnLocation')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIconLongTxt} />
                </TouchableOpacity>
                <Heading>Track your green time</Heading>
            </HeaderCont>
            <SubHeading>When you get to a green space, just start your timer!</SubHeading>
            <OnboardingTime style={styles.imageTime} />
            <Flex>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BtnText isSkip>Back</BtnText>
                </TouchableOpacity>
                <DotNav activeIndex={1} />
                <TouchableOpacity onPress={() => navigation.push('OnActivity')}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex>
        </LinearGradient>
    )
}

export default withNavigation(OnTime);