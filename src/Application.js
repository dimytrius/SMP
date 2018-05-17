
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
      apiKey: "AIzaSyBskOWUVUPlEJs0PLCp-n_YansWi0ckYo4",
      authDomain: "projeto-novo-d9b17.firebaseapp.com",
      databaseURL: "https://projeto-novo-d9b17.firebaseio.com",
      projectId: "projeto-novo-d9b17",
      storageBucket: "projeto-novo-d9b17.appspot.com",
      messagingSenderId: "944462740024"
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