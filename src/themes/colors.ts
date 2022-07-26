/**
 * Base Colors
 *
 * Text Colors
 * - Suffix 'Text'
 *
 * Others
 */

const colors = {
  // BaseColors
  primary: '#2196f3',
  secondary: '#273047',
  danger: '#FF0000',
  pink: '#ED64A6',
  blue: '#2307FF',
  warning: '#D5C376',
  white: '#FFF',
  black: '#000000',
  yellow: '#B8901B',

  // TextColors
  blackText: '#1A202C',
  whiteText: '#FFFFFF',
  grayText: '#707070',

  // Others
  borderGray: '#BEBEBE',
  bgGray: '#F4F4F4',
  bgInput: '#F1F1F2',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  divider: '#CFCFD0',
  borderBottom: '#D6D6D6',
  opacityBlack: 'rgba(0, 0, 0, 0.5)',
  textColor: '#383838',
  gray_C4: '#c4c4c4',
  transparent: 'transparent',
  menuLabel: '#333333',
  noteYellow: '#4caf50',
  noteOrange: '#ff9800',
  noteLightRed: '#ff5722',
};

export const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex += hex;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export default colors;
