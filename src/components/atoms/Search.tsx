/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {metrics, colors} from 'src/themes';
import {useNote} from 'src/hooks';
import {images} from 'src/themes';

// interface SearchProps {
//   filter: string;
//   setText: (text: string) => void;
//   onSubmit: () => void;
// }

const Search = () => {
  const [filter, setFilter] = React.useState('');
  const {searchNote} = useNote();

  const onSearchNoteSuccess = () => {
    global.props.hideLoading();
  };

  const onSearchNoteError = () => {
    global.props.hideLoading();
    Alert.alert('Thông báo', 'Không tìm thấy công việc phù hợp');
  };

  const handleSearchNote = () => {
    if (filter === '') {
      Alert.alert('Thông báo', 'Bạn chưa nhập nội dung tìm kiếm');
    } else {
      global.props.showLoading();
      searchNote(filter, onSearchNoteSuccess, onSearchNoteError);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Tìm kiếm công việc"
        value={filter}
        onChangeText={value => setFilter(value)}
        onBlur={() => {
          handleSearchNote();
        }}
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
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: metrics.space.s16,
    borderRadius: metrics.space.s10,
    borderWidth: metrics.space.s1,
    borderColor: colors.gray_C4,
    marginHorizontal: metrics.space.s16,
    marginVertical: metrics.space.s16,
  },
  search: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
  },
});

export default Search;
