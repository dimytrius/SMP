import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import BoasVindas from './components/BoasVindas';
import FormLogin from './components/FormLogin';
import Principal from './components/Principal';
import FormCadastro from './components/FormCadastro';
import CadastrarDevices from './components/CadastrarDevices';
import Mapa from './components/Mapa';
export default props => (
    <Router>
        <Scene key='root'>

            <Scene key='formLogin' component={FormLogin} title='Login' hideNavBar = {true}/>
            <Scene key='boasVindas' component={BoasVindas} title='Bem-Vindo' hideNavBar={true} />
            <Scene key='formCadastro' component={FormCadastro} title='Cadastro' hideNavBar={true}/>
            <Scene key='principal' component={Principal} title='Principal' hideNavBar={true} />
            <Scene key='cadastrarDevices' component={CadastrarDevices} title='Cadastrar Devices' hideNavBar={true}/>
            <Scene key='mapa' component={Mapa} title='Mapa' hideNavBar={true} />

        </Scene>
    </Router>
)