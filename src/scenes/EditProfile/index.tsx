/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import {Input, Button} from 'src/components/atoms';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import {useUser, useAuth} from 'src/hooks';
import {useEffect} from 'react';
import moment from 'moment';
import {Alert} from 'react-native';
import navigationService from 'src/services/navigationService';
import {USER_DETAIL_SCREEN} from 'src/navigation/appRouters';

const EditProfileScreen = () => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const {userData, updateTeacherInfo, getListTeacher} = useUser();
  const {userId} = useAuth();

  useEffect(() => {
    setPhone(userData?.Phone);
    setAddress(userData?.Address);
    setDate(moment(new Date(userData?.DateOfBirth)).format('YYYY-MM-DD'));
    setBankName(userData?.BankName);
    setBankNumber(userData?.NumberBank);
    setBankBranch(userData?.BranchName);
  }, []);

  const onGetListTeacherSuccess: Function = () => {
    global.props.hideLoading();
    navigationService.navigate(USER_DETAIL_SCREEN);
  };

  const onGetListTeacherError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error
    Alert.alert('Có lỗi', message);
  };
  const handleGetListTeacher = () => {
    getListTeacher(userId, onGetListTeacherSuccess, onGetListTeacherError);
  };

  const onUpdateSuccess = () => {
    global.props.hideLoading();
  };

  const onUpdateError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Cập nhật thành công');
    handleGetListTeacher();
  };

  const handleUpdateTeacherInfo = () => {
    global.props.showLoading();
    updateTeacherInfo(
      userData?.Id,
      userData?.NameTeacher,
      phone,
      address,
      date,
      '',
      userData?.Gender,
      userData?.IsDelete,
      userData?.ModifiedDate,
      userData?.CreatedDate,
      userData?.Status,
      userData?.MajorId,
      userData?.UserId,
      bankName,
      bankNumber,
      bankBranch,
      userData?.NumberBhxh,
      userData?.NumberBhyt,
      userData?.HieuLucBh,
      null,
      [],
      [],
      onUpdateSuccess,
      onUpdateError,
    );
  };
  return (
    <View>
      <NavBar isShowLeftIcon title="Chỉnh sửa thông tin" />
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.keyboardAwareScrollView}>
        <Text style={styles.label}>Số điện thoại</Text>
        <Input
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={value => setPhone(value)}
          value={phone}
        />
        <View style={styles.divider} />

        <Text style={styles.labelPassword}>Quê quán</Text>
        <Input
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={value => setAddress(value)}
          value={address}
        />
        <View style={styles.divider} />
        <Text style={styles.label1}>Ngày sinh</Text>
        <Input
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={value => setDate(value)}
          value={date}
        />
        <View style={styles.divider} />
        <Text style={styles.label1}>Tên ngân hàng</Text>
        <Input
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={value => setBankName(value)}
          value={bankName}
        />
        <View style={styles.divider} />
        <Text style={styles.label1}>Số tài khoản</Text>
        <Input
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={value => setBankNumber(value)}
          value={bankNumber}
        />
        <View style={styles.divider} />
        <Text style={styles.label1}>Chi nhánh</Text>
        <Input
          containerStyle={styles.inputWrapper}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={value => setBankBranch(value)}
          value={bankBranch}
        />
        <View style={styles.divider} />
        <Button
          style={styles.registerButton}
          title="Cập nhật thông tin"
          onPress={() => {
            handleUpdateTeacherInfo();
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProfileScreen;
