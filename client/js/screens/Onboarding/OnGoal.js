import React from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { Flex, BtnText, GoalFlex, styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Goal from '../Goal/Goal';
import DotNav from '../../components/DotNav/DotNav';
import LinearGradient from 'react-native-linear-gradient';

const OnGoal = ({ navigation, route }) => {
    const params = route.params
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnActivity')}>
                    <FontAwesomeIcon icon={faChevronLeft} color={theme.primaryColor} size={30} style={styles.shortTxtBackIcon} />
                </TouchableOpacity>
                <Heading>Let's set a goal</Heading>
            </HeaderCont>
            <SubHeading>2 hours in nature each week, and at least 20mins each time is recommended. Of course, more the better! </SubHeading>
            <Goal navigation={navigation} page={params.page} />
            {/*             <Flex>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <BtnText isSkip>skip</BtnText>
                </TouchableOpacity>
                <DotNav activeIndex={3} />
                <TouchableOpacity onPress={() => navigation.push('OnEnd')}>
                    <BtnText>next</BtnText>
                </TouchableOpacity>
            </Flex> */}
        </LinearGradient>
    )
}

export default withNavigation(OnGoal);