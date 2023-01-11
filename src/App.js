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

import style from './style/global';
//function App () { } mais const App est plus facile a exporter
const App = () => {

  return (
	<View>
          <Text style={style.text}>Hello World!</Text>

	</View>

  );
};

export default App;
