
//Todo: código primitivo
import React, {Component} from 'react';

import {
  View,
  Text,
  //Image,
  ScrollView,
  Dimensions,
  Alert,
  Linking,
  TouchableHighlight, TouchableOpacity,
  StyleSheet,
  ImageBackground,
}from 'react-native';


import Image from 'react-native-scalable-image';

//import de ícono de base nativa
import {Header, Left, Right, Icon/*,View*/} from 'native-base';

//imports de íconos
import {Icon as Icono} from 'react-native-vector-icons/Ionicons';

 import MenuItem from './MenuItem';

export default class NumerosEmergencia extends Component {

  // static navigationOptions={ //? esto era funcionaba antes, y era para colocar ícono respectivo en el menú lateral... porque se llamaba a esta clase directamente desde 'App' pero ahora se llama al nuevo Stack
  //   drawerIcon: ({tintColor}) => (   
  //     // <Images source={require('../../../img/hotel.png')} //!forma1
  //     // style={{height:24, width:24, color: tintColor, overflow:"visible"}} />
  //      <Icon name='call' style={{fontSize:24,color:tintColor}} /> //!forma3 (base nativa)
  //   )
  // }                                       
          

 SampleFunction=()=>{
  Alert.alert("Información", "Toca uno de los íconos siguientes para realizar una llamada, o manténlo precionado para más información")
    }

 render() {
    return (

      <ImageBackground //? esto era funcional.. Servía para colocar la barra superior y su ícono de acceso al menú lateral.
        source = {require('../../../img/backgroundemergencia.jpeg')}
        style={styles.container}>
        
           {/* <Header style={{backgroundColor:'rgba(47,163,218, .4)'}}>
             <Left style={{paddingRight:'85%'}}>
              <TouchableOpacity>
                    <Icon name= "md-menu" onPress={()=>this.props.navigation.openDrawer()}  
                       style={{fontSize:35, color: '#fff'}}/>
             </TouchableOpacity>
           </Left>           
         </Header>  */}
        

  <View style= {styles.overlayContainer}>
      
   <View style={styles.top}>

      <TouchableOpacity onLongPress={this.SampleFunction} activeOpacity={0.6}>
         <Text style={styles.header}> E M E R G E N C I A S </Text>
     </TouchableOpacity> 
          {/* <Text style={styles.header}> E M E R G E N C I A S </Text> */}
          <Text style ={{paddingTop:30, textAlign: 'center', color: '#fff'}}>Toca uno de los íconos  siguientes para realizar una llamada, o manténlo precionado para más detalles.</Text>                                     
   </View>
   
        <View style={styles.menuContainer}>
          <MenuItem itemImage={require('../../../img/num_emergencias/pnc.jpg')} llamar = 'tel:911' titulo= "PNC" info = "LLama a la Policía Nacional Civil"/>      
           <MenuItem itemImage={require('../../../img/num_emergencias/bomberos.jpg')} llamar = 'tel:913' titulo= "BOMBEROS" info = "LLama al Cuerpo de Bonberos de El Salvador, en caso de incendios"/>
           <MenuItem itemImage={require('../../../img/num_emergencias/cruzroja.jpg')} llamar = 'tel:22225155' titulo= "CRUZ ROJA" info = "LLama a Cruz Roja Salvadoreña, para situaciones de emergecia extrema"/>
           <MenuItem itemImage={require('../../../img/num_emergencias/cruzverde.jpg')} llamar = 'tel:22711244' titulo= "CRUZ VERDE" info = "LLama a Cruz Verde Salvadoreña, para situaciones de emergencias cotidianas, incidentes, eventos y desastres"/>
           <MenuItem itemImage={require('../../../img/num_emergencias/proteccioncivil.jpg')} llamar = 'tel:22810888' titulo= "PROTECCIÓN CIVIL" info = "LLama a protección Civil"/>
           <MenuItem itemImage={require('../../../img/num_emergencias/fosalud2.jpg')} llamar = 'tel:132' titulo= "FOSALUD" info = "LLama al Centro de Salud, con servicios médicos las 24 horas"/>
        </View>
                        
       </View>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
   vista:{
      flex: 1,
        justifyContent: 'center',
       // resizeMode: 'contain',
       // alignItems: 'center',        
   },                                                              

   texto:{                            
     textAlign: 'center',
     color: 'blue',                                   
     fontSize: 30,             
    },
    container:{
      flex:1,
       width:'100%',
       height:'100%'
    },
    overlayContainer:{
      flex:1,
      backgroundColor: 'rgba(47,163,218, .4)'
    },
    top:{
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      color: '#fff',
      fontSize: 25,
      borderColor: '#fff',
      borderWidth: 2,
      padding: 20,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: 'rgba(255, 255, 255, .1)'
    },
    menuContainer:{
      height: '50%',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },

    /// estos dos estilos son para un ejemplo de botón de pulsación larga
    button: {
    
      width: '100%',
      paddingTop:5,
      paddingBottom:5,
      backgroundColor: '#00BCD4',
      borderRadius:7,
    },
     
    TextStyle:{
        color:'#fff',
        textAlign:'center',
    }
}) 