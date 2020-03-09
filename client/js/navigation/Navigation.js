import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/tabs';
import Explore from '../assets/images/Explore';
import Timer from '../assets/images/Timer';
import Activity from '../assets/images/Activity';
import HomeScreen from '../screens/Home';
import ActivityScreen from '../screens/Activity';
import TimerScreen from '../screens/Timer';
import ExploreScreen from '../screens/Explore';
import MoodSelectScreen from '../screens/MoodSelect';
import TextInputScreen from '../screens/TextInput';
import GoalScreen from '../screens/Goal';


const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Goal" component={GoalScreen} />
        </HomeStack.Navigator>
    );
}

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => {
    return (
        <ExploreStack.Navigator>
            <ExploreStack.Screen name="Explore" component={ExploreScreen} />
        </ExploreStack.Navigator>
    );
}

const TimerStack = createStackNavigator()

const TimerStackScreen = () => {
    return (
        <TimerStack.Navigator>
            <TimerStack.Screen name="Timer" component={TimerScreen} />
            <TimerStack.Screen name="MoodSelect" component={MoodSelectScreen} />
            <TimerStack.Screen name="TextInput" component={TextInputScreen} />
        </TimerStack.Navigator>
    );
}

const ActivityStack = createStackNavigator()

const ActivityStackScreen = () => {
    return (
        <ActivityStack.Navigator>
            <ActivityStack.Screen name="Activity" component={ActivityScreen} />
        </ActivityStack.Navigator>
    );
}

const Tab = createBottomTabNavigator()

const NavTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    const { name } = route
                    if (name === 'Home') {
                        return <Explore />
                    } else if (name === 'Explore') {
                        return <Explore />
                    } else if (name === 'Timer') {
                        return <Timer />
                    } else if (name === 'Activity') {
                        return <Activity />
                    }
                },
            })}
            tabBarOptions={{
                inactiveTintColor: 'grey',
                activeTintColor: 'grey',
                style: {
                    height: 95,
                    backgroundColor: '#fff',
                },
            }}
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