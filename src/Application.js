
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers/index';

const store = createStore(reducers,{},applyMiddleware(ReduxThunk))

class Application extends Component {


  componentWillMount() {

    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyAHskLOIS27lJQWbnwEAd2xOCmJrr3bTKE",
      authDomain: "tccfirebase-84cb9.firebaseapp.com",
      databaseURL: "https://tccfirebase-84cb9.firebaseio.com",
      projectId: "tccfirebase-84cb9",
      storageBucket: "tccfirebase-84cb9.appspot.com",
      messagingSenderId: "795670737989"
    };
    firebase.initializeApp(config);

  }



  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }

}

export default Application;