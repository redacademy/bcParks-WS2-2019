import React, {useContext} from 'react';
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from 'react-native';
import { theme, HeaderCont, Heading, SubHeading } from '../../globalStyles';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Goal from '../Goal/Goal';
import AuthContext from "../../context/AuthContext";


const OnGoal = ({ navigation, route }) => {
    const params = route.params
    const { user } = useContext(AuthContext)
    return (
        <LinearGradient colors={['#FFFFFF', '#8CBE82']}>
            <HeaderCont>
                <TouchableOpacity onPress={() => navigation.goBack('OnActivity')}>
                    <Icon name='chevron-left' size={30} color={theme.bodyTextColor} style={styles.backIconShortTxt} />
                </TouchableOpacity>
                <Heading>Let's set a goal</Heading>
            </HeaderCont>
            <SubHeading>2 hours in nature each week, and at least 20mins each time is recommended. Of course, more the better! </SubHeading>
            <Goal navigation={navigation} page={params.page} user={user}/>
        </LinearGradient>
    )
}

export default withNavigation(OnGoal);