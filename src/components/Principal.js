import React, {Component} from 'react';
import {
    View, Text, Button, ImageBackground,StyleSheet,TextInput,ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import b64 from 'base-64';
import { connect } from 'react-redux';
import ActionBar from 'react-native-action-bar';
import DrawerLayout from 'react-native-drawer-layout';
import PTRView from 'react-native-pull-to-refresh';
import Menu from './Menu';


class Principal extends Component{


    constructor(props){
        super(props);
        this.state={
            devicearray:[],
            corrente:'',
            quantidadedevices:'',
            drawerClosed: true,
            
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.setDrawerState = this.setDrawerState.bind(this);
    }

   

    setDrawerState() {
        this.setState({
            drawerClosed: !this.state.drawerClosed,
        });
    }

    toggleDrawer = () => {
        if (this.state.drawerClosed) {
            this.DRAWER.openDrawer();
        } else {
            this.DRAWER.closeDrawer();
        }
    }
   

     componentDidMount(){
         
         const { currentUser } = firebase.auth();
         let emailUsuarioB64 = b64.encode(currentUser.email);
         var database = firebase.database().ref(`/usuarios/${emailUsuarioB64}/NumeroDevices/`);
         
         
         database.on('value',(snapshot)=>{
            
         var device = snapshot.val().devices; 
         this.setState({quantidadedevices:device});
         var arraydevicesloc = Array(device);  
         console.log(device);
         for(var i=0; i < device; i++){
             var database = firebase.database().ref(`/usuarios/${emailUsuarioB64}/Dev/${i}/`);
                database.on ('value', (snapshot) => {
                arraydevicesloc[i] = snapshot.val().Estado;
                    console.log(arraydevicesloc[i]); 
                    this.setState({
                        devicearray: [arraydevicesloc[i]]
                    })
                
         })
         }
            
         })
         
         }
             
                 
            
         

    
    
    render(){
        return(

            <DrawerLayout
                drawerWidth={300}
                ref={drawerElement => {
                    this.DRAWER = drawerElement;
                }}
                drawerPosition={DrawerLayout.positions.left}
                onDrawerOpen={this.setDrawerState}
                onDrawerClose={this.setDrawerState}
                renderNavigationView={() => <Menu/>}
            >
                <ActionBar
                    containerStyle={styles.bar}
                    backgroundColor="#000000"
                    leftIconName={'menu'}
                    onLeftPress={this.toggleDrawer} />

            

            <ImageBackground style={styles.back} source={require('../img/bg.jpg')}>
                <Text style={styles.title}>Numero de Devices:{this.state.quantidadedevices}</Text>
                    
                    
                
                
            </ImageBackground>
            </DrawerLayout>
        );
    }

}



mapStateToProps = state => ({
    numero_devices: state.AppReducer.numero_devices,
})

export default connect(mapStateToProps,null)(Principal);



const styles = StyleSheet.create({

    title: {
        color: '#FFF',
        fontSize: 25,
        paddingTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
    },
    back: {
        flex: 1,
        width: null
    },
    screen: {
        backgroundColor: '#00008B',
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        //padding: 10
    },  
    
  
});