import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Background, Flex, BtnText, styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import OnboardingLocation from '../../assets/images/OnboardingLocation';
import DotNav from '../../components/DotNav/DotNav';

const OnLocation = ({ navigation }) => {
    return (
        <Background>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnLanding')}>
                    <FontAwesomeIcon icon={faChevronLeft} color={theme.primaryColor} size={30} style={styles.backIcon} />
                </TouchableOpacity>
                <Heading>Find green space</Heading>
            </HeaderCont>
            <SubHeading>You can search for green spaces near you</SubHeading>
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
        </Background>
    )
}

export default withNavigation(OnLocation);