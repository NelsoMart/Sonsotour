
import React, {Component} from 'react';

import {
          Image as Imagen, TouchableOpacity,
           TouchableHighlight, Dimensions, Text
       } from 'react-native';

 //import Image from 'react-native-scalable-image';

//import principales para la pestaña eventos
import TraductorScreen from './TraductorScreen/TraductorScreen';

//import de navegaciones
  //import {createStackNavigator} from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
//imports de íconos
  import Icon from 'react-native-vector-icons/Ionicons';
//imports gestos

  // import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';


const Traductor = createStackNavigator(

  { //! New Stuff stack3
    Traductor: {
      screen: TraductorScreen,
      navigationOptions:({navigation,  navigationOptions })=>{
        return{
          //headerTitle: 'Traductor',
          headerTitle: null,
          headerLeft: (
        <TouchableOpacity>
            <Icon
               style={{ paddingLeft: 15 }}
               onPress={() => navigation.openDrawer()}
               name="md-menu"
               size={35}  />
         </TouchableOpacity>
          ),
        
          headerBackground: (<Imagen source={require("../../../../img/logo_Sonsonate.jpg")}
                style = {{resizeMode:"contain", alignSelf: 'center', height:130, overflow:"visible"}} 
          />),
          
           headerStyle: {backgroundColor: navigationOptions.headerTintColor, height: 130 },  
           //headerTransparent: true,  
          // headerTintColor: 'blue',
        }  
      }

      // navigationOptions: ({navigation}) => { //!barra trasparente
      //   return { headerTitle: <Text style={{color: 'white', fontSize: 18}}>
      //   Barra</Text>, 
      //   headerTransparent: true, headerStyle: { borderBottomWidth: 0, } } }
    },
    //? Aquí agregar más ventanas
    //TmpTradScreen:{
      //screen: TmpTradScreen
    //}
  },
  
//   {
//     defaultNavigationOptions: {
//       headerBackground: (<Imagen source={require("../../../../img/logo_Sonsonate.jpg")}
//       style = {{resizeMode:"contain", alignSelf: 'center', height:130, overflow:"visible"}} 
// />),
//     },
//   }

  );

  export default Traductor; 
 