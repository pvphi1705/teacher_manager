/* eslint-disable simple-import-sort/imports */
import React, {useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import NavBar from 'src/components/molecules/NavBar';
import moment from 'moment';

import Select, {SelectOption} from 'src/components/molecules/Select';
import {useNote, useAuth} from 'src/hooks';
import navigationService from 'src/services/navigationService';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Input, Button} from 'src/components/atoms';
import {NOTED_SCREEN} from 'src/navigation/appRouters';
import {colors} from 'src/themes';
import {useEffect} from 'react';

const typeWork = [
  {id: 1, name: 'Cá nhân'},
  {id: 2, name: 'Nhà trường'},
  {id: 3, name: 'Khác'},
];

const EditNoteScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const {getListNotes, updateNote} = useNote();
  const {teacherId} = useAuth();

  const route = useRoute<any>();
  const noteEdit = route?.params;

  let today = moment(new Date()).format('YYYY-MM-DD');

  const onSelectType = (value: SelectOption) => {
    setSelectedType(value.name || '');
  };
  const getLabel = () => {
    return selectedType == null ? 'Chọn loại công việc' : selectedType;
  };
  const onUpdateSuccess: Function = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Sửa thành công!');
    getListNotes(teacherId, onGetNoteSuccess, onGetNoteError);
    navigationService.navigate(NOTED_SCREEN);
  };

  const onUpdateError: Function = (message: string) => {
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
  const handleEditNote = () => {
    if (title === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập tiêu đề');
    } else if (subTitle === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập tiêu đề phụ');
    } else if (content === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập nội dung');
    } else {
      global.props.showLoading();
      updateNote(
        noteEdit?.id,
        title,
        content,
        today,
        subTitle,
        selectedType,
        teacherId,
        onUpdateSuccess,
        onUpdateError,
      );
    }
  };
  useEffect(() => {
    setTitle(noteEdit?.title);
    setSubTitle(noteEdit?.subTitle);
    setContent(noteEdit?.note);
    setSelectedType(noteEdit?.typeNote);
  }, [noteEdit]);
  return (
    <View style={styles.container}>
      <NavBar isShowLeftIcon title="Chỉnh sửa công việc" />
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
            title="Sửa công việc"
            onPress={() => {
              // handleAddNewNote();
              handleEditNote();
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default EditNoteScreen;
