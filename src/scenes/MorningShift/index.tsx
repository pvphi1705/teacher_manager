/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import React, {useCallback} from 'react';
import {View, Text, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useCalendar, useAuth} from 'src/hooks';

const MorningShift = () => {
  const {teacherId} = useAuth();
  const {calendar, getCalendarList} = useCalendar();

  const onGetCalendarSuccess: Function = () => {
    global.props.hideLoading();
  };
  const onGetCalendarError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error
    Alert.alert('Có lỗi', message);
  };

  useFocusEffect(
    useCallback(() => {
      global.props.showLoading();
      getCalendarList(
        'Ca chiều',
        teacherId,
        onGetCalendarSuccess,
        onGetCalendarError,
      );
    }, []),
  );

  return (
    <View>
      <Text>morning</Text>
    </View>
  );
};

export default MorningShift;
