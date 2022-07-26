/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, metrics} from 'src/themes';

const Section = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Thông tin môn học</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: metrics.space.s16,
  },
});

export default Section;
