import colors from './colors';
import {scaleFont} from './mixins';

const size = {
  big: scaleFont(20),
  regular: scaleFont(17),
  medium: scaleFont(15),
  small: scaleFont(13),
  tiny: scaleFont(11),
};

const fontWeight: {
  bold:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  normal:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
} = {
  bold: 'bold',
  normal: 'normal',
};

const style = {
  bigBold: {
    fontSize: size.big,
    fontWeight: fontWeight.bold,
    color: colors.blackText,
  },
  bigNormal: {
    fontSize: size.big,
    fontWeight: fontWeight.normal,
    color: colors.blackText,
  },
  regularBold: {
    fontSize: size.regular,
    fontWeight: fontWeight.bold,
    color: colors.blackText,
  },
  regularNormal: {
    fontSize: size.regular,
    fontWeight: fontWeight.normal,
    color: colors.blackText,
  },
  mediumBold: {
    fontSize: size.medium,
    fontWeight: fontWeight.bold,
    color: colors.blackText,
  },
  mediumNormal: {
    fontSize: size.medium,
    fontWeight: fontWeight.normal,
    color: colors.blackText,
  },
  smallBold: {
    fontSize: size.small,
    fontWeight: fontWeight.bold,
    color: colors.blackText,
  },
  smallNormal: {
    fontSize: size.small,
    fontWeight: fontWeight.normal,
    color: colors.blackText,
  },
  tinyBold: {
    fontSize: size.tiny,
    fontWeight: fontWeight.bold,
    color: colors.blackText,
  },
  tinyNormal: {
    fontSize: size.tiny,
    fontWeight: fontWeight.normal,
    color: colors.blackText,
  },
};

export default {
  size,
  style,
};
