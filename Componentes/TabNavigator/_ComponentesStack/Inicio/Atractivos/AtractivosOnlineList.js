
import React, {Component} from 'react';

//! ¿ Y SI HAY CONEXIÓN A INTER,  Y PASA DE LA ANIMACIÓN PARA CARGAR LA IMAGEN
//! PERO OCURRE QUE LA CONEXIÓN ES DEMACIADO DÉBIL PARA CARGAR LA LISTA ?
// ! LO QUE OCURRIRÁ ES QUE LA PANTALLA QUEDARÁ EN BANCO HASTA CARGAR LA LISTA;
//! SI NO LOGRA CARGARLA, SE QUEDARÁ EN BLANCO HASTA QUE EL USUARIO
//! DESLICE HACIA ABAJO PARA RECARGAR LA LISTA O HASTA REINICIAR LA APP.
//TODO: SE SUGIERE UN TEXTO DE FONDO QUE INDIQUE QUE ESTÁ CARGANDO LA LISTA.
//* YA SE IMPLEMENTÓ UNA SOLUCIÓN TEMPORAL, CON UN SPINNER QUE CARGA DURANTE
//* UNOS 7 SEGUNDOS, PERO CARGA INDEPENDIANTEMENTE SI TARDA O NO EN CARGAR LA LISTA

//! Y SI EL USUARIO DESCONECTA LOS DATOS O EL WIFI MIENTRAS ESTÁ EN LA
//! ANIMACI8ÓN DE LOADING?
//! LO QUE OCURRIRÁ ES QUE SE QUEDARÁ CARGANDO HASTA QUE EL USUARIO REINICIE LA APP
//TODO: SE SUGIERE ES QUE SE IMPLEMENTE UNA OPCIÓN PARA RECARGAR, O UN MENSEJE
//TODO: TIPO ALERT O TOAST PARA INDICAR QUE NO HAY CONEXIÓN A INTERNET.
//* YA SE IMPLEMENTÓ TEMPORALMENTE UNA SOLUCIÓN, CON UNA TOAST QUE
//* INDICA QUE HUBO UN CAMBIO EN LA CONEXIÓN, YA SEA SI SE DESCONECTA LA SEÑAL
//* O SI ÉSTA VUELVE A CONECTARSE. 

import {StyleSheet,Text, ActivityIndicator, 
  Dimensions, View,FlatList,TouchableOpacity, TouchableHighlight,
  RefreshControl, Alert, Button, ToastAndroid} from 'react-native';

 // import {TouchableHighlight} from 'react-native-gesture-handler';

  import Image from 'react-native-scalable-image';

  //* Tast 1
  // import Toast, {DURATION} from 'react-native-easy-toast'; // quitar

   //* Tast 2
   import Toast from 'react-native-tiny-toast';

  //* Beautifull Loader gift
import Lottie from 'lottie-react-native';
import avionAnimation from '../../../../../avionAnimation';
import forPointAnimation from '../../../../../forPointAnimation';
import circlePointsAnimation from '../../../../../circlePointsAnimation'
import SafeAreaView from 'react-native-safe-area-view'; // era para envolver la animación proporcionada por Lottie, pero al finla usé un View

//* NetInfo
import NetInfo from "@react-native-community/netinfo";
// import * as NetInfo from "@react-native-community/netinfo";
// const NetInfo = require("@react-native-community/netinfo")

 
// Subscribe
const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});
 
// Unsubscribe
unsubscribe();

export default class AtractivosOnlineList extends Component{


  constructor() {
    super();
    this.state = {
      data:[],
      refreshing: true,
      isLoading: true,
      connection_Status: '',
      loadingDisable: false,

      DefaultSpinner: true, // para el spinner default ActivityIndicator

      visivilidadToast: false, // para el Toast
    }
   this.unsubscribe = null  // quitar esto

  }

  finActivityIndicator = () => {
    setTimeout(() => { //! activity indicator // funciona para mostrarse cuando están cargando los atractivos
      // Alert.alert('Oops!');
      this.setState({ DefaultSpinner: false })
    }, 15000);
  }


