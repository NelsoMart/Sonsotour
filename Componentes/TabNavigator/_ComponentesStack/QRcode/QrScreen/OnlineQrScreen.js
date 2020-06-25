
//This is an example code to Scan QR code//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Linking, TouchableHighlight, 
  PermissionsAndroid, Platform, Dimensions,
  StyleSheet, Image} from 'react-native';
// import all basic components
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
//import CameraKitCameraScreen we are going to use.

//para img info QR
//import Image from 'react-native-scalable-image';

//! NO USAR ESTE CÓDIGO SI SE PRETENDE CORRER PARA IOS (usando el cliente).
//! CREAR OTRA INTERFAZ SENCILLA PARA CORRER O CONFIRURAR LOS ARCHIVOS IOS CORRESPONDIENTES



export default class OnlineQrScreen extends Component {
  constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false, //*rea false por default
    };

    console.disableYellowBox = true;


  }
  onOpenlink() {
    //Function to open URL, If scanned 
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }

  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
  }

  onOpneScanner() {
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'TuristApp Permisos de Cámara',
              'message': 'TuristApp necesita acceder a tu Cámara'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
          } else {
            alert("Permisos de CÁMARA denegados");
          }
        } catch (err) {
          alert("Error al conceder los permisos de Cámara",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ opneScanner: true });
    }    
  }

  onBottomButtonPressed(event) { // evento que cierra la cámara que lee qr
    if (event.type === 'left') {
      this.setState({ opneScanner: false });
    }
  }

  render() {
    let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.opneScanner) {
      return (
        <View style={styles.container}>  
        <Image style = {{resizeMode:'contain', alignSelf: 'center',width:70, height:70, overflow:"visible"}}
           source={require('../../../../../img/sonsonate.png')}  // style={styles.imagen}    
                 />
        <Text style={{fontSize:20, textAlign: 'center', alignSelf: 'center'}}>
        Escanea el código QR en los sitios turísticos    
        de la ciudad de Sonsonate, y sumérgete en su historia...
       
        </Text>
         
            <Text style={styles.simpleText}>{this.state.qrvalue ? 'El Código QR escaneado es: '+this.state.qrvalue : ''}</Text>

            {  

    //Todo: direcciones a la lectura del código QR: irá a ese sitio.
      
    this.state.qrvalue.includes("a"||"b"||"c"||"d"||"e"||"f"||"g"||"h"||"i"||"j"||"k"||"l"||"m"||"n"||"o"||"p"||"q"||"r"||'s'||"t"||"u"||"v"||"w"||"x"||"y"||"z") ? 
                   this.props.navigation.navigate('OnlineQRH_Screen',{
                       CodigoQR: this.state.qrvalue
                   })
     
     :this.state.qrvalue.includes("http") ? 
                   this.props.navigation.navigate('OnlineQRH_Screen',{
                       CodigoQR: this.state.qrvalue
                   })
             : this.state.qrvalue.includes("https") ? 
                this.props.navigation.navigate('OnlineQRH_Screen',{
                       CodigoQR: this.state.qrvalue
                   })
  
                   : null
                  
          }
            <TouchableHighlight
              onPress={() => this.onOpneScanner()}
              style={styles.button}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                Escanear Código QR
                </Text>
            </TouchableHighlight>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen

       actions={{ leftButtonText: 'X' }}//para cancelar la cámara
       onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
          showFrame={false} //estaba en false por default
          //Show/hide scan frame-
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'#FFDEAD'}
               //*  laserColor={'blue'} por defecto
          //Color can be of your choice
          frameColor={'yellow'}
          //
          //frameSize={100}
          //If frame is visible then frame color
          colorForScannerFrame={'grey'}
          //marginTop={-100}
             //*colorForScannerFrame={'black'} era por defecto
          //Scanner Frame color
             // offsetForScannerFrame = {2000} 
             // heightForScannerFrame = {2000} 
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 10, 
    alignSelf: 'center', 
    padding: 5, 
    marginTop: 5
  }
});
