/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from 'src/themes';
import {metrics} from 'src/themes';
import {useAppTheme} from 'src/hooks';

interface DetailItemProps {
  title: string;
  children: React.ReactNode;
  // dateOfBirth: string;
  // address: string;
  // gender: string;
  // name: string;
  // major: string;
  // phone: string;
}

const DetailItem: React.FC<DetailItemProps> = ({title, children}) => {
  const {appTheme} = useAppTheme();
  return (
    <View>
      <View style={styles(appTheme).cardWrapper}>
        <Text style={styles(appTheme).title}>{title}</Text>
      </View>
      {/* {renderItemDetail('Họ tên', userData?.NameTeacher)}
      {renderItemDetail('Khoa quản lý', userData?.Name)}
      {renderItemDetail('Mã giảng viên', userCode)}
      {renderItemDetail('Số điện thoại', userData?.Phone)}
      {renderItemDetail('Quê quán', userData?.Address)}
      {renderItemDetail(
        'Ngày sinh',
        moment(userData?.CreatedDate).format('DD/MM/YYYY'),
      )}
      {renderItemDetail('Giới tính', userData?.Gender)}
      {renderItemDetail('Giới tính', userData?.Gender)}
      {renderItemDetail('Giới tính', userData?.Gender)}
      {renderItemDetail('Giới tính', userData?.Gender)}
      {renderItemDetail('Giới tính', userData?.Gender)}
      {renderItemDetail('Giới tính', userData?.Gender)} */}
      {children}
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    //   container: {
    //     marginHorizontal: metrics.space.s10,
    //     backgroundColor: colors.bgGray,
    //   },
    cardWrapper: {
      backgroundColor: colors.primary,
      marginVertical: metrics.space.s16,
      paddingVertical: metrics.space.s16,
      marginHorizontal: metrics.space.s10,
      // borderTopLeftRadius: metrics.space.s16,
      // borderTopRightRadius: metrics.space.s16,
    },
    title: {
      alignSelf: 'center',
      ...fonts.style.smallBold,
      color: theme?.appTheme?.textColor,
    },
    itemContainer: {
      marginTop: -15,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: metrics.space.s10,
      backgroundColor: colors.bgGray,
      paddingVertical: 20,
    },
    itemTextInfor: {
      marginLeft: metrics.space.s10,
      ...fonts.style.smallBold,
    },
    itemTextContent: {
      marginRight: metrics.space.s10,
      ...fonts.style.smallBold,
    },
  });
export default DetailItem;
