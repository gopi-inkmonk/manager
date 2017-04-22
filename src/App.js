import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAmxMyvK86jdKiaQgIL65enfOtQl9YFiRY',
      authDomain: 'manager-2dcaa.firebaseapp.com',
      databaseURL: 'https://manager-2dcaa.firebaseio.com',
      projectId: 'manager-2dcaa',
      storageBucket: 'manager-2dcaa.appspot.com',
      messagingSenderId: '747531639793'
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
