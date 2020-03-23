import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Flex, BtnText, styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OnboardingLocation from '../../assets/images/OnboardingLocation';
import DotNav from '../../components/DotNav/DotNav';

const OnLocation = ({ navigation }) => {
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnLanding')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIcon} />
                </TouchableOpacity>
                <Heading>Find green space</Heading>
            </HeaderCont>
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