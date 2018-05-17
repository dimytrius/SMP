import { MODIFICA_ADICIONA_DEVICE, ADICIONA_CONTATO_ERRO, NUMERO_DEVICE} from '../actions/types';

const INITIAL_STATE = {
    adicionar_device:'',
    cadastro_resultado_txt_erro:'',
    numero_devices:''
};


export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case MODIFICA_ADICIONA_DEVICE:
            return{...state, adicionar_device: action.payload}
        case ADICIONA_CONTATO_ERRO:
            return{...state, cadastro_resultado_txt_erro:action.payload}
        case NUMERO_DEVICE:
            return{...state,numero_devices:action.payload}
        default:
            return state;

    }

}