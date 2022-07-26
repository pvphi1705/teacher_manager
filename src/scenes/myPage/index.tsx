// eslint-disable-next-line simple-import-sort/imports
import React, {FunctionComponent} from 'react';
import {StatusBar, View, Image} from 'react-native';

import styles from './styles';
import {IconButton, SettingItem} from 'src/components/atoms';
import NavBar from 'src/components/molecules/NavBar';
import navigationService from 'src/services/navigationService';
import {useAppTheme} from 'src/hooks';

import {
  SUBJECT_SCREEN,
  REGISTER_SUBJECT_SCREEN,
  CLASS_INFO_SCREEN,
  FACULTY_SCREEN,
} from 'src/navigation/appRouters';
import {images} from 'src/themes';

const MyPageScreen: FunctionComponent = () => {
  const {appTheme} = useAppTheme();
  return (
    <View style={styles(appTheme).container}>
      <StatusBar barStyle={appTheme?.appTheme?.statusBar} />
      <NavBar showDivider isShowLeftIcon title="Thông tin giảng dạy" />
      <SettingItem
        name="Đăng ký giảng dạy"
        image={images.icRegister}
        leftComponent={
          <Image source={images.icArrowLeft} style={styles(appTheme).arrow} />
        }
        onItemClick={() => {
          navigationService.navigate(REGISTER_SUBJECT_SCREEN);
        }}
      />

      <SettingItem
        name="Danh sách các môn học"
        image={images.icBook}
        leftComponent={
          <Image source={images.icArrowLeft} style={styles(appTheme).arrow} />
        }
        onItemClick={() => {
          navigationService.navigate(SUBJECT_SCREEN);
        }}
      />
      {/* <IconButton title="Danh sách học phần đã đăng ký dạy" /> */}
      <SettingItem
        name="Thông tin lớp đã đăng ký giảng dạy"
        image={images.icClass}
        leftComponent={
          <Image source={images.icArrowLeft} style={styles(appTheme).arrow} />
        }
        onItemClick={() => {
          navigationService.navigate(CLASS_INFO_SCREEN);
        }}
      />
      <SettingItem
        name="Thông tin khoa quản lý"
        image={images.icFaculty}
        leftComponent={
          <Image source={images.icArrowLeft} style={styles(appTheme).arrow} />
        }
        onItemClick={() => {
          navigationService.navigate(FACULTY_SCREEN);
        }}
      />
    </View>
  );
};

export default MyPageScreen;
