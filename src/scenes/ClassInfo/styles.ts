/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomWidth: 0.8,
    borderBottomColor: colors.borderBottom,
  },
  icArrow: {
    width: metrics.space.s30,
    height: metrics.space.s30,
    resizeMode: 'contain',
    tintColor: colors.whiteText,
  },
  buttonSubject: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.space.s10,
    paddingVertical: metrics.space.s10,
    backgroundColor: colors.primary,
    marginHorizontal: metrics.space.s16,
    marginVertical: metrics.space.s12,
    // borderTopLeftRadius: metrics.radius.r10,
    // borderTopRightRadius: metrics.radius.r10,
  },
  itemTitle: {
    ...fonts.style.regularBold,
    color: colors.whiteText,
  },
  detail: {
    alignItems: 'center',
    marginBottom: metrics.space.s16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  info: {
    width: metrics.space.s20,
    height: metrics.space.s20,
    resizeMode: 'contain',
  },
  textDetail: {
    ...fonts.style.smallBold,
    marginLeft: metrics.space.s2,
  },
});

export default styles;
