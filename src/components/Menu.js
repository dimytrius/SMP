import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase'


export default class Menu extends Component {
    render() {
        return (
            <ImageBackground style={{ flex: 1}} source={require('../img/bg.jpg')}>
                <ScrollView>
                   
                        <TouchableOpacity
                        onPress={() => Actions.cadastrarDevices()}>

                         >

                        <Text style={{ color: 'white', fontSize: 16, paddingLeft: 20, paddingTop: 50 }}>Quantidade de devices</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        >
                            <Text style={{ color: 'white', fontSize: 16, paddingLeft: 20, paddingTop: 50 }}>Informações sobre os devices</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        >
                            <Text style={{ color: 'white', fontSize: 16, paddingLeft: 20, paddingTop: 50 }}>Sair</Text>
                        </TouchableOpacity>
                    
                </ScrollView>
            </ImageBackground>
        );
    }
}