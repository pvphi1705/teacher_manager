/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {metrics, colors, fonts} from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: metrics.space.s25,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    marginVertical: metrics.space.s16,
    marginHorizontal: metrics.space.s16,
    shadowColor: colors.bgGray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    ...fonts.style.mediumBold,
    marginVertical: metrics.space.s8,
  },
  title1: {
    ...fonts.style.mediumBold,
    marginVertical: metrics.space.s8,
    color: colors.danger,
  },
  icArrow: {
    width: metrics.space.s30,
    height: metrics.space.s30,
    resizeMode: 'contain',
    tintColor: colors.danger,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.space.s16,
  },

  container1: {
    flexDirection: 'row',
    padding: metrics.space.s25,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    marginVertical: metrics.space.s16,
    marginHorizontal: metrics.space.s16,
    shadowColor: colors.bgGray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    flex: 1,
  },
});

export default styles;
