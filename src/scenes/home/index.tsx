/* eslint-disable simple-import-sort/imports */
import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Alert, StatusBar} from 'react-native';
import moment from 'moment';

import {HomeItem, Card, CalendarToday} from 'src/components/atoms';
import {images} from 'src/themes';
import styles from './styles';
import NavBar from 'src/components/molecules/NavBar';
import {useUser} from 'src/hooks';
import {useAuth} from 'src/hooks/useAuth';
import navigationService from 'src/services/navigationService';
import {useAppTheme, useCalendar} from 'src/hooks';

import {USER_DETAIL_SCREEN, NOTED_SCREEN} from 'src/navigation/appRouters';

const HomeScreen: FunctionComponent = () => {
  const {userId, userCode} = useAuth();
  const {userData, getListTeacher} = useUser();
  const {calendarInDay, getCalendarInDay} = useCalendar();
  const {appTheme} = useAppTheme();
  const [visibleCalendarToday, setVisibleCalendarToday] = useState(false);
  let today = moment(new Date()).format('YYYY-MM-DD');

  const onGetListTeacherSuccess: Function = () => {
    global.props.hideLoading();
  };

  const onGetListTeacherError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error
    Alert.alert('Có lỗi', message);
  };

  const onGetCalendarInDaySuccess: Function = (response: any) => {
    console.log('response: ', response);
    global.props.hideLoading();
  };

  const onGetCalendarInDayError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error
    Alert.alert('Có lỗi', message);
  };

  const handleGetListTeacher = () => {
    getListTeacher(userId, onGetListTeacherSuccess, onGetListTeacherError);
  };
  const handleGetCalendarToday = () => {
    getCalendarInDay(today, onGetCalendarInDaySuccess, onGetCalendarInDayError);
  };

  useEffect(() => {
    global.props.showLoading();
    handleGetListTeacher();
    // handleGetCalendarToday();
    setVisibleCalendarToday(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles(appTheme).container}>
      <StatusBar barStyle={appTheme?.appTheme?.statusBar} />
      <NavBar
        title={`Xin chào, ${userData?.NameTeacher} `}
        isShowLeftIcon={false}
      />
      <Card
        name={userData?.NameTeacher}
        faculty={userData?.Name}
        userCode={userCode}
        phone={userData?.Phone}
      />
      {/* {visibleCalendarToday && (
        <CalendarToday
          subjectName={
            calendarInDay.length > 0
              ? calendarInDay[0]?.subjectName
              : 'Không có lịch'
          }
          room={calendarInDay.length > 0 ? calendarInDay[0]?.room : ''}
          onPress={() => setVisibleCalendarToday(false)}
        />
      )} */}
      <View style={styles(appTheme).itemHomeContainer}>
        <View style={styles(appTheme).homeItemWrapper}>
          <HomeItem
            label={'Ghi chú'}
            action={() => {
              navigationService.navigate(NOTED_SCREEN);
            }}
            image={images.icStudent}
          />
          <HomeItem
            label={'Giảng dạy'}
            action={() => navigationService.navigate('MyPageScreen')}
            image={images.teach}
          />
        </View>
        <View style={styles(appTheme).homeItemWrapper}>
          <HomeItem
            label={'Lịch giảng dạy'}
            action={() => navigationService.navigate('TopTab')}
            image={images.icCalendar}
          />
          <HomeItem
            label={'Cá nhân'}
            action={() => navigationService.navigate(USER_DETAIL_SCREEN)}
            image={images.icAccount}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
