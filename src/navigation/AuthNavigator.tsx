/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from 'src/scenes/auth/login';
import ForgotPasswordScreen from 'src/scenes/auth/forgotPassword';
import {LOGIN_SCREEN, FORGOT_PASSWORD_SCREEN} from './appRouters';

const MainStack = createStackNavigator();

const AuthStack = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    <MainStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <MainStack.Screen
      name={FORGOT_PASSWORD_SCREEN}
      component={ForgotPasswordScreen}
    />
  </MainStack.Navigator>
);

export default AuthStack;
