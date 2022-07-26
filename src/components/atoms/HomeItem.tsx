// eslint-disable-next-line simple-import-sort/imports
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageProps,
} from 'react-native';

import {fonts, colors} from 'src/themes';
import {scaleFont} from 'src/themes/mixins';
import {metrics} from 'src/themes';
import {useAppTheme} from 'src/hooks';

interface HomeItemProps {
  label: string;
  action: () => void;
  image: ImageProps;
}

const HomeItem: React.FC<HomeItemProps> = ({label, action, image}) => {
  const {appTheme} = useAppTheme();
  return (
    <View style={styles(appTheme).container}>
      <TouchableOpacity
        style={styles(appTheme).buttonContainer}
        onPress={action}>
        <View style={styles(appTheme).buttonWrapper}>
          <Image source={image} style={styles(appTheme).imageItem} />
        </View>
        <Text style={styles(appTheme).label} children={label} />
      </TouchableOpacity>
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      flexDirection: 'column',
      padding: metrics.radius.r10,
      shadowColor: theme?.appTheme
        ? theme?.appTheme?.shadowColor
        : colors.blackText,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
      backgroundColor: theme?.appTheme
        ? theme?.appTheme?.backgroundColor
        : colors.white,
      marginHorizontal: metrics.space.s8,
      marginVertical: metrics.space.s10,
    },
    buttonContainer: {
      alignSelf: 'center',
    },
    buttonWrapper: {
      paddingVertical: fonts.size.regular,
      alignItems: 'center',
      marginRight: 30,
      // marginRight:10,
      // marginHorizontal:10,
      // width: "30%",
      paddingHorizontal: 25,
    },
    imageItem: {
      width: scaleFont(35),
      height: scaleFont(35),
      // marginBottom: responsiveH(9),
      tintColor: colors.primary,
      resizeMode: 'contain',
      alignItems: 'center',
      marginLeft: metrics.space.s30,
    },
    label: {
      fontSize: fonts.size.medium,
      fontWeight: '400',
      textAlign: 'center',
      marginTop: metrics.space.s10,
      alignItems: 'center',
      color: theme?.appTheme?.textColor,
    },
  });

export default HomeItem;
