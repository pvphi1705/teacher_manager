/* eslint-disable simple-import-sort/imports */
import {StyleSheet} from 'react-native';
import {metrics, fonts} from 'src/themes';
import {colors} from 'src/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    flex: 1,
    backgroundColor: colors.borderBottom,
    borderRadius: 5,
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    // justifyContent: 'space-between',

    flex: 1,
  },
  icon: {
    width: metrics.space.s20,
    height: metrics.space.s20,
    resizeMode: 'contain',
    tintColor: colors.primary,
  },
  title: {},
  titleBtn: {
    ...fonts.style.smallBold,
    color: colors.whiteText,
  },
  button: {
    height: 40,
    width: 80,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: metrics.space.s12,
  },
  titleInfo: {
    ...fonts.style.mediumBold,
    marginTop: 16,
    marginLeft: 8,
  },
  content: {
    marginLeft: metrics.space.s55,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
