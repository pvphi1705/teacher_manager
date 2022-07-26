/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import React, {useEffect} from 'react';
import {View, SafeAreaView, Text, Alert, StatusBar} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import {Input, Button} from 'src/components/atoms';
import styles from './styles';
import {useState} from 'react';
import {useUser, useAppTheme} from 'src/hooks';
import {useAuth} from 'src/hooks';
import navigationService from 'src/services/navigationService';
import {SETTING_SCREEN} from 'src/navigation/appRouters';

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {account, getAccount, handleChangePassword} = useUser();
  const {appTheme} = useAppTheme();
  const {userId} = useAuth();

  const onGetAccountSuccess = () => {
    global.props.hideLoading();
  };

  const onGetAccountError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Có lỗi');
  };

  useEffect(() => {
    getAccount(userId, onGetAccountSuccess, onGetAccountError);
  }, []);

  const handleCheckPassword = () => {
    if (oldPassword !== account?.password && oldPassword.length > 0) {
      Alert.alert('Thông báo', 'Mật khẩu bạn nhập vào chưa đúng');
    }
  };

  const handleCheckConfirmPassword = () => {
    if (newPassword.length > 0 && newPassword !== confirmPassword) {
      Alert.alert('Thông báo', 'Mật khẩu xác nhận không khớp');
    }
  };

  const onChangePasswordSuccess: Function = (response: any) => {
    if (response?.status === 204) {
      Alert.alert(
        'Thông báo',
        'Thay đổi thành công vui lòng đăng nhập lại để tiếp tục sử dụng!',
      );
      navigationService.navigate(SETTING_SCREEN);
    }
    global.props.hideLoading();
  };
  const onChangePasswordError: Function = (response: any) => {
    global.props.hideLoading();

    Alert.alert('Thông báo', 'Thay đổi thành công!');
    navigationService.navigate(SETTING_SCREEN);
    global.props.hideLoading();
  };

  const handleChange = () => {
    if (oldPassword === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập mật khẩu cũ');
    } else if (newPassword === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập mật khẩu mới');
    } else if (confirmPassword === '') {
      Alert.alert('Thông báo', 'Bạn chưa xác nhận mật khẩu mới');
    } else if (newPassword.length > 0 && newPassword !== confirmPassword) {
      Alert.alert('Thông báo', 'Mật khẩu xác nhận không khớp');
    } else {
      global.props.showLoading();
      handleChangePassword(
        account?.id,
        account?.name,
        account?.userName,
        confirmPassword,
        account?.groupId,
        account?.status,
        account?.phone,
        account?.email,
        account?.createdDate,
        account?.modifiedDate,
        account?.group,
        account?.events,
        onChangePasswordSuccess,
        onChangePasswordError,
      );
    }
  };

  return (
    <View style={styles(appTheme).container}>
      <StatusBar barStyle={appTheme?.appThem?.statusBar} />
      <NavBar isShowLeftIcon title="Cập nhật mật khẩu" />
      <View style={styles(appTheme).contentContainer}>
        <Text style={styles(appTheme).label}>Nhập mật khẩu cũ</Text>
        <Input
          secureTextEntry
          containerStyle={styles(appTheme).inputWrapper}
          inputContainerStyle={styles(appTheme).inputContainer}
          inputStyle={styles(appTheme).input}
          value={oldPassword}
          maxLength={6}
          onChangeText={value => {
            setOldPassword(value);
          }}
          onBlur={() => {
            handleCheckPassword();
          }}
        />
        <View style={styles(appTheme).divider} />
        <Text style={styles(appTheme).label1}>Nhập mật khẩu mới</Text>
        <Input
          secureTextEntry
          containerStyle={styles(appTheme).inputWrapper}
          inputContainerStyle={styles(appTheme).inputContainer}
          inputStyle={styles(appTheme).input}
          value={newPassword}
          maxLength={6}
          onChangeText={value => {
            setNewPassword(value);
          }}
          onBlur={() => {}}
        />
        <View style={styles(appTheme).divider} />
        <Text style={styles(appTheme).labelPassword}>Xác nhận mật khẩu</Text>
        <Input
          secureTextEntry
          containerStyle={styles(appTheme).inputWrapper}
          inputContainerStyle={styles(appTheme).inputContainer}
          inputStyle={styles(appTheme).input}
          maxLength={6}
          value={confirmPassword}
          onChangeText={value => {
            setConfirmPassword(value);
          }}
          onBlur={() => {
            handleCheckConfirmPassword();
          }}
        />
        <View style={styles(appTheme).divider} />
        <Button
          style={styles(appTheme).registerButton}
          title="Cập nhật"
          onPress={() => {
            handleChange();
          }}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
