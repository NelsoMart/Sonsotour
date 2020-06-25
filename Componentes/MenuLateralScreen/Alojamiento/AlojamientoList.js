
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image as MyImagen, ActivityIndicator,
  View,FlatList,TouchableOpacity, RefreshControl, Alert,
 Dimensions,
  Linking,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import Image from 'react-native-scalable-image';

//import de ícono de base nativa
import {Header, Left, Right, Icon} from 'native-base';

//imports de íconos
import {Icon as Icono} from 'react-native-vector-icons/Ionicons';

 import AlojaListScreen from './AlojaListScreen';

  //* Para animación Loading...
  import Lottie from 'lottie-react-native';
  import avionAnimation from '../../../avionAnimation';
  import forPointAnimation from '../../../forPointAnimation';
  import circlePointsAnimation from '../../../circlePointsAnimation'

//* NetInfo
import NetInfo from "@react-native-community/netinfo";

  // Subscribe
  const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });
   
  // Unsubscribe
  unsubscribe(); 

export default class AlojamientoList extends Component {

  // static navigationOptions={ //todo: esto sólo funciona si se llama a esta pantalla desde app, sin pasar por el stack; lo que hace es colocar el icono respectivo en el menú lateral 
  //   drawerIcon: ({tintColor}) => (   
  //     // <Images source={require('../../../img/hotel.png')} //!forma1
  //     // style={{height:24, width:24, color: tintColor, overflow:"visible"}} />
  //      <Icon name='md-business' style={{fontSize:25,color:tintColor}} /> //!forma3 (base nativa)
  //   )
  // }                                     
         
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
  //  const response = await fetch('http://192.168.43.19:8081/crud_reactnative/laravel_view_alojamiento.php'); //! de arhivito local // es muy importante no olvidar que cambié el nombre del archivo php de nombre 'laravel_view_users.php' al nombre 'laravel_view_eventos.php'
     const response = await fetch('https://appturistica07.000webhostapp.com/laravel_view_alojamiento.php'); //! de la bd online original

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

// alert(Dimensions.get('window').width);

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

  

