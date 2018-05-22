import React, { Component } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaAdicionaDevice, adicionaDevice } from '../actions/AppActions';

class AdicionarDevices extends Component {

    _adicionaDevice() {

        const { adicionar_device } = this.props;

        this.props.adicionaDevice({ adicionar_device });
        Actions.pop();
        

    }
    

    render(){
            return (
                <ImageBackground style={styles.back} source={require('../img/bg.jpg')}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.adiciona_device}
                            style={styles.input}
                            placeholderTextColor='#fff'
                            placeholder='Digite o numero do device para visualizar'
                            onChangeText={(texto) => this.props.modificaAdicionaDevice(texto)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            title="Adicionar"
                            color="#fff"  
                                onPress={() => this._adicionaDevice()}/>
                        <Text style={{ color: '#ff0000', fontSize: 20 }}>
                            {this.props.cadastro_resultado_txt_erro}
                            
                        </Text>
                    </View>
                </View>
                </ImageBackground>
            )
        }
    }
   
mapStateToProps = state =>({
    adicionar_device:state.AppReducer.adicionar_device,
    cadastro_resultado_txt_erro:state.AppReducer.cadastro_resultado_txt_erro
})

export default connect(mapStateToProps, { modificaAdicionaDevice, adicionaDevice})(AdicionarDevices);

const styles = StyleSheet.create({
    containerForm: {
        flex: 2,
        padding: 20,
        backgroundColor: 'transparent'
    },
    back: {
        flex: 1,
        width: null
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 15
    },


    container: {
        flex: 1,


    },
});