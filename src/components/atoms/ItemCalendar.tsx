/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {metrics, fonts} from 'src/themes';
import {colors} from 'src/themes';
import moment from 'moment';

interface ItemCalendarProps {
  status: string;
  date: string;
  subjectName: string;
  room: string;
  note: string;
}

const ItemCalendar: React.FC<ItemCalendarProps> = ({
  status,
  date,
  subjectName,
  room,
  note,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {status === 'Ca sáng' ? 'Buổi sáng' : 'Buổi chiều'}
          </Text>
          <Text style={styles.time}>{moment(date).format('YYYY-MM-DD')}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.contentWrapper}>
          <Text style={styles.subject}>{subjectName}</Text>
          <Text style={styles.subjectInfo}>{note}</Text>
          <Text style={styles.subjectInfo}>{room}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    margin: 8,
    borderRadius: 10,
    shadowColor: colors.blackText,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: metrics.space.s8,
    marginVertical: metrics.space.s10,
    flex: 1,
  },
  container: {
    borderLeftWidth: metrics.space.s1,
    borderLeftColor: colors.black,
    // padding: metrics.space.s16,
    marginVertical: metrics.space.s5,
    marginHorizontal: metrics.space.s25,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: metrics.space.s10,
    marginHorizontal: metrics.space.s10,
    marginVertical: metrics.space.s10,
  },
  divider: {
    borderBottomColor: colors.black,
    borderBottomWidth: metrics.space.s1,
    marginHorizontal: -1,
  },
  contentWrapper: {
    marginVertical: metrics.space.s8,
    marginHorizontal: metrics.space.s10,
  },
  time: {
    ...fonts.style.mediumBold,
    color: colors.danger,
  },
  subject: {
    ...fonts.style.regularBold,
    color: colors.primary,
    lineHeight: metrics.space.s30,
  },
  subjectInfo: {
    ...fonts.style.mediumBold,
    lineHeight: metrics.space.s30,
  },
});

export default ItemCalendar;
