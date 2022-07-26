import {AppRegistry, Text, TextInput} from 'react-native';

import {name as appName} from './app.json';
import App from './src/App';
// import storybook from './storybook'

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
