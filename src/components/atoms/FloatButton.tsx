/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fonts} from 'src/themes';

interface FloatButtonProps {
  onPress: () => void;
}

const FloatButton: React.FC<FloatButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textPlus}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: colors.divider,
    borderRadius: 35,
    position: 'absolute',
    right: 40,
    bottom: 50,
    justifyContent: 'center',
  },
  textPlus: {
    alignSelf: 'center',
    ...fonts.style.bigBold,
    color: colors.whiteText,
  },
});
export default FloatButton;
