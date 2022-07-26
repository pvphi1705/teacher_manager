import React, {memo} from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {Badge, Icon} from 'src/components/atoms';
import {colors} from 'src/themes';
import {scale} from 'src/themes/mixins';

interface BadgeWithIconProps {
  number?: any;
  icon: ImageSourcePropType;
  iconStyle?: ImageStyle;
  badgeSize?: number;
  badgeStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const BadgeWithIcon: React.FC<BadgeWithIconProps> = ({
  number = 0,
  badgeStyle,
  icon,
  iconStyle,
  badgeSize = scale(20) / 2,
  containerStyle,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Icon source={icon} style={iconStyle} />
      <Badge
        number={number}
        badgeStyle={StyleSheet.flatten([
          styles.badgeContainer,
          {width: badgeSize, height: badgeSize, borderRadius: badgeSize / 2},
          badgeStyle,
        ])}
        textStyle={styles.badgeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    left: 15,
    top: -5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.blackText,
  },
});

export default memo(BadgeWithIcon);
