/* eslint-disable simple-import-sort/imports */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from 'src/hooks/useAuth';
import SplashScreen from 'src/scenes/splash';
import {navigationRef} from 'src/services/navigationService';
import UserDetailScreen from '../scenes/UserDetails/index';
import {colors} from '../themes';
import {
  AUTH_STACK,
  BOTTOM_TAB_STACK,
  USER_DETAIL_SCREEN,
  NOTED_SCREEN,
  ADD_NOTE_SCREEN,
  EDIT_NOTE_SCREEN,
  EDIT_PROFILE,
} from './appRouters';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import NotedScreen from 'src/scenes/Noted';
import AddNoteScreen from '../scenes/AddNote/index';
import EditNoteScreen from '../scenes/EditNote/index';
import EditProfileScreen from '../scenes/EditProfile/index';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSplash, setIsSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const {accessToken} = useAuth();

  useEffect(() => {
    (async () => {
      setIsAuthenticated(!!accessToken);
      setIsSplash(false);
      setIsLoading(false);
    })();
  }, [setIsAuthenticated, accessToken]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: colors.white},
        }}>
        {isLoading || isSplash ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : isAuthenticated ? (
          <>
            <Stack.Screen
              name={BOTTOM_TAB_STACK}
              component={BottomTabNavigator}
            />
            <Stack.Screen
              name={USER_DETAIL_SCREEN}
              component={UserDetailScreen}
            />
            <Stack.Screen name={EDIT_PROFILE} component={EditProfileScreen} />
            <Stack.Screen name={NOTED_SCREEN} component={NotedScreen} />
            <Stack.Screen name={ADD_NOTE_SCREEN} component={AddNoteScreen} />
            <Stack.Screen name={EDIT_NOTE_SCREEN} component={EditNoteScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name={AUTH_STACK} component={AuthNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
