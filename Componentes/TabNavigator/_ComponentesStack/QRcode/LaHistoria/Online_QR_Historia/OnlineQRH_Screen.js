
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ActivityIndicator, Dimensions,
  View,FlatList,TouchableOpacity, RefreshControl, 
  Alert, ScrollView, Image as MyImage, Linking} from 'react-native';

import {TouchableHighlight} from 'react-native-gesture-handler';

import Image from 'react-native-scalable-image';

import Carousel from 'react-native-carousel-view';

 //* Beautifull Loader gift
import Lottie from 'lottie-react-native';
import avionAnimation from '../../../../../../avionAnimation';
import forPointAnimation from '../../../../../../forPointAnimation';
import circlePointsAnimation from '../../../../../../circlePointsAnimation';
import bookAnimation from '../../../../../../book';
import sadSearchAnimation from '../../../../../../sad-search';
import caritaTristeAnimation from '../../../../../../carita-triste-animation'

//* NetInfo
import NetInfo from "@react-native-community/netinfo";


  // Subscribe
const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});
 
// Unsubscribe
unsubscribe();

export default class OnlineQRH_Screen extends Component {

  //todo: ESTA LISTA MOSTRARÁ LOS ITEMS DEL MENÚ CON UNA DEPENDENCIA DE 2

  static navigationOptions = ({ navigation }) => ({ //* full response 

    title:  'Historia'//String(navigation.state.params.nombre) 
         //  String(navigation.state.params.Etiqueta)+ 
    });


    MetodoMapa(titulo, descripcMapa, latitude, longitude){
      this.props.navigation.navigate('Maps',
      {
        titulo: titulo,
        descripcMapa: descripcMapa,
        latitude: latitude,
        longitude: longitude

        }
       )
    }

  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: true,
      isLoading: true,
      connection_Status: '',
      loadingDisable: false,
     // myTexto: null
    }
  // this.unsubscribe = null  // quitar esto
  }

  fetchData= async()=>{
  //! OJO AQUÍ CON EL CAMBIO DE DISPOSITIVO 
  
    // const response = await fetch('http://192.168.43.66:8081/crud_reactnative/laravel_View_QrInfo.php' //TODO: #VeryKool

    // const response = await fetch('http://192.168.43.19:8081/crud_reactnative/laravel_View_QrInfo.php'    //TODO: #SamsJ1Mi 

     const response = await fetch('https://appturistica07.000webhostapp.com/laravel_View_QrInfo.php'  //! de la bd online original

   ,{
    method: 'POST',  
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
    body: JSON.stringify({   
        CodigoQR: this.props.navigation.state.params.CodigoQR
    })
//   .then(response => response.json())
//   .then(responseJson => {
//  Alert.alert('Hey Found!!', responseJson);
// })

  }

 ); //! de arhivito local


    // const response = await fetch('http://appturistica07.000webhostapp.com/api/v1/eventos'); //! de la bd online original

    const QrDatos = await response.json();
    //var textTo = QrDatos;
    this.setState({
      data: QrDatos,
      //myTexto: textTo,
      refreshing: false,
       //Setting the data source for the list to render
       // dataSource: responseJson,
          isLoading: false,
    });
  
  }


componentDidMount() { //! método nuevo 
  //todo: usando NetInfo
NetInfo.addEventListener(this.handleConnectivityChange);
this.fetchData();
// The fetch is not needed as the listen will send the current state when you subscribe to it

}


componentWillUnmount() { //todo: usando NetInfo
this.fetchData();
}


handleConnectivityChange = (isConnected) => {
if (isConnected == true) {
this.setState({ connection_Status: "Online" });
this.setState({ loadingDisable: true });
this.fetchData();

}
else {
this.setState({ connection_Status: "Offline" });
}
};

handleConnectivityChange = state => { // esto se activa cuando, después de un error de red, se recupera
if (state.isConnected) {
// Alert.alert('online');
this.setState({connection_Status: 'Online'});
this.setState({ loadingDisable: true });
// this.setState({connection_Status: 'Online'});
this.fetchData();
// this.unsubscribe();
} else {
// Alert.alert('offline');
this.setState({connection_Status: 'Offline'});
}
};


onRefresh() {
  //Clear old data of the list
  this.setState({ data: [] });
  //Call the Service to get the latest data
  this.componentDidMount();
}

