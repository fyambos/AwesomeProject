import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import ChuckScreen from './screens/Chuck';

// Creating a native stack navigator​
//      npm install @react-navigation/native-stack
//      https://reactnavigation.org/docs/hello-react-navigation#creating-a-native-stack-navigator

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chuck" component={ChuckScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;   