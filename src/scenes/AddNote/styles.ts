import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';

const labelStyle: any = {
  ...fonts.style.mediumNormal,
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
    marginHorizontal: 16,
    marginTop: 16,
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
    backgroundColor: colors.primary,
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
  containerStyle: {
    width: metrics.screenWidth * 0.5,
    marginVertical: 16,
  },
  triggerStyle: {
    backgroundColor: colors.transparent,
    paddingHorizontal: metrics.space.s5,
    marginTop: metrics.space.s10,
    paddingBottom: metrics.space.s5,
    borderBottomWidth: 0.5,
    borderColor: '#a3a3a3',
    width: metrics.screenWidth * 0.9,
  },
  menuStyle: {
    backgroundColor: colors.white,
    width: metrics.screenWidth * 0.89,
    height: metrics.space.s120,
  },
  labelStyle: {
    ...fonts.style.mediumNormal,
    color: colors.menuLabel,
    textAlign: 'left',
  },
  label1: {
    ...labelStyle,
    marginTop: metrics.space.s16,
  },
});
