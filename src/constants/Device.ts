import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const kind = Platform.select({ios: 1, android: 2});
const os = DeviceInfo.getSystemVersion();

export const deviceParams = {
  device_kind: kind,
  device_os: os,
};

const device = {deviceParams};

export default device;