  // showToast = () => {
  //   // ToastAndroid.showWithGravityAndOffset(
  //   //   "Hello World !!",
  //   //   ToastAndroid.LONG,
  //   //   ToastAndroid.BOTTOM,
  //   //   25,
  //   //   50
  //   // );

  //  // this.refs.toast.show('hey bro!', DURATION.FOREVER);
  // };

  fetchData= async()=>{          
   // const response = await fetch('https://raw.githubusercontent.com/NelsoMart/eventos/master/eventos.json'); //! de github

  //  const response = await fetch('http://192.168.43.19:8081/crud_reactnative/laravel_view_menuInicio.php'); //! de arhivito local

      const response = await fetch('https://appturistica07.000webhostapp.com/laravel_view_menuInicio.php'); //! de la bd online original

    const eventos = await response.json();
    this.setState({
      data: eventos,
      refreshing: false,
          //Setting the data source for the list to render
         // dataSource: responseJson,
       isLoading: false, //! al volverse falso, el spinner de "Cargando..." se quita. Eso es una de tantas 
     //  loadingDisable: false,
    });
  
  }


// componentDidMount(){ //! método antiguo
//   this.fetchData();
// }



  componentDidMount() { //! método nuevo 
                    //todo: usando NetInfo

  // NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

  // NetInfo.isConnected.fetch().done((isConnected) => {
  //   if (isConnected == true) {
  //     this.fetchData();
  //     this.setState({ connection_Status: "Online" });
      
  //   }
  //   else {
  //     this.setState({ connection_Status: "Offline" });
  //   }
  // });

  NetInfo.addEventListener(this.handleConnectivityChange);
   this.fetchData();
  // The fetch is not needed as the listen will send the current state when you subscribe to it

  }
  
  
  componentWillUnmount() { //todo: usando NetInfo
  this.fetchData();
 // this.unsubscribe();
  }
  
