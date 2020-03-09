import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationLayout from "./NavigationLayout";

export default createAppContainer(
    createStackNavigator(
        {
            Layout: NavigationLayout
        },
        {
            mode: 'modal',
            headerMode: 'none',
        }
    ))