import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';

const labelStyle: any = {
  ...fonts.style.smallBold,
  color: colors.blackText,
  lineHeight: scale(19),
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboardAwareScrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: metrics.space.s16,
    justifyContent: 'center',
    paddingBottom: metrics.space.s30,
  },
  label: {
    ...labelStyle,
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
    paddingHorizontal: metrics.space.s5,
    paddingVertical: 0,
    height: scale(40),
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.borderGray,
  },
  registerButton: {
    marginTop: scale(48),
    width: '100%',
    backgroundColor: colors.yellow,
  },
  logo: {
    width: '60%',
    height: scale(150),
    marginBottom: scale(25),
    alignSelf: 'center',
  },
  vnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  enText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: scale(25),
  },
  forgotText: {
    ...fonts.style.regularBold,
    alignSelf: 'center',
    marginVertical: metrics.space.s16,
    color: colors.primary,
  },
});
