/* eslint-disable simple-import-sort/imports */
import React, {FunctionComponent} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './styles';
import NavBar from 'src/components/molecules/NavBar';
import {DetailItem} from 'src/components/atoms';
import {useUser, useAuth, useAppTheme} from 'src/hooks';
import moment from 'moment';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {images} from 'src/themes';
import navigationService from 'src/services/navigationService';
import {EDIT_PROFILE, HOME} from 'src/navigation/appRouters';

const UserDetailScreen: FunctionComponent = () => {
  const {userData} = useUser();
  const {userCode} = useAuth();
  const {appTheme} = useAppTheme();

  const renderItemDetail = (infor: string, content: string) => {
    return (
      <View>
        <View style={styles(appTheme).itemContainer}>
          <Text style={styles(appTheme).itemTextInfo}>{infor}</Text>
          <Text style={styles(appTheme).itemTextContent}>{content}</Text>
        </View>
      </View>
    );
  };

  const renderRightView = () => {
    return (
      <TouchableOpacity>
        <Image source={images.icEdit} style={styles(appTheme).iconRight} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles(appTheme).container}>
      <StatusBar barStyle={appTheme?.appTheme?.statusBar} />
      <NavBar
        isShowLeftIcon
        title="Thông tin cá nhân"
        renderRightView={renderRightView()}
        onClickLeftIcon={() => navigationService.navigate(HOME)}
        onRightClick={() => navigationService.navigate(EDIT_PROFILE)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles(appTheme).scroll}>
        <DetailItem
          title="Thông tin giảng viên"
          children={
            <View>
              {renderItemDetail('Họ tên', userData?.NameTeacher)}
              {renderItemDetail('Khoa quản lý', userData?.Name)}
              {renderItemDetail('Mã giảng viên', userCode)}
              {renderItemDetail('Số điện thoại', userData?.Phone)}
              {renderItemDetail('Quê quán', userData?.Address)}
              {renderItemDetail(
                'Ngày sinh',
                moment(userData?.CreatedDate).format('DD/MM/YYYY'),
              )}
            </View>
          }
        />
        <DetailItem
          title="Ngân hàng"
          children={
            <View>
              {renderItemDetail('Tên ngân hàng', userData?.BankName)}
              {renderItemDetail('Số tài khoản', userData?.NumberBank)}
              {renderItemDetail('Chi nhánh', userData?.BranchName)}
            </View>
          }
        />
        <DetailItem
          title="Bảo hiểm"
          children={
            <View>
              {renderItemDetail('Số bảo hiểm y tế', userData?.NumberBhyt)}
              {renderItemDetail('Số bảo hiểm xã hội', userData?.NumberBhxh)}
              {renderItemDetail(
                'Hiệu lực bảo hiểm',
                moment(userData?.HieuLucBh).format('DD/MM/YYYY'),
              )}
            </View>
          }
        />
        <View style={styles(appTheme).footer} />
      </ScrollView>
    </View>
  );
};

export default UserDetailScreen;
