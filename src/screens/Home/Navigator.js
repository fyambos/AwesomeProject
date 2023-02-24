import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'
const Stack = createNativeStackNavigator();

const NavigationScreen = ({ route }) => {
    const { studentId } = route.params;
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{ studentId }} />
        </Stack.Navigator>
    );
};

export default NavigationScreen;