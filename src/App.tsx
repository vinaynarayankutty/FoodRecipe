import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <MainNavigation />
        </GestureHandlerRootView>
      </Provider>
    </>
  );
};

export default App;
