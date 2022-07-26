/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts, metrics} from 'src/themes';

interface SubjectDetailProps {
  credit: number;
  typeStudy: string;
  name: string;
  detail?: React.ReactNode;
}

const SubjectDetail: React.FC<SubjectDetailProps> = ({
  credit,
  typeStudy,
  name,
  detail,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textContent}>Tên môn học</Text>
          <Text style={styles.textContent}>Hình thức học</Text>
          <Text style={styles.textContent}>Số tín chỉ</Text>
        </View>
        <View>
          <Text style={styles.textContent}>{name}</Text>
          <Text style={styles.textContent}>{typeStudy}</Text>
          <Text style={styles.textCredit}>{credit}</Text>
        </View>
      </View>
      {detail}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.space.s10,
    paddingVertical: metrics.space.s10,
    marginHorizontal: metrics.space.s16,
    // borderBottomLeftRadius: metrics.radius.r10,
    // borderBottomRightRadius: metrics.radius.r10,
    marginTop: -15,
  },
  textContent: {
    ...fonts.style.smallBold,
  },
  textCredit: {
    ...fonts.style.smallBold,
    color: colors.danger,
  },
  wrapper: {
    backgroundColor: colors.bgGray,
  },
});

export default SubjectDetail;
