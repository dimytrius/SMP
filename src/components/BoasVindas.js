import React, {Component} from 'react';
import {
    View, Text, Button, ImageBackground,StyleSheet,TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaNumerodevice } from '../actions/AppActions';

class BoasVindas extends Component{
    render(){
        return(
        <ImageBackground style={styles.back} source={require('../img/bg.jpg')}>
            <View style={{flex:1, padding:15}}>
                <View style={{ flex: 2}}>
                    <Text style={styles.title}>Seja Bem Vindo</Text>
                </View>
                {/* <Text style={styles.title}>Numero de devices Adquiridos</Text>
                    <TextInput
                        value={this.props.numero_devices}
                        style={styles.input}
                        placeholderTextColor='#fff'
                        placeholder='Numero de devices'
                        onChangeText={(texto) => this.props.modificaNumerodevice(texto)}
                    /> */}
                <View style={{ flex: 1 }}>
                    <Button title='Ok' color='#fff' onPress={() => Actions.principal()} />
                </View>
            </View>
        </ImageBackground>
        );
    }

}

mapStateToProps = state => ({
    numero_devices: state.AppReducer.numero_devices,
})

export default connect(mapStateToProps, { modificaNumerodevice })(BoasVindas);


const styles = StyleSheet.create({
    back: {
        flex: 1,
        width: null
    },
    title: {
        color: '#FFF',
        fontSize: 25,
        paddingTop: 150,
        textAlign: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 15
    },
});