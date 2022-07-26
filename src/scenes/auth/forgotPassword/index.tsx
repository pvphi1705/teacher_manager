/* eslint-disable simple-import-sort/imports */
import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import NavBar from 'src/components/molecules/NavBar';
import {Button, Input} from 'src/components/atoms';
import {useUser} from 'src/hooks';
import {Alert} from 'react-native';
import navigationService from 'src/services/navigationService';

const ForgotPasswordScreen: FunctionComponent = () => {
  const [teacherCode, setTeacherCode] = React.useState('');
  const {forgotPassword} = useUser();

  const onForgotPasswordSuccess = () => {
    global.props.hideLoading();
    Alert.alert(
      'Thông báo',
      'Mật khẩu đã được gửi về tài khoản Email! Vui lòng kiểm tra hòm thư của bạn',
    );
    navigationService.navigate('LoginScreen');
  };

  const onForgotPasswordError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Vui lòng kiểm tra mã giảng viên!');
  };

  const handleForgotPassword = () => {
    global.props.showLoading();
    forgotPassword(teacherCode, onForgotPasswordSuccess, onForgotPasswordError);
  };
  return (
    <View style={styles.container}>
      <NavBar title="Quên mật khẩu" />
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.keyboardAwareScrollView}>
        <View style={styles.content}>
          <Text style={styles.label}>Mã giảng viên</Text>
          <Input
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={teacherCode}
            maxLength={6}
            onChangeText={value => setTeacherCode(value)}
          />
          <View style={styles.divider} />
          <Button
            style={styles.registerButton}
            title="Lấy mật khẩu"
            onPress={() => {
              handleForgotPassword();
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;
