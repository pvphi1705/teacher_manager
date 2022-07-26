/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {metrics, fonts} from 'src/themes';
import {TouchableOpacity} from 'react-native';
import {colors} from 'src/themes';
import {useAppTheme} from 'src/hooks';

interface CalendarTodayProps {
  subjectName: string;
  room: string;
  onPress: () => void;
}

const CalendarToday: React.FC<CalendarTodayProps> = ({
  subjectName,
  room,
  onPress,
}) => {
  const {appTheme} = useAppTheme();
  return (
    <View style={styles(appTheme).container}>
      <View style={styles(appTheme).titleContainer}>
        <Text style={styles(appTheme).title}>Lịch giảng dạy hôm nay</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles(appTheme).title}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles(appTheme).contentWrapper}>
        <Text style={styles(appTheme).subject}>{subjectName}</Text>
        <Text style={styles(appTheme).room}>{room}</Text>
      </View>
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      shadowColor: theme?.appTheme
        ? theme?.appTheme?.shadowColor
        : colors.blackText,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: metrics.space.s12,
      marginBottom: metrics.space.s12,
      backgroundColor: colors.primary,
      padding: metrics.space.s12,
      borderTopLeftRadius: metrics.space.s5,
      borderTopRightRadius: metrics.space.s5,
    },
    title: {
      ...fonts.style.mediumBold,
      color: colors.whiteText,
    },
    subject: {
      ...fonts.style.mediumBold,
      color: colors.primary,
      marginTop: metrics.space.sam8,
    },
    contentWrapper: {
      marginHorizontal: metrics.space.s12,
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
      marginTop: metrics.space.sam10,
      padding: metrics.space.s16,
    },
    room: {
      ...fonts.style.smallBold,
      marginTop: metrics.space.s8,
      color: theme?.appTheme?.textColor,
    },
  });

export default CalendarToday;
