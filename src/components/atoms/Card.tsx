/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {metrics, colors, images, fonts} from 'src/themes';
import {scale} from '../../themes/mixins';
import {useAppTheme} from 'src/hooks';

interface CardProps {
  name: string;
  faculty: string;
  userCode: string;
  phone: string;
}

const Card: React.FC<CardProps> = ({name, faculty, userCode, phone}) => {
  const {appTheme} = useAppTheme();
  return (
    <View style={styles(appTheme).container}>
      <TouchableOpacity>
        <View style={styles(appTheme).contentWrapper}>
          <View>
            <Image
              source={images.icHaui}
              style={styles(appTheme).imageProfile}
            />
          </View>
          <View style={styles(appTheme).cardInfoWrapper}>
            <View>
              <Text style={styles(appTheme).textInfo}>Họ tên</Text>
              <Text style={styles(appTheme).textInfo}>Khoa quản lý</Text>
              <Text style={styles(appTheme).textInfo}>Mã giảng viên</Text>
              <Text style={styles(appTheme).textInfo}>Số điện thoại</Text>
            </View>
            <View style={styles(appTheme).userInfo}>
              <Text style={styles(appTheme).textInfo}>{name}</Text>
              <Text style={styles(appTheme).textInfo}>{faculty}</Text>
              <Text style={styles(appTheme).textInfo}>{userCode}</Text>
              <Text style={styles(appTheme).textInfo}>{phone}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginBottom: scale(35),
      borderRadius: 10,
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
      paddingVertical: metrics.radius.r20,
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
      marginTop: scale(35),
      marginHorizontal: metrics.space.s12,
    },
    cardInfoWrapper: {
      flexDirection: 'row',
    },
    userInfo: {},
    textInfo: {
      fontSize: fonts.size.medium,
      fontWeight: '500',
      marginHorizontal: 8,
      color: theme?.appTheme?.textColor,
    },
    contentWrapper: {
      flexDirection: 'row',
    },
    imageProfile: {
      width: 70,
      height: 70,
      alignSelf: 'center',
      marginHorizontal: 8,
    },
  });

export default Card;
