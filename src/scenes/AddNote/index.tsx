/* eslint-disable simple-import-sort/imports */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Input, Button} from 'src/components/atoms';
import {styles} from './styles';
import {Select} from 'src/components/molecules';
import {colors} from 'src/themes';
import {SelectOption} from '../../components/molecules/Select';
import {Alert} from 'react-native';
import {useNote, useAuth} from 'src/hooks';
import moment from 'moment';
import navigationService from 'src/services/navigationService';
import {NOTED_SCREEN} from 'src/navigation/appRouters';

const typeWork = [
  {id: 1, name: 'Cá nhân'},
  {id: 2, name: 'Nhà trường'},
  {id: 3, name: 'Khác'},
];

const AddNoteScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const {addNewNote, getListNotes} = useNote();
  const {teacherId} = useAuth();
  let today = moment(new Date()).format('YYYY-MM-DD');

  const onSelectType = (value: SelectOption) => {
    setSelectedType(value.name || '');
  };
  const getLabel = () => {
    return selectedType === '' ? 'Chọn loại công việc' : selectedType;
  };
  const onAddSuccess: Function = () => {
    global.props.hideLoading();
    getListNotes(teacherId, onGetNoteSuccess, onGetNoteError);
    navigationService.navigate(NOTED_SCREEN);
    Alert.alert('Thông báo', 'Thêm thành công');
  };

  const onAddError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error

    Alert.alert('Có lỗi', message);
  };
  const onGetNoteSuccess: Function = () => {
    global.props.hideLoading();
  };

  const onGetNoteError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error

    Alert.alert('Có lỗi', message);
  };
  const handleAddNewNote = () => {
    if (title === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập tiêu đề');
    } else if (subTitle === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập tiêu đề phụ');
    } else if (content === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập nội dung');
    } else {
      global.props.showLoading();
      addNewNote(
        title,
        content,
        today,
        subTitle,
        selectedType,
        teacherId,
        onAddSuccess,
        onAddError,
      );
    }
  };
  return (
    <View style={styles.container}>
      <NavBar isShowLeftIcon title="Thêm ghi chú" />
      <View style={styles.container}>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={styles.keyboardAwareScrollView}>
          <Text style={styles.label}>Tiêu đề</Text>
          <Input
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            onChangeText={value => setTitle(value)}
            value={title}
          />
          <View style={styles.divider} />

          <Text style={styles.labelPassword}>Tiêu đề phụ</Text>
          <Input
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            onChangeText={value => setSubTitle(value)}
            value={subTitle}
          />
          <View style={styles.divider} />
          <Text style={styles.label1}>Nội dung công việc</Text>
          <Input
            containerStyle={styles.inputWrapper}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            onChangeText={value => setContent(value)}
            value={content}
          />
          <View style={styles.divider} />
          <Select
            options={typeWork}
            label={getLabel()}
            onSelect={value => onSelectType(value)}
            containerStyle={styles.containerStyle}
            triggerStyle={styles.triggerStyle}
            menuStyle={styles.menuStyle}
            labelStyle={styles.labelStyle}
            colorRight={colors.textColor}
            hideLeft={true}
            hideImageLeft={true}
          />
          <Button
            style={styles.registerButton}
            title="Thêm ghi chú"
            onPress={() => {
              handleAddNewNote();
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default AddNoteScreen;
