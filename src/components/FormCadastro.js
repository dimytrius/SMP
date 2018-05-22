import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    modificaDeviceadd,
    cadastroUsuario
} from '../actions/AutenticacaoActions';
import { Actions } from 'react-native-router-flux';

class formCadastro extends Component {

    _cadastroUsuario() {

        const { nome, email, senha, devicesadd } = this.props;

        this.props.cadastroUsuario({ nome, email, senha, devicesadd });
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.jpg')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome}
                            style={styles.input}
                            placeholderTextColor='#fff'
                            placeholder='Nome'
                            onChangeText={(texto) => this.props.modificaNome(texto)}
                        />
                        <TextInput
                            value={this.props.devicesadd}
                            style={styles.input}
                            placeholderTextColor='#fff'
                            placeholder='Devices Adquiridos'
                            onChangeText={(texto) => this.props.modificaDeviceadd(texto)}
                        />
                        <TextInput
                            value={this.props.email}
                            style={styles.input}
                            placeholderTextColor='#fff'
                            placeholder='E-mail'
                            onChangeText={(texto) => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            value={this.props.senha}
                            style={styles.input}
                            placeholderTextColor='#fff'
                            placeholder='Senha'
                            secureTextEntry
                            onChangeText={(texto) => this.props.modificaSenha(texto)}
                        />

                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.cadastroerro}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button title="Cadastrar" color="#fff" onPress={() => this._cadastroUsuario()} />
                        <Button title="Voltar" color="#fff" onPress={() => Actions.pop()} />

                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);

    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            devicesadd: state.AutenticacaoReducer.devicesadd,
            erroCadastro: state.AutenticacaoReducer.erroCadastro,
            loading_cadastro: state.AutenticacaoReducer.loading_cadastro,
           
        }
    );
}

export default connect(
    mapStateToProps,
    {
        modificaEmail,
        modificaSenha,
        modificaNome,
        modificaDeviceadd,
        cadastroUsuario
    }
)(formCadastro);

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