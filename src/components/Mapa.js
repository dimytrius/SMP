import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import MapView, { ProviderPropType, Marker, AnimatedRegion } from 'react-native-maps';
import { action } from 'mobx';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -13.00459;
const LONGITUDE = -38.48604;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Mapa extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,
            }),
                device:'',
                status:'',
                temperatura:'',
                bateria:''
            
            
        };
    }
    componentWillMount(){
        var database = firebase.database().ref('tcc/3F1D95').limitToLast(10);
        database.on('child_added', (snapshot) => {
            var bateria = snapshot.val().battery;
            var device = snapshot.val().device;
            var status = snapshot.val().status;
            var temperatura = snapshot.val().temperature;
            this.setState({ device: device, status: status, temperatura: temperatura, bateria: bateria });
 
        })
    }
    
    voltar() {
        Actions.principal();
    }
    grafico(){
        Actions.grafico();
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                
                
                        

                    <Marker coordinate={this.state.coordinate}
                            >
                        <MapView.Callout tooltip={true} style={styles.customView}
                            onPress={() => this.grafico()}
                        >
                        <View style={styles.bubble}>

                        <Text>Device: {this.state.device}</Text>
                        <Text>Status:{this.state.status}</Text>
                        <Text>Bateria:{this.state.bateria}%</Text>
                        <Text>temperatura:{this.state.temperatura}</Text>
                        <Text>Precisão: 30m</Text>
                        </View>
                        </MapView.Callout>
                    </Marker>
                   
                    

                    
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.voltar()}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
    
    );
    }
}



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    bubble: {
        width: 170,
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#4db8ff',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 6,
        borderColor: 'transparent',
        borderWidth: 0.5,
        opacity: 0.70,
    },
});

export default Mapa;