  Ir_InfAlojamientoScreen (id, nombre, direccion, imagen, imagen2, imagen3, descripcion, 
    linkFacebook, linkInstagram, numWhatsapp, linkPageWeb,
     titulo, descripcMapa, latitude, longitude) {

  this.props.navigation.navigate('InfoAlojamientoScreen',{ //todo: son 15 items
    id: id,
    nombre: nombre,
    direccion: direccion,
    imagen: imagen,
    imagen2: imagen2,
    imagen3: imagen3,
    descripcion: descripcion,
    linkFacebook: linkFacebook,
    linkInstagram: linkInstagram,
    numWhatsapp: numWhatsapp,
    linkPageWeb: linkPageWeb,
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

    //todo: esta condición valida si hay conexión a internet, y de ser cierto, carga la Lista
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
          Si lo que buscas es un lugar donde pasar una estancia agradable, Sonsonate
          cuenta con lo que tú necesitas. En unos momentos podrás ver una lista debe
          lugares en los que podrás encontrar un verdadero concepto alojamiento.
      </Text>

      <TouchableHighlight style={styles.Recargar}
      onPress={this.onRefresh.bind(this)} >
          <Text style={{color:'#C0C0C0'}}>Recargar</Text>
          </TouchableHighlight> 
  </View>
      
      :   //todo: estos dos puntos deben ir; son parte la condición ternaria
  
 //* return (

    //Returning the ListView

    <View  style={styles.container}>
    
     {/* //todo: this found, es un status bar
     <Header style={{backgroundColor:'rgba(47,163,218, .4)'}}>
       <Left style={{paddingRight:'85%'}}>
         <TouchableOpacity>
             <Icon name= "md-menu" onPress={()=>this.props.navigation.openDrawer()}  
                   style={{fontSize:35, color: '#fff'}}/>
         </TouchableOpacity>
       </Left>           
     </Header>  */}
   
    <View style = {{ flex: 1 }}>
      <FlatList keyExtractor = {(item) => item.id} key = {1} numColumns = {2}  data={this.state.data} 
         renderItem = { ({ item }) =>
                  <TouchableOpacity style={{flex:1}} 
                               onPress={ this.Ir_InfAlojamientoScreen.bind(this, 
                                           item.id,
                                           item.nombre,
                                           item.direccion,
                                           item.imagen,
                                           item.imagen2,
                                           item.imagen3,
                                           item.descripcion,
                                           item.linkFacebook,
                                           item.linkInstagram,
                                           item.numWhatsapp,
                                           item.linkPageWeb,
                                           item.titulo,
                                           item.descripcMapa,
                                           item.latitude,
                                           item.longitude,
                                            )  } > 
                         <AlojaListScreen imageURI  = { item.imagen }
                                          name = { item.nombre} /> 
                    </TouchableOpacity> }

         refreshControl= {
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)} /> }
          />
       </View>
    </View>   

  );
}
else { //! de no haber conexión a internet, mostrará el siguiente error

  return (
    <View style={styles.containerAntiguo}>
       <Text style={styles.text}>
          Se Produjo un error al recuperar los datos. 
           Parece que no estás conectado a Internet. 
       </Text>

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

  containerAntiguo: {  
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


// todo: Para el diseño de otro

container:
  {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  loadingContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadingText:
  {
    paddingTop: 10,
    fontSize: 18,
    color: 'black'
  },

}); 





//! ------------------------- GridView Simplificado ----------------------------------------------------------

/*
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, StyleSheet, Platform } from 'react-native';

import AlojamientoScreen from './AlojamientoScreen';

export default class AlojamientoList extends Component<{}>
{
    constructor()
    {
        super();
        this.state = { imagesData: null, loading: true, gridView: true, btnText: 'Show List' }
    }

    componentDidMount()
    {
        // fetch('https://gamersite123.000webhostapp.com/forest_images_php_file.php')
        fetch('http://192.168.43.19:8081/crud_reactnative/laravel_view_alojamiento.php')
       
         .then((response) => response.json())
         .then((responseJson) =>
         {
           this.setState({ 
             imagesData: responseJson, 
             loading: false 
            });
         })
         .catch((error) =>
         {
           console.error(error);
         });
    }

    render()
    {
        return(
          <View style = { styles.container }>
          {
            (this.state.loading)
            ?
                (<View style = { styles.loadingContainer }>
                    <ActivityIndicator size = "large" />
                    <Text style = { styles.loadingText }>Please Wait...</Text>
                </View>)
            :
            (<View style = {{ flex: 1 }}>
              <FlatList keyExtractor = {(item) => item.id} key = {1} numColumns = {2} data = { this.state.imagesData } renderItem = {({ item }) =>
                  <AlojamientoScreen imageURI = { item.imagen } name = { item.nombre} />
                }/>
            </View>)
          }            
          </View>
        );
    }
}

const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  loadingContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadingText:
  {
    paddingTop: 10,
    fontSize: 18,
    color: 'black'
  },

});
*/




//! ------------------------- GridView Primitivo ----------------------------------------------------------
/*
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, StyleSheet, Platform } from 'react-native';

class ImageComponent extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <View style = { styles.imageHolder }>
        <Image source = {{ uri: this.props.imageURI }} style = { styles.image }/>
        <View style = { styles.textViewHolder }>
          <Text numberOfLines = { 2 } style = { styles.textOnImage }>
            { this.props.name }
          </Text>
        </View>
      </View>
    );
  }
}

export default class AlojamientoList extends Component<{}>
{
    constructor()
    {
        super();
        this.state = { imagesData: null, loading: true, gridView: true, btnText: 'Show List' }
    }

    componentDidMount()
    {
        // fetch('https://gamersite123.000webhostapp.com/forest_images_php_file.php')
        fetch('http://192.168.43.19:8081/crud_reactnative/laravel_view_alojamiento.php')
       
         .then((response) => response.json())
         .then((responseJson) =>
         {
           this.setState({ imagesData: responseJson, loading: false });
         })
         .catch((error) =>
         {
           console.error(error);
         });
    }

    changeView = () =>
    {
      this.setState({ gridView: !this.state.gridView }, () =>
      {
          if(this.state.gridView)
          {
            this.setState({ btnText: 'Show List' });
          }
          else
          {
            this.setState({ btnText: 'Show Grid' }); 
          }
      });
    }

    render()
    {
        return(
          <View style = { styles.container }>
          {
            (this.state.loading)
            ?
                (<View style = { styles.loadingContainer }>
                    <ActivityIndicator size = "large" />
                    <Text style = { styles.loadingText }>Please Wait...</Text>
                </View>)
            :
            (<View style = {{ flex: 1 }}>
              <TouchableOpacity activeOpacity = { 0.8 } style = { styles.Btn } onPress = { this.changeView }>
                <Text style = { styles.btnText }>{ this.state.btnText }</Text>
              </TouchableOpacity>
              <FlatList keyExtractor = {(item) => item.id} key = {( this.state.gridView ) ? 1 : 0 } numColumns = { this.state.gridView ? 2 : 1 } data = { this.state.imagesData } renderItem = {({ item }) =>
                  <ImageComponent imageURI = { item.imagen } name = { item.nombre} />
                }/>
            </View>)
          }            
          </View>
        );
    }
}

const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  imageHolder:
  {
    margin: 5,
    height: 160,
    flex: 1,
    position: 'relative'
  },

  image:
  {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },

  textViewHolder:
  {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center'
  },

  textOnImage:
  {
    fontSize:11,
    color: 'white'
  },

  loadingContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadingText:
  {
    paddingTop: 10,
    fontSize: 18,
    color: 'black'
  },

  Btn:
  {
    padding: 15,
    backgroundColor: '#5cb85c'
  },

  btnText:
  {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch'
  }
});
*/
