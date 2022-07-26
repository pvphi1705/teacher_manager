/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {metrics, colors} from 'src/themes';

const styles = (theme: any) =>
  StyleSheet.create({
    arrow: {
      width: metrics.space.s16,
      height: metrics.space.s16,
      tintColor: theme?.appTheme
        ? theme?.appTheme?.textColor
        : colors.blackText,
      transform: [{rotate: '-180deg'}],
    },
    container: {
      backgroundColor: theme?.appTheme?.backgroundColor,
      flex: 1,
    },
  });

export default styles;
