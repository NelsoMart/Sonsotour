/**
 * @format
 */

import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

//! esto era para el ejemplo del login + spinner + axios
// import {AppRegistry} from 'react-native';
// import AppPruebaLogin from './AppPruebaLogin';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => AppPruebaLogin);
