/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {metrics, colors, fonts} from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemContainer: {
    marginTop: -15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: metrics.space.s10,
    backgroundColor: colors.bgInput,
    paddingVertical: metrics.space.s20,
    shadowColor: colors.bgGray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTextInfo: {
    marginLeft: metrics.space.s10,
    ...fonts.style.smallBold,
    color: colors.blackText,
  },
  itemTextContent: {
    marginRight: metrics.space.s10,
    ...fonts.style.smallBold,
    color: colors.blackText,
  },
  titleInfo: {
    ...fonts.style.mediumBold,
    marginTop: metrics.space.s16,
    marginLeft: metrics.space.s16,
  },
  titleBottomSheet: {
    ...fonts.style.bigBold,
    alignSelf: 'center',
    marginTop: metrics.space.s8,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: metrics.space.s16,
  },
  info: {
    ...fonts.style.regularNormal,
    lineHeight: 20,
  },
});

export default styles;
