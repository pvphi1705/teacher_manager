import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {colors, fonts, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';

export interface ButtonProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disableTitle?: string;
  disableTitleStyle?: StyleProp<TextStyle>;
  disableStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title = 'Button',
  onPress = () => {
    // do something
  },
  disabled = false,
  style,
  titleStyle,
  disableStyle,
  disableTitle,
  disableTitleStyle,
}) => {
  const containerStyle = disabled
    ? [styles.container, style, styles.disableContainer, disableStyle]
    : [styles.container, style];
  const newTitleStyle = disabled
    ? [titleStyle, styles.disableTitle, disableTitleStyle]
    : [styles.title, titleStyle];

  let myTitle;
  if (disableTitle) {
    myTitle = disabled ? disableTitle : title;
  } else {
    myTitle = title;
  }

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      style={containerStyle}
      onPress={() => (disabled ? {} : onPress())}>
      <Text style={newTitleStyle}>{myTitle}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: metrics.space.s10,
    borderRadius: metrics.radius.r10,
    height: scale(48),
    backgroundColor: colors.primary,
  },
  title: {
    ...fonts.style.regularNormal,
    color: colors.white,
  },
  disableContainer: {
    backgroundColor: colors.borderGray,
  },
  disableTitle: {
    ...fonts.style.regularNormal,
    color: colors.white,
  },
});
