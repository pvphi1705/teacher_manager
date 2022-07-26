/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {fonts, metrics, colors} from 'src/themes';
import {scale} from 'src/themes/mixins';

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.appTheme?.backgroundColor,
    },
    itemContainer: {
      marginTop: -15,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: metrics.space.s10,
      backgroundColor: colors.bgInput,
      paddingVertical: metrics.space.s20,
      // shadowColor: theme?.appTheme?.shadowColor,
      // shadowOffset: {
      //   width: 0,
      //   height: 3,
      // },
      // shadowOpacity: 0.2,
      // shadowRadius: 4,
      // elevation: 2,
    },
    itemTextInfo: {
      marginLeft: metrics.space.s10,
      ...fonts.style.smallBold,
      color: theme?.appTheme?.textColor,
    },
    itemTextContent: {
      marginRight: metrics.space.s10,
      ...fonts.style.smallBold,
      color: theme?.appTheme?.textColor,
    },
    scroll: {
      flex: 1,
    },
    footer: {
      height: 100,
    },
    iconRight: {
      width: scale(17),
      height: scale(17),
      tintColor: colors.white,
      marginTop: metrics.space.s30,
      marginRight: metrics.space.s10,
    },
  });

export default styles;
