import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/tabs';
import HomeScreen from '../screens/Home';
import ActivityScreen from '../screens/Activity';
import TimerScreen from '../screens/Timer';
import ExploreScreen from '../screens/Explore';
import MoodSelectScreen from '../screens/MoodSelect';
import TextInputScreen from '../screens/TextInput';
import GoalScreen from '../screens/Goal';


const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Goal" component={GoalScreen} />
    </HomeStack.Navigator>
)

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => (
    <ExploreStack.Navigator headerMode="none">
        <ExploreStack.Screen name="Explore" component={ExploreScreen} />
    </ExploreStack.Navigator>
)

const TimerStack = createStackNavigator()

const TimerStackScreen = () => (
    <TimerStack.Navigator headerMode="none">
        <TimerStack.Screen name="Timer" component={TimerScreen} />
        <TimerStack.Screen name="MoodSelect" component={MoodSelectScreen} />
        <TimerStack.Screen name="TextInput" component={TextInputScreen} />
    </TimerStack.Navigator>
)

const ActivityStack = createStackNavigator()

const ActivityStackScreen = () => (
    <ActivityStack.Navigator headerMode="none">
        <ActivityStack.Screen name="Activity" component={ActivityScreen} />
    </ActivityStack.Navigator>
)

const Tab = createBottomTabNavigator()

const NavTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    const { name } = route
                    if (name === 'HomeScreen') {
                        return <Home />
                    } else if (name === 'ExploreScreen') {
                        return <Explore />
                    } else if (name === 'TimerScreen') {
                        return <Timer />
                    } else if (name === 'ActivityScreen') {
                        return <Activity />
                    }
                },
            })}
            tabBarOptions={{
                showLabel: false,
                inactiveTintColor: '#fff',
                activeTintColor: '#fff',
                style: {
                    height: 95,
                    backgroundColor: '#fff',
                },
            }}
            initialRouteName="Register"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{ title: 'Home' }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStackScreen}
                options={{ title: 'Explore' }}
            />
            <Tab.Screen
                name="Timer"
                component={TimerStackScreen}
                options={{ title: 'Timer' }}
            />
            <Tab.Screen
                name="Activity"
                component={ActivityStackScreen}
                options={{ title: 'Activity' }}
            />
        </Tab.Navigator>
    )
}

const RootStack = createStackNavigator()

const Navigation = () => (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName="Tabs">
            <RootStack.Screen name="Tabs" component={NavTabs} />
            {/* <RootStack.Screen name="Onboarding" component={OnboardingStackScreen} /> */}
        </RootStack.Navigator>
    </NavigationContainer>
)
export default Navigation;