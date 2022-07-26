/* eslint-disable simple-import-sort/imports */
import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';

import {colors, fonts, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';
import {images} from 'src/themes';

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

const IconButton: React.FC<ButtonProps> = ({
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
      {/* <View style={styles.imageWrapper}>
        <Image source={image} style={styles.imgIcon} />
      </View> */}
      <Text style={newTitleStyle}>{myTitle}</Text>
      <Image source={images.ic_right_arrow} style={styles.img} />
    </TouchableOpacity>
  );
};

export default memo(IconButton);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.space.s10,
    borderRadius: metrics.radius.r10,
    height: scale(48),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  title: {
    ...fonts.style.regularBold,
    color: colors.white,
    marginLeft: metrics.space.s16,
  },
  disableContainer: {
    backgroundColor: colors.borderGray,
  },
  disableTitle: {
    ...fonts.style.regularBold,
    color: colors.white,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
    marginRight: metrics.space.s16,
  },
  imageWrapper: {
    backgroundColor: colors.primary,
  },
});
