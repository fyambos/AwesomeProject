import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import AppScreen from './screens/AppScreen';
// Creating a native stack navigator​
//      npm install @react-navigation/native-stack
//      https://reactnavigation.org/docs/hello-react-navigation#creating-a-native-stack-navigator

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen} />
          <Stack.Screen name="AppScreen" options={{headerShown: false}} component={AppScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;   