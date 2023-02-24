import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CompteNavigationScreen from './compte/Navigator';
import HomeNavigationScreen from './Home/Navigator'

const Tab = createBottomTabNavigator();

const AppScreen = ({ navigation, route }) => {
    const { studentId } = route.params;
    console.log("appscreen "+studentId)
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#0a4f5e',
                },
                tabBarActiveTintColor: '#fdc86b',
                tabBarInactiveTintColor: 'white',
            })} >
                <Tab.Screen name="HomeNavigation" component={ HomeNavigationScreen } initialParams={{ studentId }} options={{
                    headerShown: false,
                    title: 'Home'
                }} />
                <Tab.Screen name="CompteNavigation" component={ CompteNavigationScreen } options={{
                    headerShown: false,
                    title: 'Account'
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppScreen