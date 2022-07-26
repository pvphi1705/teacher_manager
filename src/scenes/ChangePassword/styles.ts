import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';

const labelStyle: any = {
  ...fonts.style.smallBold,
  color: colors.blackText,
  lineHeight: scale(19),
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
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
      ...fonts.style.smallBold,
      color: theme?.appTheme ? theme?.appTheme?.textColor : colors.blackText,
      lineHeight: scale(19),
    },
    labelPassword: {
      ...fonts.style.smallBold,
      color: theme?.appTheme?.textColor,
      lineHeight: scale(19),
      marginTop: metrics.space.s30,
    },
    inputWrapper: {
      width: '100%',
    },
    input: {
      ...fonts.style.smallBold,
      color: theme?.appTheme ? theme?.appTheme?.textColor : colors.blackText,
      lineHeight: scale(19),
    },
    inputContainer: {
      borderRadius: 0,
      paddingHorizontal: metrics.space.s5,
      paddingVertical: 0,
      height: scale(40),
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
    },
    divider: {
      height: 1,
      width: '100%',
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.divider
        : colors.grayText,
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
    contentContainer: {
      margin: metrics.space.s16,
    },
    label1: {
      ...fonts.style.smallBold,
      color: theme?.appTheme?.textColor,
      lineHeight: scale(19),
      marginTop: metrics.space.s25,
    },
  });

export default styles;
