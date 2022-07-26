/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {View, Text, StyleSheet, ImageProps, Image} from 'react-native';
import {metrics, colors, fonts} from 'src/themes';
import {TouchableOpacity} from 'react-native';
import {useAppTheme} from 'src/hooks';

interface SettingItemProps {
  name: string;
  image: ImageProps;
  leftComponent: React.ReactNode;
  onItemClick: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  name,
  image,
  leftComponent,
  onItemClick,
}) => {
  const {appTheme} = useAppTheme();
  console.log('appTheme: ', appTheme.appTheme);
  return (
    <TouchableOpacity style={styles(appTheme).container} onPress={onItemClick}>
      <View style={styles(appTheme).titleContainer}>
        <Image source={image} style={styles(appTheme).image} />
        <Text style={styles(appTheme).name}>{name}</Text>
      </View>
      {leftComponent}
    </TouchableOpacity>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: metrics.space.s16,
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
      margin: metrics.space.s16,
      borderRadius: metrics.radius.r10,
      alignItems: 'center',
      justifyContent: 'space-between',
      shadowColor: theme?.appTheme?.shadowColor,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    image: {
      width: metrics.space.s25,
      height: metrics.space.s25,
      resizeMode: 'contain',
      tintColor: theme?.appTheme
        ? theme?.appTheme?.textColor
        : colors.blackText,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
      ...fonts.style.smallBold,
      marginLeft: metrics.space.s12,
      color: theme?.appTheme?.textColor,
    },
  });

export default SettingItem;
