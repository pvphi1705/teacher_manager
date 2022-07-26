import {colors} from 'src/themes';

export const darkTheme = {
  mode: 'dark',
  statusBar: 'light-content',
  textColor: colors.whiteText,
  backgroundColor: colors.black,
  shadowColor: colors.whiteText,
  divider: colors.white,
};

export const lightTheme = {
  mode: 'light',
  statusBar: 'dark-content',
  textColor: colors.black,
  backgroundColor: colors.white,
  shadowColor: colors.blackText,
  divider: colors.borderGray,
};
