import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import style from './style/global';
//function App () { } mais const App est plus facile a exporter
const App = () => {
  let clickCount=0;
  const onPressHandler = () => {
    clickCount+=1;
    console.log("cliqué sur le bouton, "+clickCount+" fois!");
  }

  return (<>
	<View>
          <Text style={style.text}>Hello World!</Text>
	</View>
	<View>
          <TouchableOpacity onPress={onPressHandler}>
              <Text>Cliquez Ici</Text>
          </TouchableOpacity>
  </View>
  </>);
};

export default App;
