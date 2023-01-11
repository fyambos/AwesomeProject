import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const style = StyleSheet.create({
    'text': {
        'color':'blue',
        'backgroundColor':'silver'
    }
})

//function App () { } mais const App est plus facile a exporter
const App = () => {

  return (
	<View>
          <Text style={style.text}>Hello World!</Text>
          <Text style={{
              'color': 'red',
              'backgroundColor': 'green'
          }}>Hello World Override</Text>
	</View>

  );
};

export default App;
