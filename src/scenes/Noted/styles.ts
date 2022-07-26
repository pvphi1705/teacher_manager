/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {colors} from 'src/themes';
import {metrics} from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgGray,
  },
  list: {
    paddingHorizontal: metrics.space.s10,
    // marginTop: metrics.space.s20,
  },
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

export default styles;
