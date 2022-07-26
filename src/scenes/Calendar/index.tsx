/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  ListRenderItemInfo,
  View,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import {ItemCalendar, DayPress} from 'src/components/atoms';
import {colors} from 'src/themes';
import {useAuth} from 'src/hooks';
import {useCalendar} from 'src/hooks';
import {useFocusEffect} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {EmptyList} from 'src/components/molecules';
import moment from 'moment';
import {images} from 'src/themes';

const CalendarScreen = () => {
  const {teacherId} = useAuth();
  const {getCalendarList, getCalendarByDay, getCalendarInDay} = useCalendar();
  const [calendarList, setCalendarList] = useState([]);
  const [nextDay, setNextDay] = useState(
    moment(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)).format('YYYY-MM-DD'),
  );
  const [today, setToday] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState(moment(new Date()));

  const datesWhitelist = [
    {
      start: moment(),
      end: moment().add(365, 'days'), // total 4 days enabled
    },
  ];

  const onGetCalendarSuccess: Function = (response: any) => {
    let listCalendar = response?.filter(
      (item: any) => item?.status === 'Ca sáng',
    );
    setCalendarList(listCalendar);
    const now = moment(new Date()).format('YYYY-MM-DD');
    const startTime = moment(
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    ).format('YYYY-MM-DD');
    setToday(now);
    setNextDay(startTime);
    global.props.hideLoading();
  };
  const onGetCalendarError: Function = (message: any) => {
    global.props.hideLoading();
    // Handle error
    // Alert.alert('Có lỗi', message);
  };

  const onGetCalendarByDaySuccess: Function = (response: any) => {
    let listCalendar = response?.filter(
      (item: any) => item?.status === 'Ca sáng',
    );
    setCalendarList(listCalendar);
    global.props.hideLoading();
  };
  const onGetCalendarByDayError: Function = (response: any) => {
    global.props.hideLoading();
    if (response?.status === 400) {
      setCalendarList([]);
    }
    // Alert.alert('Có lỗi', response?.data);
  };

  const onGetCalendarInDaySuccess: Function = (response: any) => {
    let listCalendar = response?.filter(
      (item: any) => item?.status === 'Ca sáng',
    );
    setCalendarList(listCalendar);
    global.props.hideLoading();
  };
  const onGetCalendarInDayError: Function = (response: any) => {
    global.props.hideLoading();
    if (response?.status === 400) {
      setCalendarList([]);
    }
    // Alert.alert('Có lỗi', response?.data);
  };

  useFocusEffect(
    useCallback(() => {
      global.props.showLoading();
      getCalendarList(teacherId, onGetCalendarSuccess, onGetCalendarError);
    }, []),
  );

  const handlePreviousDay = () => {
    let endTime = today;
    let date = new Date(today);
    const startTime = moment(date.setDate(date.getDate() - 7)).format(
      'YYYY-MM-DD',
    );
    global.props.showLoading();
    getCalendarByDay(
      startTime,
      endTime,
      onGetCalendarByDaySuccess,
      onGetCalendarByDayError,
    );
    setToday(startTime);
    setNextDay(endTime);
    setSelectedDate(moment(new Date(endTime)));
  };

  const handleNextDay = () => {
    let startTime = nextDay;
    let date = new Date(nextDay);
    const endTime = moment(date.setDate(date.getDate() + 7)).format(
      'YYYY-MM-DD',
    );

    global.props.showLoading();
    getCalendarByDay(
      startTime,
      endTime,
      onGetCalendarByDaySuccess,
      onGetCalendarByDayError,
    );
    setToday(startTime);
    setNextDay(endTime);
    setSelectedDate(moment(new Date(endTime)));
  };

  interface ICalendarProps {
    status: string;
    date: string;
    subjectName: string;
    room: string;
    note: string;
  }
  const renderItem = ({item}: ListRenderItemInfo<ICalendarProps>) => {
    return (
      <ItemCalendar
        status={item?.status}
        date={item?.date}
        subjectName={item?.subjectName}
        room={item?.room}
        note={item?.note}
      />
    );
  };
  return (
    <View style={styles.safe}>
      <CalendarStrip
        calendarAnimation={{type: 'sequence', duration: 30}}
        daySelectionAnimation={{
          type: 'background',
          duration: 200,
        }}
        style={{
          height: 120,
          paddingTop: 20,
          paddingBottom: 15,
        }}
        calendarHeaderStyle={{color: '#000000'}}
        dateNumberStyle={{color: '#000000', paddingTop: 10}}
        dateNameStyle={{color: '#BBBBBB'}}
        highlightDateNumberStyle={{
          color: '#fff',
          backgroundColor: '#2E66E7',
          // marginTop: 10,
          height: 30,
          width: 30,
          textAlign: 'center',
          borderRadius: 15,
          overflow: 'hidden',
          paddingTop: 6,
          fontWeight: '400',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        highlightDateNameStyle={{color: '#2E66E7'}}
        disabledDateNameStyle={{color: 'grey'}}
        disabledDateNumberStyle={{color: 'grey', paddingTop: 10}}
        datesWhitelist={datesWhitelist}
        iconLeft={images.icArrowLeft}
        iconRightStyle={{transform: [{rotate: '-180deg'}]}}
        iconRight={images.icArrowLeft}
        iconContainer={{flex: 0.1}}
        // If you get this error => undefined is not an object (evaluating 'datesList[_this.state.numVisibleDays - 1].date')
        // temp: https://github.com/BugiDev/react-native-calendar-strip/issues/303#issuecomment-864510769
        // markedDates={markedDate}
        selectedDate={selectedDate}
        onDateSelected={date => {
          setSelectedDate(date);
          const dates = moment(date).format('YYYY-MM-DD');
          global.props.showLoading();
          getCalendarInDay(
            dates,
            onGetCalendarInDaySuccess,
            onGetCalendarInDayError,
          );
        }}
        scrollable={true}
        scrollToOnSetSelectedDate={true}
      />
      <FlatList
        data={calendarList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        bounces={true}
        scrollEventThrottle={16}
        ListEmptyComponent={<EmptyList isCalendar />}
      />

      <DayPress
        previousDay={today}
        nextDay={nextDay}
        onPressNext={() => {
          handleNextDay();
        }}
        onPressPrevious={() => {
          handlePreviousDay();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bgGray,
  },
});

export default CalendarScreen;
