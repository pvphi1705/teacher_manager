/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {colors} from 'src/themes';

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
    },
    homeItemWrapper: {
      flexDirection: 'row',
    },
    itemHomeContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });

export default styles;
