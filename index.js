/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

//point de d'entrée de l'application
AppRegistry.registerComponent(appName, () => App);
