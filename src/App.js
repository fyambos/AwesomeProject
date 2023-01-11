import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import style from './style/global';
import { useState } from 'react';

//function App () { } mais const App est plus facile a exporter
const App = () => {
  //useState pour raffraichir l'affichage
  const [count, setCount]= useState(0);

  const onPressHandler = () => {
    setCount(count+1);
    console.log("cliqué sur le bouton, "+count+" fois!");
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
  <View>
          <Text style={style.text}>{count}</Text>
	</View>
  </>);
};

export default App;
