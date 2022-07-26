import {Dimensions, Platform} from 'react-native';

import {scale} from './mixins';

const {width, height} = Dimensions.get('window');
export const BANNER_IMAGE_RATIO = 250 / 1024;
const IS_IPHONE_X =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 780 ||
    width === 780 ||
    height === 812 ||
    width === 812 ||
    height === 844 ||
    width === 844 ||
    height === 896 ||
    width === 896 ||
    height === 926 ||
    width === 926);

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  unsafeBottomHeight: Platform.OS === 'ios' ? (IS_IPHONE_X ? 34 : 0) : 0,
  navBarHeight: Platform.OS === 'ios' ? 90 : 56,
  bannerHeight: BANNER_IMAGE_RATIO * (width < height ? width : height),
  space: {
    s2: scale(2),
    s5: scale(5),
    s8: scale(8),
    s10: scale(10),
    s15: scale(15),
    s20: scale(20),
    s25: scale(25),
    s30: scale(30),
    s16: scale(16),
    s12: scale(12),
    s6: scale(6),
    s120: scale(120),
    s35: scale(35),
    s55: scale(55),
    s1: scale(1),
    s50: scale(50),
    s240: scale(240),
    sam8: scale(-8),
    sam10: scale(-10),
    s200: scale(200),
  },
  radius: {
    r10: scale(10),
    r20: scale(20),
  },
};

export default metrics;
