import React, { Component } from 'react';
import {
    View, Text, TextInput, Button, TouchableHighlight, StyleSheet, ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';


class FormLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });

    }


    render() {
        return (
            <ImageBackground style={styles.back} source={require('../img/bg.jpg')}>
                <View style={styles.container}>
                    <View style={{ flex: 4 }}>
                       
                    </View>
                    <View style={styles.containerForm}>
                
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
                        <TouchableHighlight onPress={() => Actions.formCadastro()} >
                            <Text style={{ color: '#fff', fontSize: 18 }}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    
                    <Text style={{ color: '#ff0000', fontSize: 15 }}>{this.props.loginerro}</Text>
                    <View style={{ flex: 2 }}>
                        <Button title='Acessar' color='#fff' onPress={() => this._autenticarUsuario()} />
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}

const mapStateToProps = state => ({

    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    loginerro: state.AutenticacaoReducer.loginerro


})



export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);


const styles = StyleSheet.create({
    containerForm: {
        flex: 2,
        padding: 20,
        backgroundColor: 'transparent'
    },
    back:{
        flex:1,
        width:null
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