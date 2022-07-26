/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {metrics, colors} from 'src/themes';

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
      flex: 1,
    },
    arrow: {
      width: metrics.space.s16,
      height: metrics.space.s16,
      tintColor: theme?.appTheme
        ? theme?.appTheme?.textColor
        : colors.blackText,
      transform: [{rotate: '-180deg'}],
    },
  });

export default styles;
