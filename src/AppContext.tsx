import React, {useState} from 'react';
import {Alert, Platform} from 'react-native';
import Toast from 'react-native-simple-toast';

import {Loading} from 'src/components/molecules';

type ContextProps = {};

export const AppContext = React.createContext<Partial<ContextProps>>({});

export const AppConsumer = AppContext.Consumer;

let isShowingAlert = false;
export const AppProvider = (props: any) => {
  const [loading, setLoading] = useState(false);
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const alert = (title: string, message: string, buttons: any) => {
    // default alert (error message alert, ...): only show a alert at the time
    if (!buttons) {
      if (!isShowingAlert) {
        isShowingAlert = true;
        Alert.alert(title, message, [
          {
            text: 'OK',
            onPress: () => {
              isShowingAlert = false;
            },
          },
        ]);
      } else {
        // don't show alert
      }
      return;
    }
    // custom alert
    Alert.alert(title, message, buttons);
  };

  const showToast = (message: string) => {
    if (message) {
      setTimeout(
        () => {
          Toast.show(message, Toast.LONG);
        },
        Platform.OS === 'ios' ? 300 : 0,
      );
    }
  };

  const funcs: any = {
    showLoading: showLoading,
    hideLoading: hideLoading,
    alert: alert,
    showToast: showToast,
  };

  return (
    <AppContext.Provider value={{...funcs}}>
      {props.children}
      <Loading show={loading} />
    </AppContext.Provider>
  );
};
