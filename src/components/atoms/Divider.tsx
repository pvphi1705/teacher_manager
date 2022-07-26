import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';

import {colors} from '../../themes';
interface DividerProps {
  height?: number;
  color?: string;
  style?: ViewStyle;
}

const Divider: React.FC<DividerProps> = ({height = 1, color, style}) => {
  return <View style={{...style, height, backgroundColor: color}} />;
};

export default memo(Divider);