onOpenlink() {
  //Function to open URL, If scanned 
 Linking.openURL(this.props.navigation.state.params.CodigoQR);
  //Linking used to open the URL in any browser that you have installed

 // this.props.navigation.navigate('OnlineQrScreen');
}

  render() {

    if (this.props.navigation.state.params.CodigoQR.includes("http")
    || this.props.navigation.state.params.CodigoQR.includes("https")){ //!!!!!!!!!!!!

  return(
<ScrollView>
<View style={{ marginBottom: 15, flex:1, justifyContent:'center', alignItems:'center' }}>

<Lottie resizeMode= "contain" style={{width:700, height: 300}} 
       autoSize source={sadSearchAnimation} autoPlay loop />

     <Text style = {{color:'grey', fontFamily: 'Arial',
             fontWeight:'bold', fontSize: 17, textAlign: "center"}}>
        Has escaneado un código QR que no pertenece a ningún Sitio Turístico 
        de Sonsonate. {'\n\n'}

        Aún puedes elegir abrir este link en el navegador 
        de tu preferencia, si así lo deseas:
     </Text>

     <TouchableHighlight //style={{marginBottom:"10%"}}
                onPress={() => this.onOpenlink()}
                style={styles.buttonTextOpenQrLink}>
                  <Text style={{ color: '#ffff', fontSize: 12 }}>Abrir Link</Text>
     </TouchableHighlight>

  </View>
</ScrollView>

  );
     
} else {
    
   if (this.state.connection_Status == 'Online' || this.state.loadingDisable) {

     // unsubscribe(); // son importantes
      this.state.loadingDisable=true // son importantes
    return (
      this.state.isLoading
      ?

   <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>

       <Lottie resizeMode= "contain" style={{width:700, height: 300}} 
            autoSize source={bookAnimation} autoPlay loop />

            <Text style = {{color:'grey', fontFamily: 'Arial',
                  fontWeight:'bold', fontSize: 17}}>
                 C A R G A N D O . . . 
            </Text>
            
   </View>

      : //? estos dos puntos deben ir; son parte la condición if

  <View style={styles.MainContainer}>
  
      <FlatList
        //ItemSeparatorComponent={this.ListViewItemSeparator}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}

   renderItem={({ item }) => (
    <View>
    <ScrollView>
    <View style = {styles.container}> 
        <Carousel
          // width={375} //* con esto activo, aparecen márgenes incómodos 
            height={253}
            delay={2000}
            indicatorAtBottom={true}
            //indicatorSize={10}
           // indicatorText="◙"
            adjustsFontSizeToFit ={true}//colocado por mí
            indicatorColor="skyblue"
            animate ={false} // esto comentado hace que se desplace automáticamente
          >
            <View style={styles.contentContainer}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                source = {{ uri: item.imagen }} /> 
            </View>

            {/* <View style={styles.contentContainer}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                source = {{ uri: item.imagen }} />

            </View>

            <View style={styles.contentContainer}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                source = {{ uri: item.imagen }} />
            </View> */}

       </Carousel>
     </View>

     <View /* nombre */ >
         <Text style={[styles.TextNombreStyle, styles.TextParrafoStyle]}>
            {item.nombre}
         </Text>
      </View>

       <View /* //! texto */ >
         <Text style={styles.TextParrafoStyle}>
            {item.textoQR}
         </Text>
      </View>

      { 
         //! Validación del botón del mapa, que mostrará el botón sólo si tanto 'latitude' como 'longitide' no vienen null de la bd
        ((item.latitude==null || item.latitude=='')
          ||(item.longitude==null || item.longitude==''))?

           null
         :
      <View /* //! Botón del Mapa */ >

         <TouchableOpacity activeOpacity={.5} style = {styles.TouchableOpacityStyle}
                              onPress={this.MetodoMapa.bind( // función un poco distinta al resto de funciones que llaman al mapa
                                this,
                                item.titulo,
                                item.descripcMapa,
                                item.latitude,
                                item.longitude,
                              )} >

            <MyImage source={require('../../../../../../img/localization_icon.png')} 
                  style={{height:30, width:30, overflow:"visible", marginStart: '33%'}} /> 
          
           <Text style={{fontSize:20,color:'white'}}> Mapa </Text>

        </TouchableOpacity>

      </View>
    }

     </ScrollView>
  </View>
               
 )}

        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }

     /*fin FlatList*/     
     />

    </View>
   );
  
 } else {

    return (
    <View style={styles.containerErrNetwork}>

<Lottie resizeMode= "contain" style={{width:300, height: 100}} 
       autoSize source={caritaTristeAnimation} autoPlay loop />

       <Text style={styles.text}>
          No puedes acceder al contenido histórico de este sitio turístico.
           Parece que no estás conectado a Internet. 
       </Text>
      {/* <Text style={styles.text}> Esto ocurre porque tú estás {this.state.connection_Status} </Text>  */}

      <TouchableHighlight style={styles.Recargar}
           onPress={this.onRefresh.bind(this)} >
         <Text style={{color:'#C0C0C0'}}>Tocar para reintentar</Text>
         </TouchableHighlight> 

    </View>
   );

}

}//* fin else condition http

  }//*fin render
}//* fin default class




const styles = StyleSheet.create({

  MainContainer: {
    //justifyContent: 'center',
    flex: 1,
    // backgroundColor: 'skyblue'
    backgroundColor: '#ffff'
   // marginTop: 2,
  },

container: {  
 flex: 1,    
//  justifyContent: 'center',    
//  alignItems: 'center',    
//  backgroundColor: '#ECF0F1',  
},  

containerErrNetwork: {  
  flex: 1,    
  justifyContent: 'center',    
  alignItems: 'center',    
  backgroundColor: '#ECF0F1',  
 }, 
text: { // para texto que dice que no hay internet
 textAlign: 'center',
 fontSize: 18,
 padding: 12, 
 color: 'gray',
},
lottie: {    
 width: 100,    
 height: 100,  
},

Recargar: {
 borderRadius:7,
 marginTop:20
},

TextNombreStyle:{
fontWeight: "bold"
},

TextParrafoStyle: { // para texto de párrafos
  fontSize: 20,
  //textAlign: "center",
  justifyContent: 'space-around',
  margin: '4%',
  //fontWeight: "bold",
  fontFamily:'verdana'
},


TouchableOpacityStyle:{
  paddingTop: 10,
  //padding: 30,
  paddingBottom: 10,
  borderRadius: 25,
  marginBottom: '4%',
  marginTop: '7%',
  width: '90%',
  flexDirection:'row',
  backgroundColor: '#00bcd4',
  alignSelf: 'center'
},

buttonTextOpenQrLink: {
  alignItems: 'center',
  backgroundColor: '#2c3539',
  padding: 10,
  width:300,
  marginTop:16
},

}); 
