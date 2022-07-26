/* eslint-disable react-native/no-inline-styles */
/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CALENDAR_SCREEN, AFTERNOON_SHIFT_SCREEN} from './appRouters';
import {createStackNavigator} from '@react-navigation/stack';
import CalendarScreen from 'src/scenes/Calendar';
import AfternoonShiftScreen from 'src/scenes/AfternoonShift';
import NavBar from 'src/components/molecules/NavBar';

const TopTab = createMaterialTopTabNavigator();

const MorningStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={CALENDAR_SCREEN} component={CalendarScreen} />
    </Stack.Navigator>
  );
};

const AfternoonStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={AFTERNOON_SHIFT_SCREEN}
        component={AfternoonShiftScreen}
      />
    </Stack.Navigator>
  );
};

const TopTabNavigation = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#fff',
      }}>
      <NavBar isShowLeftIcon title="Thời khóa biểu" onTitleClick={() => {}} />

      <View
        style={{
          flex: 1,
        }}>
        <TopTab.Navigator
          initialRouteName={CALENDAR_SCREEN}
          tabBarOptions={{
            activeTintColor: '#ED1C24',
            inactiveTintColor: '#333333',
            indicatorStyle: {backgroundColor: '#ED1C24'},
            labelStyle: {
              fontSize: 14,
              fontWeight: '500',
              textAlign: 'center',
              textTransform: 'uppercase',
            },
            tabStyle: {
              paddingHorizontal: 7,
            },
          }}>
          <TopTab.Screen
            name="MorningShift"
            component={MorningStack}
            options={{
              tabBarLabel: 'Lịch buổi sáng',
            }}
          />
          <TopTab.Screen
            name="AfternoonShift"
            component={AfternoonStack}
            options={{tabBarLabel: 'Lịch buổi chiều'}}
          />
        </TopTab.Navigator>
      </View>
    </View>
  );
};

const TopTabBar = () => {
  return <TopTabNavigation />;
};

export default TopTabBar;
