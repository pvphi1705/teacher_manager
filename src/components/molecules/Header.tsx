import React, {memo} from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {images, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';
import {Icon} from '../atoms';
import {BadgeWithIcon} from '.';

interface HeaderProps {
  backgroundImage?: ImageSourcePropType;
  onClickNotification?: () => void;
  onClickUser?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({
  backgroundImage = images.imgHeaderBg,
  onClickNotification,
  onClickUser,
  containerStyle,
}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View style={styles.logo}>
        <Image source={images.logo} style={styles.imgLogo} />
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onClickNotification}>
          <BadgeWithIcon
            icon={images.icBell}
            number={10}
            badgeSize={20}
            iconStyle={styles.icNotification}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickUser}>
          <Icon source={images.icUser} style={styles.icUser} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.space.s15,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imgLogo: {
    width: scale(129),
    height: scale(30),
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  icNotification: {
    width: scale(24),
    height: scale(29),
  },
  icUser: {
    width: scale(30),
    height: scale(30),
    marginLeft: metrics.space.s20,
  },
});

export default memo(Header);
