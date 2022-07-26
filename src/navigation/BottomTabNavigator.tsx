/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Icon} from 'src/components/atoms';
import HomeScreen from 'src/scenes/home';
import MyPageScreen from 'src/scenes/myPage';
import {colors, images} from 'src/themes';
import {
  HOME_SCREEN,
  MY_PAGE_SCREEN,
  SETTING_SCREEN,
  SUBJECT_SCREEN,
  REGISTER_SUBJECT_SCREEN,
  CHANGE_PASS_WORD,
  CLASS_INFO_SCREEN,
  REGISTERED_SCREEN,
  FACULTY_SCREEN,
} from './appRouters';
import SettingScreen from 'src/scenes/settings';
import SubjectScreen from '../scenes/subjects';
import RegisterSubjectScreen from '../scenes/RegisterSubject/index';
import TopTabBar from './TopTabNavigator';
import ChangePasswordScreen from '../scenes/ChangePassword/index';
import ClassInfoScreen from '../scenes/ClassInfo/index';
import RegisteredScreen from 'src/scenes/RegisteredDetail';
import FacultyScreen from '../scenes/Faculty/index';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MyPageStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={MY_PAGE_SCREEN} component={MyPageScreen} />
      <Stack.Screen
        name={REGISTER_SUBJECT_SCREEN}
        component={RegisterSubjectScreen}
      />
      <Stack.Screen name={SUBJECT_SCREEN} component={SubjectScreen} />
      <Stack.Screen name={CLASS_INFO_SCREEN} component={ClassInfoScreen} />
      <Stack.Screen name={REGISTERED_SCREEN} component={RegisteredScreen} />
      <Stack.Screen name={FACULTY_SCREEN} component={FacultyScreen} />
    </Stack.Navigator>
  );
};

// const CalendarStack = () => {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name={CALENDAR_SCREEN} component={CalendarScreen} />
//     </Stack.Navigator>
//   );
// };

const SettingStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SETTING_SCREEN} component={SettingScreen} />
      <Stack.Screen name={CHANGE_PASS_WORD} component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.white},
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused}: any) => (
            <Icon
              source={images.icHome}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{tintColor: focused ? colors.primary : null}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStack}
        options={{
          tabBarLabel: 'Giảng dạy',
          tabBarIcon: ({focused}: any) => (
            <Icon
              source={images.icTeach}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{tintColor: focused ? colors.primary : null}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TopTab"
        component={TopTabBar}
        options={{
          tabBarLabel: 'Lịch giảng dạy',
          tabBarIcon: ({focused}: any) => (
            <Icon
              source={images.icCalendar}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{tintColor: focused ? colors.primary : null}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({focused}: any) => (
            <Icon
              source={images.icSetting}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{tintColor: focused ? colors.primary : null}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
