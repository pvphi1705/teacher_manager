/* eslint-disable simple-import-sort/imports */
import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import NavBar from 'src/components/molecules/NavBar';
import moment from 'moment';

import {NoteCard, FloatButton} from 'src/components/atoms';
import styles from './styles';
import {useNote, useAuth} from 'src/hooks';
import navigationService from 'src/services/navigationService';
import {ADD_NOTE_SCREEN, EDIT_NOTE_SCREEN} from 'src/navigation/appRouters';
import {EmptyList} from '../../components/molecules';
import {images} from 'src/themes';

const NotedScreen = () => {
  const {teacherId} = useAuth();
  const {notes, getListNotes, deleteNote, searchNote} = useNote();
  const [noteList, setNoteList] = React.useState();
  const [filter, setFilter] = React.useState('');
  let isShowingAlert = false;

  const onGetListNoteSuccess: Function = (response: any) => {
    global.props.hideLoading();
    setNoteList(response);
  };

  const onGetListNoteError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error
    Alert.alert('Có lỗi', message);
  };

  const handleGetListNote = () => {
    getListNotes(teacherId, onGetListNoteSuccess, onGetListNoteError);
  };

  const onDeleteNoteSuccess: Function = () => {
    global.props.hideLoading();
    getListNotes(teacherId, onGetListNoteSuccess, onGetListNoteError);
    Alert.alert('Thông báo', 'Xóa thành công');
  };
  const onDeleteNoteError: Function = (message: string) => {
    global.props.hideLoading();
    // Handle error
    Alert.alert('Có lỗi', message);
  };

  const onSearchNoteSuccess = (response: any) => {
    global.props.hideLoading();
    setNoteList(response);
  };

  const onSearchNoteError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Không tìm thấy công việc phù hợp');
  };

  const handleDeleteNote = (noteId: any) => {
    if (!isShowingAlert) {
      isShowingAlert = true;
      Alert.alert('Thông báo', 'Bạn có chắc muốn xóa công việc này', [
        {
          text: 'Hủy',
          onPress: () => {
            isShowingAlert = false;
          },
        },
        {
          text: 'Xác nhận',
          onPress: () => {
            global.props.showLoading();
            deleteNote(noteId, onDeleteNoteSuccess, onDeleteNoteError);
          },
        },
      ]);
    }
  };

  useEffect(() => {
    global.props.showLoading();
    handleGetListNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchNote = () => {
    if (filter === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập nội dung tìm kiếm');
    } else {
      global.props.showLoading();
      searchNote(filter, onSearchNoteSuccess, onSearchNoteError);
    }
  };

  return (
    <View style={styles.container}>
      <NavBar isShowLeftIcon title="Ghi chú" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tìm kiếm công việc"
          value={filter}
          onChangeText={value => setFilter(value)}
          // onBlur={() => {
          //   handleSearchNote();
          // }}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => handleSearchNote()}>
          <Image
            source={images.icSearch}
            resizeMode="contain"
            style={styles.search}
          />
        </TouchableOpacity>
      </View>
      {noteList && (
        <FlatList
          data={noteList}
          style={styles.list}
          renderItem={({item}) => {
            return (
              <NoteCard
                title={item?.title}
                subTitle={item.categoryName}
                dateCreate={moment(item.time).format('YYYY-MM-DD')}
                content={item.note}
                typeNote={item?.typeNote}
                onDelete={() => handleDeleteNote(item?.id)}
                onEdit={() => {
                  navigationService.navigate(EDIT_NOTE_SCREEN, {
                    id: item?.id,
                    title: item?.title,
                    subTitle: item?.categoryName,
                    time: item?.time,
                    note: item?.note,
                    typeNote: item?.typeNote,
                  });
                }}
              />
            );
          }}
          numColumns={2}
          keyExtractor={item => item?.id.toString()}
          ListEmptyComponent={<EmptyList isCalendar={false} />}
        />
      )}
      <FloatButton
        onPress={() => navigationService.navigate(ADD_NOTE_SCREEN)}
      />
    </View>
  );
};

export default NotedScreen;
