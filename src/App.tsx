/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigator from 'src/navigation/RootNavigator';
import {persistor, store} from 'src/stores';
import {AppConsumer, AppProvider} from './AppContext';
import {colors} from './themes';
import {MenuProvider} from 'react-native-popup-menu';
import {useAppTheme} from './hooks';

const App = (props: any) => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
          <AppProvider {...props}>
            <MenuProvider>
              <AppConsumer>
                {funcs => {
                  global.props = {...funcs};
                  return <RootNavigator {...funcs} />;
                }}
              </AppConsumer>
            </MenuProvider>
          </AppProvider>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
