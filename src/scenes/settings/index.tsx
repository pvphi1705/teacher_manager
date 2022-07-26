/* eslint-disable simple-import-sort/imports */
import React, {FunctionComponent, useState} from 'react';
import {Image, Switch, StatusBar, View} from 'react-native';
import {SettingItem} from 'src/components/atoms';
import {clearToken} from 'src/utils/store';
import NavBar from 'src/components/molecules/NavBar';
import {images} from 'src/themes';
import styles from './styles';
import {colors} from 'src/themes';
import {useAppTheme} from 'src/hooks';
import {lightTheme} from '../../themes/theme';
import {darkTheme} from '../../themes/theme';
import navigationService from '../../services/navigationService';
import {CHANGE_PASS_WORD} from 'src/navigation/appRouters';

const SettingScreen: FunctionComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {appTheme, changeTheme} = useAppTheme();

  const toggleSwitch = () => {
    setIsEnabled((previousState: any) => !previousState);
    isEnabled ? changeTheme(lightTheme) : changeTheme(darkTheme);
  };

  const handleLogout = () => {
    clearToken();
  };
  return (
    <View style={styles(appTheme).container}>
      <StatusBar barStyle={appTheme?.appTheme?.statusBar} />
      <NavBar isShowLeftIcon title="Thiết lập" />
      <SettingItem
        name="Giao diện tối"
        image={images.icTheme}
        leftComponent={
          <Switch
            trackColor={{false: '#767577', true: colors.primary}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        }
        onItemClick={() => {}}
      />
      <SettingItem
        name="Đổi mật khẩu"
        image={images.icChangePassword}
        leftComponent={
          <Image source={images.icArrowLeft} style={styles(appTheme).arrow} />
        }
        onItemClick={() => {
          navigationService.navigate(CHANGE_PASS_WORD);
        }}
      />
      <SettingItem
        name="Đăng xuất"
        image={images.icLogout}
        leftComponent={
          <Image source={images.icArrowLeft} style={styles(appTheme).arrow} />
        }
        onItemClick={() => {
          handleLogout();
        }}
      />
    </View>
  );
};

export default SettingScreen;