  handleConnectivityChange = (isConnected) => {
  if (isConnected == true) {
    this.setState({ connection_Status: "Online" });
    this.setState({ loadingDisable: true });
    this.fetchData();

  }
  else {
    this.setState({ connection_Status: "Offline" });
    // this.setState({ loadingDisable: true });
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
  
   NoHayConexion = () => {

    //Alert.alert('','Se produjo un cambio en la conexión de la red')
   // this.state.visivilidadToast = true
   const toast = Toast.showLoading('Detectando cambios en la Red...')
  setTimeout(() => {
  // Recommend
   Toast.hide(toast) 
  // or Toast.hide()
  // If you don't pass toast，it will hide the last toast by default.
 }, 3000)

}

Bonjour(nombre, Etiqueta, IDDependencia, imgSitio, imgSitio2, imgSitio3, texto, titulo, descripcMapa, latitude, longitude) {
  
  if (this.state.connection_Status == 'Offline' && Etiqueta != '_unique'){

        Alert.alert(' ', 'No puedes acceder a los sitios fuera de línea')

  } else { //? si hay conexión a internet:

    if(Etiqueta != '_unique'){ //* si el item contiene subItems 

      this.props.navigation.navigate('SubListAtractivos',{
        nombre: nombre, //Tradiciones
        Etiqueta: Etiqueta, //_tradiciones
        // SubEtiqueta: SubEtiqueta,// null  
        IDDependencia: IDDependencia,// 1           
      })

    }else{ //* si es un item del menú que lleva un sólo sitio (como playa)
      this.props.navigation.navigate('AtractivoScreen',{
        nombre: nombre,
      //  Etiqueta: Etiqueta,
        imgSitio: imgSitio,
        imgSitio2: imgSitio2,
        imgSitio3: imgSitio3,
        texto: texto,
        titulo: titulo,
        descripcMapa: descripcMapa,
        latitude: latitude,
        longitude: longitude       
       })
     }

   }
    
}

onRefresh() {
  //Clear old data of the list
  this.setState({ data: [] });
  //Call the Service to get the latest data
  this.componentDidMount();
  //this.setState({loadingDisable: false})
  
}

  render() {
    //* si hay conexión a internet:
    if (this.state.connection_Status == 'Online' || this.state.loadingDisable) {

    // unsubscribe(); // son importantes
      this.state.loadingDisable=true // son importantes
    return (
      this.state.isLoading
      ?
      // //loading view while data is loading
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //   <ActivityIndicator size = "large" color = "#skyblue" animating />
      // </View>
   <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
       <Lottie resizeMode= "contain" style={{width:700, height: 120}} 
            autoSize source={forPointAnimation} autoPlay loop />
       <Text style = {{color:'grey', fontFamily: 'Arial',
        fontWeight:'bold', fontSize: 17}}>
           C A R G A N D O . . .
       </Text>

       { //! Toast para cambio en la red
        this.state.connection_Status == "Offline" ?
      this.NoHayConexion()
       //this.showToast() 
      // this.state.visivilidadToast= true      
     // Toast.show('This is a default toast')
        :
        null
       }
       
       {/* <Toast ref="toast"/> */}

       
       <Text style = {{color:'grey', margin:15,
                     textAlign:'center', fontSize: 17}}>
           Sonsonate posee sitios turísticos geniales para visitar.
             En unos momentos podrás visualizarlos.
       </Text>

       <TouchableHighlight style={styles.Recargar}
       onPress={this.onRefresh.bind(this)} >
           <Text style={{color:'#C0C0C0'}}>Recargar</Text>
           </TouchableHighlight> 
   </View>
  


      : //?estos dos puntos deben ir; son parte la condición if
  
 //* return (

    //Returning the ListView
<View style={styles.MainContainer}>
{/* <Text style={styles.text}>Cargando</Text> */}
      <FlatList
        //ItemSeparatorComponent={this.ListViewItemSeparator}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}
  
        renderItem={({ item }) => (

     <TouchableOpacity
     //onPress = {() => ToastAndroid.show(item.Nombre, ToastAndroid.SHORT)}
     style ={{flex:1, flexDirection:'row', marginBottom:3}}
        onPress = {this.Bonjour.bind(this,
           item.nombre, //necesario para el segundo filtro
           item.Etiqueta,
         //  item.SubEtiqueta,  // campo ya no existe en la bd
           item.IDDependencia, //necesario para el segundo filtro   
           item.imgSitio,
           item.imgSitio2,
           item.imgSitio3,
           item.texto,
           item.titulo,
           item.descripcMapa,
           item.latitude,
           item.longitude
              )} >
       <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
               source = {{ uri: item.imagen}} //style={styles.imageViewContainer}
                 />        
     </TouchableOpacity>
   )}


        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={this.state.refreshing
            }
            onRefresh={this.onRefresh.bind(this)}    
          />
        }/>

{ this.finActivityIndicator() //? para llamar al metodo que caduca el ActivityIndicator
   }
{ // este spinner se muestra cuando se está cargando la lista de sitios turisticos.
  this.state.DefaultSpinner?
   <View style={[styles.containerViewAcInd, styles.horizontalActivIndic]}>
      <ActivityIndicator size="small" color="skyblue"
      animating = {this.state.DefaultSpinner} />
   </View>
   :
   null
  }
    </View>
  );

   } else //if (this.state.connection_Status == 'Offline' /*&& !this.state.loadingDisable*/)
   {
    return (
      <View style={styles.container}>
         <Text style={styles.text}>
            Se Produjo un error al recuperar los datos. 
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
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    //justifyContent: 'center',
    flex: 1,
    // backgroundColor: 'skyblue'
    backgroundColor: '#ffff',
    marginTop: 3,
  },
  rowViewContainer: {
    fontSize: 20,
    padding: 10,
  },

   container: {  
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

   //! Styles for activityIndicator
   containerViewAcInd: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontalActivIndic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },

});
