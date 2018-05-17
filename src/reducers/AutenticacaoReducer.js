import {
    MODIFICA_EMAIL, MODIFICA_SENHA, MODIFICA_NOME, ERRO_CADASTRO, AUTENTICAR_USUARIO, NUMERO_DEVICEADD
} from '../actions/types';

const INITIAL_STATE = {

    nome: '',
    email: '',
    senha: '',
    devicesadd:'',
    cadastroerro: '',
    loginerro: ''

}

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case NUMERO_DEVICEADD:
            return { ...state, devicesadd: action.payload }
        case ERRO_CADASTRO:
            return { ...state, cadastroerro: action.payload }
        case AUTENTICAR_USUARIO:
            return { ...state, loginerro: action.payload }
        
        default:
            return state;

    }

}