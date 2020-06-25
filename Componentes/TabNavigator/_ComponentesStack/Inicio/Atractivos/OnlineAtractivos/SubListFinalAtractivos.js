
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ActivityIndicator, Dimensions,
  View,FlatList,TouchableOpacity, RefreshControl, Alert} from 'react-native';

  import Image from 'react-native-scalable-image';

  //* Beautifull Loader gift
import Lottie from 'lottie-react-native';
// import avionAnimation from '../../../../../../avionAnimation';
// import forPointAnimation from '../../../../../../forPointAnimation';
import circlePointsAnimation from '../../../../../../circlePointsAnimation';

//* NetInfo
import NetInfo from "@react-native-community/netinfo";




  // Subscribe
const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});
 
// Unsubscribe
unsubscribe();

export default class SubListFinalAtractivos extends Component {

  //todo: ESTA LISTA MOSTRARÁ LOS ITEMS DEL MENÚ CON UNA DEPENDENCIA mayor a 2

  static navigationOptions = ({ navigation }) => ({ //* full response 

    title:  String(navigation.state.params.nombre), //+ //Tradiciones    // Festividades
          //  String(navigation.state.params.Etiqueta)+ //_tradiciones   // _tradiciones
          //   String(navigation.state.params.SubEtiqueta) + //null     // _festividades
          //   String(navigation.state.params.IDDependencia) // 1       //  2
    });


  constructor() {
    super();
    this.state = {
      data:[],
      refreshing: true,
      isLoading: true,
      connection_Status: '',
      loadingDisable: false,

      DefaultSpinner: true, // para el spinner default ActivityIndicator
    }
  // this.unsubscribe = null  // quitar esto
  }

  finActivityIndicator = () => {
    setTimeout(() => { //! activity indicator // funciona para mostrarse antes que el Login. Es el control para cancelar el Loading
      // Alert.alert('Oops!');
      this.setState({ DefaultSpinner: false })
    }, 10000);
  }

  fetchData= async()=>{
    
    // const {Param_Tradiciones} = this.props.navigation.state.params._tradiciones
    //_tradiciones: String(this.props.navigation.state.params._tradiciones)

  //  const response = await fetch('http://192.168.43.19:8081/crud_reactnative/laravel_view_SubMenuInicio.php' //! de archivito local
      const response = await fetch('https://appturistica07.000webhostapp.com/laravel_view_SubMenuInicio.php' //! de la bd online original


   ,{
    method: 'POST',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
    body: JSON.stringify({   
     // _tradiciones: '_tradiciones'//String(this.props.navigation.state.params._tradiciones),
     Etiqueta: this.props.navigation.state.params.Etiqueta,//viene la etiqueta padre //_tradiciones // ? _tradiciones
    // SubEtiqueta: this.props.navigation.state.params.SubEtiqueta,//null // ?   _festividades
     IDDependencia: this.props.navigation.state.params.IDDependencia//1 // ?    2

     //* Nota: Al pasarle al filtro select el 'IDDependencia', se le sumará uno, porque en este nivel
         //* el IDDependencia que vino de la lista anterior es siempre dos, y se requiere que sea
         //* de tres para poder mostrar aquí el menú en nivel tres.

    })
  }

 ); //! de arhivito local

    // const response = await fetch('http://appturistica07.000webhostapp.com/api/v1/eventos'); //! de la bd online original

    const eventos = await response.json();
    this.setState({
      data: eventos,
      refreshing: false,
          //Setting the data source for the list to render
         // dataSource: responseJson,
      isLoading: false
    });
  
  }

// componentDidMount(){
//   this.fetchData();
// }

componentDidMount() { //! método nuevo 
  //todo: usando NetInfo
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



MegaMetodo (idMenu, nombre, Etiqueta, IDDependencia, sitio_idSitio, imgSitio, imgSitio2, imgSitio3, texto, titulo, descripcMapa, latitude, longitude) {
   
  if (this.state.connection_Status == 'Offline'){

    Alert.alert(' ', 'No puedes acceder a los sitios fuera de línea')

} else {

    // const suma = IDDependencia + 1 // con esto ahora siempre va a ser ter y nunca va a ser dos. ASí es imposible
  if ( /*SubEtiqueta != null*/ /* suma>2 */ sitio_idSitio != null){
  //OJO: IDDependencia siempreee será 2 aún tocando en 'Festividades'
  
  this.props.navigation.navigate('AtractivoScreen',{
    idMenu: idMenu,
    nombre: nombre,
    imgSitio: imgSitio,
    imgSitio2: imgSitio2,
    imgSitio3: imgSitio3,
    texto: texto,
    titulo: titulo,
    descripcMapa: descripcMapa,
    latitude: latitude,
    longitude: longitude 
  })
    
  } else {

    this.props.navigation.navigate('SubListAtractivos',{//*retorno a la vista anterior
      // imagen: imagen, // no debería de ir
       nombre: nombre, //         // Festividades
       Etiqueta: Etiqueta, //          // _tradiciones
     //  SubEtiqueta: SubEtiqueta, //   // _festividades  
       IDDependencia: IDDependencia, //           // 2 
       sitio_idSitio: sitio_idSitio,
     })


   } 
 }

}


onRefresh() {
  //Clear old data of the list
  this.setState({ data: [] });
  //Call the Service to get the latest data
  this.componentDidMount();
}


  render() {

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
       <Lottie resizeMode= "contain" style={{width:700, height: 300}} 
            autoSize source={circlePointsAnimation} autoPlay loop />
   </View>

      : //?estos dos puntos deben ir; son parte la condición if
  

    //Returning the ListView
<View style={styles.MainContainer}>
      <FlatList
        //ItemSeparatorComponent={this.ListViewItemSeparator}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}

        renderItem={({ item }) => (

     <TouchableOpacity
     //onPress = {() => ToastAndroid.show(item.Nombre, ToastAndroid.SHORT)}
     style ={{flex:1, flexDirection: 'row',marginBottom: 3}}
     onPress={this.MegaMetodo.bind(this,
               item.idMenu,
               item.nombre,          // 
               item.Etiqueta,        // 
             //  item.SubEtiqueta,     // 
               item.IDDependencia,   // 
               item.sitio_idSitio,
               item.imgSitio,
               item.imgSitio2,
               item.imgSitio3,
               item.texto,
               item.titulo,
               item.descripcMapa,
               item.latitude,
               item.longitude
               //suma =1,
               )}
         //onPress = {this.prueba}      
           >
             <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
            source = {{ uri: item.imagen}} //style={styles.imageViewContainer}
            />  
     
              </TouchableOpacity>
        )}


        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }/>

      { this.finActivityIndicator() //? para llamar al metodo que caduca el ActivityIndicator
         }
      {
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

} else 

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
    backgroundColor: '#ffff'
   // marginTop: 2,
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
