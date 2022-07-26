/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {images, colors, fonts} from 'src/themes';
import {TouchableOpacity} from 'react-native';
import {metrics} from 'src/themes';

interface DayPressProps {
  previousDay: string;
  nextDay: string;
  onPressPrevious: () => void;
  onPressNext: () => void;
}

const DayPress: React.FC<DayPressProps> = ({
  previousDay,
  nextDay,
  onPressPrevious,
  onPressNext,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left} onPress={onPressPrevious}>
        <Image source={images.icArrowLeft} style={styles.arrowLeft} />
      </TouchableOpacity>
      <View style={styles.date}>
        <Text style={styles.day}>{previousDay}</Text>
        <Text>{'=>'}</Text>
        <Text style={styles.day}>{nextDay}</Text>
      </View>
      <TouchableOpacity style={styles.right} onPress={onPressNext}>
        <Image source={images.icArrowLeft} style={styles.arrowLeft} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.bgGray,
    width: metrics.screenWidth * 0.9,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  arrowLeft: {
    width: 10,
    height: 10,
    tintColor: colors.white,
  },
  left: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  right: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    transform: [{rotate: '-180deg'}],
  },
  date: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  day: {
    marginHorizontal: 8,
    ...fonts.style.smallBold,
  },
});

export default DayPress;
