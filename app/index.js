import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationServices';
import {Provider} from 'react-redux';
import store from './stores';
import RootStackScreen from './RootNavigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
        <NavigationContainer ref={navigationRef}>
          <RootStackScreen />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
