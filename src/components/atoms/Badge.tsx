import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {colors, fonts} from 'src/themes';
import {scale} from 'src/themes/mixins';

interface BadgeProps {
  number: number;
  badgeStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Badge: React.FC<BadgeProps> = ({badgeStyle, textStyle, number}) => {
  if (number === 0) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([styles.badge, badgeStyle])}>
      <Text
        style={StyleSheet.flatten([
          styles.label,
          number > 9 ? styles.twoNumber : styles.oneNumber,
          textStyle,
        ])}>
        {number > 99 ? 99 : number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(24) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.warning,
  },
  oneNumber: {
    ...fonts.style.smallBold,
  },
  twoNumber: {
    ...fonts.style.tinyBold,
  },
  label: {
    color: colors.whiteText,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
});

export default memo(Badge);
