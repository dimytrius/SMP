import firebase from 'firebase';
import b64 from 'base-64';
import { MODIFICA_ADICIONA_DEVICE, ADICIONA_CONTATO_ERRO, NUMERO_DEVICE } from './types';
import { Actions } from 'react-native-router-flux';

export const modificaAdicionaDevice = (texto) =>{
    console.log('chegamos aqui');
    console.log(texto);
    return{
        type:MODIFICA_ADICIONA_DEVICE,
        payload:texto
    }
}

export const modificaNumerodevice = (texto ) =>{
    return {
        type: NUMERO_DEVICE,
        payload: texto
    }
}

export const adicionaDevice = ({ adicionar_device})  =>{
    
    return  dispatch => {
        
        const { currentUser } = firebase.auth();
        console.log(currentUser.email);
        let emailUsuarioB64 = b64.encode(currentUser.email);
        console.log(emailUsuarioB64);
        console.log(adicionar_device);
        var deviceaddint = parseInt(adicionar_device);
        
        for (let i = 0; i < deviceaddint; i++) {
            firebase.database().ref(`/usuarios/${emailUsuarioB64}/Dev/${i}/`)
                .set({
                    Estado: 'Ligado'
                })
        }
                
                firebase.database().ref(`/usuarios/${emailUsuarioB64}/NumeroDevices`)
                    .set({
                        devices: adicionar_device,
                        //nome:nome
                    })        
        
                }
    
}
