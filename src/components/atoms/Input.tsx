import React, {memo} from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {colors, fonts, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';
import Icon from './Icon';

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  leftIcon?: ImageSourcePropType;
  leftIconStyle?: ImageStyle | undefined;
  onClickLeftIcon?: () => void;
  rightIconStyle?: ImageStyle | undefined;
  rightIcon?: ImageSourcePropType;
  onClickRightIcon?: () => void;
  label?: string;
  error?: string;
  placeholderTextColor?: string;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  labelStyle,
  label,
  error,
  leftIcon,
  leftIconStyle,
  onClickLeftIcon,
  rightIcon,
  rightIconStyle,
  onClickRightIcon,
  placeholderTextColor = colors.grayText,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {!!leftIcon && (
          <TouchableOpacity onPress={onClickLeftIcon}>
            <Icon
              source={leftIcon}
              style={{...styles.leftIcon, ...leftIconStyle}}
            />
          </TouchableOpacity>
        )}
        <TextInput
          {...props}
          style={[styles.input, inputStyle]}
          autoCapitalize="none"
          placeholderTextColor={placeholderTextColor}
        />
        {!!rightIcon && (
          <TouchableOpacity onPress={onClickRightIcon}>
            <Icon
              source={rightIcon}
              style={{...styles.rightIcon, ...rightIconStyle}}
            />
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  container: {},
  label: {
    ...fonts.style.smallNormal,
    color: colors.grayText,
    marginBottom: metrics.space.s5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgInput,
    borderRadius: metrics.radius.r10,
    paddingHorizontal: metrics.space.s15,
  },
  input: {
    // padding vertical not working when the TextInput is multiline
    paddingTop: metrics.space.s10,
    paddingBottom: metrics.space.s10,
    paddingHorizontal: 0,
    ...fonts.style.smallNormal,
    height: scale(48),
    flex: 1,
  },
  leftIcon: {
    marginRight: metrics.space.s5,
  },
  rightIcon: {
    marginLeft: metrics.space.s5,
  },
  error: {
    ...fonts.style.tinyNormal,
    color: colors.danger,
    marginTop: metrics.space.s5,
  },
});
