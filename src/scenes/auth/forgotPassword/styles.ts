/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {scale} from 'src/themes/mixins';
import {colors, metrics, fonts} from 'src/themes';

const labelStyle: any = {
  ...fonts.style.smallBold,
  color: colors.blackText,
  lineHeight: scale(19),
};

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  registerButton: {
    marginTop: scale(48),
    width: '100%',
    backgroundColor: colors.yellow,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.borderGray,
  },
  keyboardAwareScrollView: {
    //flex: 1,
  },
  content: {
    //flex: 1,
    marginHorizontal: metrics.space.s16,
    justifyContent: 'center',
    paddingBottom: metrics.space.s30,
  },
  label: {
    ...labelStyle,
    marginTop: metrics.space.s16,
  },
  labelPassword: {
    ...labelStyle,
    marginTop: metrics.space.s30,
  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    ...fonts.style.smallBold,
    color: colors.blackText,
    lineHeight: scale(19),
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 0,
    paddingHorizontal: metrics.space.s8,
    paddingVertical: 0,
    height: scale(40),
  },
});
