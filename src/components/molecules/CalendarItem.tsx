/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text} from 'react-native';

interface CalendarItemProps {
  nameSubject: string;
  nameTeacher: string;
  room: string;
  time: string;
}

const CalendarItem: React.FC<CalendarItemProps> = ({
  nameSubject,
  nameTeacher,
  room,
  time,
}) => {
  return (
    <View>
      <Text>{nameSubject}</Text>
    </View>
  );
};

export default CalendarItem;
