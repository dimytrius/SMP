import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import Application from './src/Application';

export default class App extends Component {
    render() {
        return (
            <Application />
        );
    }
}

AppRegistry.registerComponent('SMP', () => App);
