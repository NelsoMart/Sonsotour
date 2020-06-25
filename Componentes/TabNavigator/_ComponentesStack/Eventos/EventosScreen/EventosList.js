
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, ActivityIndicator,
  View,FlatList,TouchableOpacity, RefreshControl, Alert} from 'react-native';

  //* Para animación Loading...
  import Lottie from 'lottie-react-native';
  import avionAnimation from '../../../../../avionAnimation';
  import forPointAnimation from '../../../../../forPointAnimation';
  import circlePointsAnimation from '../../../../../circlePointsAnimation'

//* NetInfo
import NetInfo from "@react-native-community/netinfo";

 import {TouchableHighlight} from 'react-native-gesture-handler';

  // Subscribe
  const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });
   
  // Unsubscribe
  unsubscribe(); 

export default class EventosList extends Component {

  // export default class TmpEventScreen extends Component { //! Antes se llamaba: 'TmpEventScreen' 

  constructor() {
    super();
    this.state = {
      data: null, //!  data:[], // estaba por default le cambié a tipo null para ver si de esta forma llegaba a tener un comportamiento diferente
      refreshing: true,
      isLoading: true,
      connection_Status: '',
      loadingDisable: false,
      formatTime: 12,
    }
  // this.unsubscribe = null  // quitar esto
  }

  fetchData= async()=>{
   // const response = await fetch('https://raw.githubusercontent.com/NelsoMart/eventos/master/eventos.json'); //! de github
  //  const response = await fetch('http://192.168.43.19:8081/crud_reactnative/laravel_view_eventos.php'); //! de arhivito local // es muy importante no olvidar que cambié el nombre del archivo php de nombre 'laravel_view_users.php' al nombre 'laravel_view_eventos.php'
    //  const response = await fetch('http://appturistica07.000webhostapp.com/api/v1/eventos'); //! de la bd online original

     const response = await fetch('https://appturistica07.000webhostapp.com/laravel_view_eventos.php'); //! de la bd online original
     

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

Ir_a_Evento (idEventos, imagen, Nombre, fecha, hora, Descripcion, titulo, descripcMapa, latitude, longitude) {

  this.props.navigation.navigate('InfoEventoScreen',{
    idEventos: idEventos,
    imagen: imagen,
    Nombre: Nombre,
    fecha: fecha,
    hora: hora,
    Descripcion: Descripcion,
    titulo: titulo,
    descripcMapa: descripcMapa,
    latitude: latitude,
    longitude: longitude
   })

}


onRefresh() {
  //Clear old data of the list
  this.setState({ data: [] });
  //Call the Service to get the latest data
  this.componentDidMount();
}


  render() {
//* Método para reemplazar las horas militares  al formato de 12H
     String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
      };

    function replaceAll(str, map) {
      //todo: Función para Hora, convertir horas
      for (key in map) {
        str = str.replaceAll(key, map[key]);
      }
      return str;
    }
    var map = { //todo: para sustituir sólos las horas >12
      "13:" : "01:",
      "14:" : "02:",
      "15:" : "03:",
      "16:" : "04:",
      "17:" : "05:",
      "18:" : "06:",
      "19:" : "07:",
      "20:" : "08:",
      "21:" : "09:",
      "22:" : "10:",
      "23:" : "11:",
      "24:" : "12:",
    };


    //! esta condición valida si hay conexión a internet, y de ser cierto, carga la Lista
    if (this.state.connection_Status == 'Online' || this.state.loadingDisable) {
   

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
      <Text style = {{color:'grey', margin:15,
                    textAlign:'center', fontSize: 17}}>
          Entérate de todos los eventos turísticos que se realizan en 
           el municipio de Sonsonate. No te pierdas de
            ninguna actividad.
      </Text>

      <TouchableHighlight style={styles.Recargar}
      onPress={this.onRefresh.bind(this)} >
          <Text style={{color:'#C0C0C0'}}>Recargar</Text>
          </TouchableHighlight> 
  </View>
      
      :   //todo: estos dos puntos deben ir; son parte la condición ternaria
  
 //* return (

    //Returning the ListView
<View style={styles.MainContainer}>
      <FlatList //! Este es el FlatList que muestra los eventos como una lista de items seleccionables
        //ItemSeparatorComponent={this.ListViewItemSeparator}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}

        renderItem={({ item }) => (
          

     <TouchableOpacity
     //onPress = {() => ToastAndroid.show(item.Nombre, ToastAndroid.SHORT)}
     style ={{flex:1, flexDirection: 'row',marginBottom: 3}}
     onPress={this.Ir_a_Evento.bind(this, //* cada uno de estos items es enviado a la siguiente vista
               item.idEventos,
               item.imagen,
               item.Nombre,
               item.fecha,
               item.hora,
               item.Descripcion,
               item.titulo,
               item.descripcMapa,
               item.latitude,
               item.longitude )}>
                       
     <Image source={{uri: item.imagen}} style = {{width:100,height:100, margin: 5}}/>
     <View style={{ flex:1, justifyContent: 'center', marginLeft: 5}}>

         <Text
           style={{color:'black', fontSize: 18, fontWeight:'bold', color: 'green', marginBottom: 15}}>
            {item.Nombre}
         </Text>
             
         <Text style={{color:'black', fontSize: 16}}>
          {/* Fecha:  {item.fecha= toString([item.fecha]).length-1} */}
          Fecha:  { item.fecha }
         </Text>

         <Text //!Hora
         style={{color:'black', fontSize: 16}}>

         {/* Hora:  {item.hora=(item.hora = replaceAll(item.hora.substring(0,2), map)).substring(0,4) } */}
         {/* Hora:  {hi= (hi= item.hora.substring(0,5)) } */}
         {/* Hora:  {item.hora = replacÇeAll(item.hora.substring(0,5), map) } */}
          {/* Hora:  {item.hora.substring(4,3) } */}
       {/* Hora:  {item.hora.substring(5,3) } */}
          {/* Hora: {item.hora.substring(0,2)} */}
          {/* Hora:{this.HolaMonde()} */}

          Hora: {
             item.hora.substring(0,2) == this.state.formatTime && item.hora.substring(5,3) == 0 ? // si son las doce del medio día en punto
             item.hora = replaceAll(item.hora.substring(0,5), map)  + ' MM' 
            :
             null
              }
              {
             item.hora.substring(0,2) == this.state.formatTime && item.hora.substring(5,3) > 0 ? // si son las doce del medio día y minutos
             item.hora = replaceAll(item.hora.substring(0,5), map)  + ' PM' 
            :
             null
          } 
          {
            item.hora.substring(0,2) < this.state.formatTime  ? // si es de mañana
             item.hora = replaceAll(item.hora.substring(0,5), map)  + ' AM' 
             :
            null
          }  
          {
            item.hora.substring(0,2) > this.state.formatTime ? // si es de tarde
             item.hora = replaceAll(item.hora.substring(0,5), map)  + ' PM' 
             :
            null
          }
         
         </Text>

    
        </View>
     </TouchableOpacity>

        )}
       


        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
        //! Hasta aquí termina el FlatList
      />
    </View>
  );
}
else { //! de no haber conexión a internet, mostrará el siguiente error

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

const styles = StyleSheet.create({ //! estos son los estilos
  MainContainer: {
    //justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF'
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
 padding: 12, 
 fontSize: 15,
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
}); 

