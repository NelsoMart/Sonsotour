import React, {Component} from 'react';

import { StyleSheet,TouchableOpacity,TouchableHighlight  } from 'react-native';


if (!__DEV__) {
  // eslint-disable-line no-undef
  [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeStamp',
    'trace',
    'warn',
  ].forEach(methodName => {
    console[methodName] = () => {
      /* noop */
    };
  });
}

// componentes Stacks   
import Inicio from './_ComponentesStack/Inicio/Inicio';
import Eventos from './_ComponentesStack/Eventos/Eventos';
import QRcode from './_ComponentesStack/QRcode/QRcode';
import Traductor from './_ComponentesStack/Traductor/Traductor';

//import de navegaciones
   import {createAppContainer
  } from 'react-navigation';
  
  import { createBottomTabNavigator } from 'react-navigation-tabs';

  //import { createStackNavigator } from 'react-navigation-stack';
  import { createStackNavigator } from 'react-navigation-stack';


  // import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
   
   //imports de íconos
    import Icon from 'react-native-vector-icons/Ionicons';

     //import de ícocno de base nativa
   import {Header, Left, Right, Icon as IconB, View} from 'native-base';

   //imports gestos
  //  import { TouchableOpacity,TouchableHighlight } from 'react-native-gesture-handler';
   

const TabNavigator = createBottomTabNavigator( { //? Pestañas de navegación 
  
  componentDidMount() { setTimeout(() => { this.setState({ isloading: false, }); }, 2000) },

  Inicio:{
    screen: Inicio,
    navigationOptions:
      {//todo: ícono para los Tabs
       tabBarLabel: 'Inicio',

       tabBarOptions: {
        // activeTintColor: '#00E8AC',
        activeTintColor: 'rgb(107,195,157)'

      },
      //  activeTintColor: '#00E8AC',
        tabBarIcon: ({tintColor})=>
         (
            <IconB name="home" style={{fontSize:24, color: tintColor}} />
            // <Icon name= "md-home" size={24} color={tintColor} /> //!de ionicons
          )
        

        } 
     }, // New Stuff
 
  Eventos:{
   screen: Eventos,
   navigationOptions:
      {//todo: ícono para los Tabs
        tabBarOptions: {
          // activeTintColor: '#EE82EE',
          activeTintColor: 'rgb(240,160,223)'
        },
        tabBarIcon: ({tintColor})=> 
        (
            <IconB name="md-bicycle" style={{fontSize:24, color: tintColor}} />
        )
      }
   }, // New Stuff
 
   ScannerQr:{
    screen: QRcode,
     navigationOptions:
        {//todo: ícono para los Tabs
          tabBarOptions: {
            // activeTintColor: '#9400D3',
            activeTintColor: 'rgb(172,147,230)'
          },
          tabBarIcon: ({tintColor})=>
          (
              <IconB name="md-qr-scanner" style={{fontSize:24, color: tintColor}} />
          )
        } 
   }, // New Stuff
 
 Traductor:{
  screen: Traductor,
   navigationOptions:
      {//todo: ícono para los Tabs
       tabBarOptions: {
        activeTintColor: '#FF8C00',
        activeTintColor: 'rgb(251,168,90)'

      },
        tabBarIcon: ({tintColor})=>
        (
            <IconB name="md-globe" style={{fontSize:24, color: tintColor}} />
        )
      } 
   } // New Stuff
  },
 
  { //*Siempre es del tabNavigator
 
     inactiveTintColor: '#C0C0C0',
     barStyle:{
       backgroundColor: 'white',
     },
     shifting: true,
     
     initialRouteName: 'Inicio', // no es tan necesario éste
     order: ['Inicio', 'Eventos', 'ScannerQr', 'Traductor'], // no es tan necesario éste
     navigationOptions: ({navigation}) =>{ //! New stuff
      const { routeName } = navigation.state.routes[navigation.state.index];
       return{
         //header: null,
         headerTitle: routeName
       }
     }
  }   
 
  ); //* Fin createBottomTabNavigation -- Navegador basado en pestañas inferiores


  export default TabNavigator // original
 //const AppContainer = createAppContainer(TabsNavigator); //dos
 

  const styles = StyleSheet.create({ 

    contenerdor:{
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    }

  });

  


