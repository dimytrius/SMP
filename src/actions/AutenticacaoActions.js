import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    MODIFICA_EMAIL, MODIFICA_SENHA, MODIFICA_NOME, CADASTRA_USUARIO, ERRO_CADASTRO, AUTENTICAR_USUARIO, NUMERO_DEVICEADD
} from './types'
import b64 from 'base-64';

export const modificaEmail = (texto) => {
    console.log(texto);
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    console.log(texto);
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    console.log(texto);
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const modificaDeviceadd = (texto) => {
    console.log(texto);
    return {
        type: NUMERO_DEVICEADD,
        payload: texto
    }
}

export const autenticarUsuario = ({ email, senha }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => UsuarioSucesso(dispatch))
            .catch(erro => UsuarioErro(erro, dispatch));
    }
}

export const cadastroUsuario = ({ nome, devicesadd, email, senha}) => {

    return dispatch => {

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                console.log(email);
                console.log(senha);
                console.log(devicesadd);
                console.log(nome);
                var deviceaddint = parseInt(devicesadd);
                let emailb64 = b64.encode(email);
                console.log(emailb64);
                for (let i = 0; i < deviceaddint; i++){
                    firebase.database().ref(`/usuarios/${emailb64}/Dev/${i}/`)
                        .set({
                            Estado: 'Ligado'
                        })
                }
                firebase.database().ref(`/usuarios/${emailb64}/Nome/`)
                    .set({
                        nome:nome
                        })
                firebase.database().ref(`/usuarios/${emailb64}/NumeroDevices/`)
                    .set({
                        devices: devicesadd
                    })
                    
                    .then(value => cadastroUsuarioSucesso(dispatch))
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));

    }

}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'sucesso' });
    Actions.boasVindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: ERRO_CADASTRO, payload: erro.message });
}


const UsuarioSucesso = (dispatch) => {
    dispatch({ type: 'sucesso' });
    Actions.boasVindas();
}

const UsuarioErro = (erro, dispatch) => {
    dispatch({ type: AUTENTICAR_USUARIO, payload: erro.message });
}