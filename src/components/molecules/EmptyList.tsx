/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

import {images, metrics} from 'src/themes';

interface EmptyListProps {
  isCalendar: boolean;
}

const EmptyList: React.FC<EmptyListProps> = ({isCalendar}) => {
  return (
    <View style={styles(isCalendar).container}>
      <Text>Danh sách trống!!!</Text>
      <Image source={images.icEmpty} style={styles(isCalendar).image} />
    </View>
  );
};

const styles = (isCalendar: boolean) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: isCalendar ? metrics.space.s200 : metrics.space.s240,
    },
    image: {
      width: metrics.space.s50,
      height: metrics.space.s50,
      resizeMode: 'contain',
    },
  });

export default EmptyList;
