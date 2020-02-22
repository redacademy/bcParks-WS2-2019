import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import ActivityScreen from '../screens/Activity';


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,

    },
    Activity: {
        screen: ActivityScreen,
    },
});

export default createAppContainer(AppNavigator);