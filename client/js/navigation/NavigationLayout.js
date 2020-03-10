import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import ActivityScreen from '../screens/Activity';
import TimerScreen from '../screens/Timer';
import ExploreScreen from '../screens/Explore';
import MoodSelectScreen from '../screens/MoodSelect';
import TextInputScreen from '../screens/TextInput';
import GoalScreen from '../screens/Goal';

import OnLandingScreen from '../screens/Onboarding/OnLanding';
import OnLocationScreen from '../screens/Onboarding/OnLocation';
import OnTimeScreen from '../screens/Onboarding/OnTime';
import OnActivityScreen from '../screens/Onboarding/OnActivity';
import OnGoalScreen from '../screens/Onboarding/OnGoal';
import OnEndScreen from '../screens/Onboarding/OnEnd';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Goal: GoalScreen
});
const ActivityStack = createStackNavigator({
    Activity: ActivityScreen
});
const TimerStack = createStackNavigator({
    Timer: TimerScreen,
    MoodSelect: MoodSelectScreen,
    TextInput: TextInputScreen
});
const ExploreStack = createStackNavigator({
    Explore: ExploreScreen
});
const OnboardingStack = createStackNavigator({
    OnLanding: OnLandingScreen,
    OnLocation: OnLocationScreen,
    OnTime: OnTimeScreen,
    OnActivity: OnActivityScreen,
    OnGoal: OnGoalScreen,
    OnEnd: OnEndScreen
});


const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Activity: ActivityStack,
        Timer: TimerStack,
        Explore: ExploreStack,
        Onboarding: OnboardingStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({

        }),
        tabBarOptions: {
            activeTintColor: '#49773A',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 14,
                fontFamily: 'Comfortaa-Regular',

            },
            style: {
                backgroundColor: "#fff",
                height: 60,
                paddingVertical: 5
            }
        },
    }
)

export default TabNavigator;