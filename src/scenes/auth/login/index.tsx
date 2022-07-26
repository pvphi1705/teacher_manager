/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';
import _ from 'lodash';

import {Button, Input} from 'src/components/atoms';
import {makeLoginInSchema} from 'src/utils/schemas/auth';
import {useAuth} from '../../../hooks/index';
import images from '../../../themes/images';
import {styles} from './styles';
import navigationService from 'src/services/navigationService';
import {REGISTERED_SCREEN} from 'src/navigation/appRouters';

const LoginScreen = () => {
  const {values, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: {loginId: '', password: ''},
    validationSchema: makeLoginInSchema(),
    onSubmit: (data: any) => {
      handleLogin(data.loginId, data.password);
    },
  });

  const {login} = useAuth();

  const onLoginSuccess: Function = () => {
    global.props.hideLoading();
  };

  const onLoginError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error

    Alert.alert('Có lỗi', message);
  };

  const handleLogin = (loginId: String, password: String) => {
    if (_.isEmpty(loginId) || _.isEmpty(password)) {
      return;
    }
    global.props.showLoading();
    login(loginId, password, onLoginSuccess, onLoginError);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.keyboardAwareScrollView}>
        <View style={styles.content}>
          <Image
            source={images.icHaui}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.vnText}>Đại học công nghiệp Hà Nội</Text>
            <Text style={styles.enText}>HANOI University of Industry</Text>
          </View>
          <Text style={styles.label}>Mã giảng viên</Text>
          <Input
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={values.loginId}
            maxLength={6}
            onChangeText={handleChange('loginId')}
            onBlur={handleBlur('loginId')}
          />
          <View style={styles.divider} />
          <Text style={styles.labelPassword}>Mật khẩu</Text>
          <Input
            secureTextEntry
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={values.password}
            maxLength={6}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          <View style={styles.divider} />
          <Button
            style={styles.registerButton}
            title="Đăng nhập"
            onPress={() => {
              handleSubmit();
            }}
          />
          <TouchableOpacity
            onPress={() => navigationService.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
