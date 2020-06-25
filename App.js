/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

//import de ícocno de base nativa
import {Icon} from 'native-base';

//const {width} = Dimensions.get('window') //? esto es para darle anchura total al menú lateral

import TabNavigator from './Componentes/TabNavigator/TabNavigator';
import PantallaBienvenido from './Componentes/Bienvenidos/PantallaBienvenido';
import OldPantallaBienvenido from './Componentes/Bienvenidos/OldPantallaBienvenido';
import Tmp_welcome from './Componentes/Bienvenidos/Tmp_welcome';

//Import de Opciones del Menú Lateral
import ItinerarioScreen from './Componentes/MenuLateralScreen/ItinerarioScreen/ItinerarioScreen';
import RestaurantesStack from './Componentes/MenuLateralScreen/Restaurantes/RestaurantesStack';
import AlojamientoStack from './Componentes/MenuLateralScreen/Alojamiento/AlojamientoStack'; 
import NumEmergenStack from './Componentes/MenuLateralScreen/NumEmergencias/NumEmergenStack';
import GaleriaScreen from './Componentes/MenuLateralScreen/Galeria/GaleriaScreen';
import IdiomaScreen from './Componentes/MenuLateralScreen/Idioma/IdiomaScreen';
import ContactenosScreen from './Componentes/MenuLateralScreen/Contactenos/ContactenosScreen';
import AcercaScreen from './Componentes/MenuLateralScreen/Acerca/AcercaScreen';

//import de navegaciones
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';

//* createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//import { TouchableOpacity } from 'react-native-gesture-handler';

import {Icon as Icono} from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from 'react-navigation-stack';

console.disableYellowBox = true; //!para los mensajes amarillos

class App extends Component {
  //Todo:  Principal, es la raíz
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}
export default App;

const CustomDrawerComponent = (
  props, //!Logo  central del menú lateral
) => (
  <SafeAreaView style={{flex: 1}}>

    <View style={{ height: 150, backgroundColor: 'white', borderRadius: 60, 
                     alignItems: 'center', justifyContent: 'center',}}>
         <Image
            source={require('./img/logo_gran_via_ferrea.jpg')}
            style={{height: 120, width: 160, overflow: 'visible'}} />
    </View>

    <ScrollView>
      <DrawerNavigatorItems {...props} />
    </ScrollView>

  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator (
  {
    //! Aquí van todas las opciones que deba tener el Menú lateral

      Inicio: {
            screen: TabNavigator,
            // initialRouteName: 'Principal', //!ojo 
            navigationOptions: {
              drawerIcon: ({tintColor}) => (
                <Icon name="md-paper" style={{fontSize: 24, color: tintColor}} /> //todo: (base nativa)
                // <Image source={require('./img/translation.png')}
                // style={{height:24, width:24}} />
              ),
              drawerLabel: 'Página Principal',
             },
          }, // es el menú lateral
    
         //?Si coloco screen: Inicio, no muestra los tab al inicio
    Itinerario: {
               screen: ItinerarioScreen, // es el menú lateral
             navigationOptions: {
               drawerLabel: 'Eventos Favoritos',
               },
          },
    
    Restaurantes: {
            screen: RestaurantesStack,
            navigationOptions: {
              drawerIcon: ({tintColor}) => (
                 <Icon name="md-restaurant" style={{fontSize: 24, color: tintColor}} /> //!forma3 (base nativa)
                 )},
            },

     Alojamiento: {
           screen: AlojamientoStack,
           navigationOptions: {
            drawerIcon: ({tintColor}) => (
               <Icon name="md-business" style={{fontSize: 24, color: tintColor}} /> //!forma3 (base nativa)
                  // <Image source={require('./img/translation.png')}
            // style={{height:24, width:24}} />
               )},
           }, 
    
     Emergencia: {
          screen: NumEmergenStack,
          navigationOptions: {

            drawerIcon: ({tintColor}) => (
               <Icon name="call" style={{fontSize: 24, color: tintColor}} /> //!forma3 (base nativa)
                  ),
             drawerLabel: 'Números de Emergencia',
                },
            },

        Galería: {
          screen: GaleriaScreen, // es del menú lateral
        },
        // Idioma:{ //! No la en versión inicial
        //  screen: IdiomaScreen // es del menú lateral
        //    },
        Contáctenos: {
          screen: ContactenosScreen, // es del menú lateral
        },
        Acerca: {
          screen: AcercaScreen, // es del menu lateral
        },
  },
  {
    // contentComponent: CustomDrawerContentComponent, // era la forma anterior que con las nuevas actualizaciones quedó obseleta
    contentComponent: props => <CustomDrawerComponent {...props} />,

    //*  drawerWidth: width, // opcción para tamaño absoluto del manú lateral
    contentOptions: {
      activeTintColor: 'orange',
    },
    drawerBackgroundColor: '#fff',
  },
);

const AppSwitchNavigator = createSwitchNavigator({ //! Switch
  //? Para el acceso al menú lateral
  Bienvenido: PantallaBienvenido,
  // Bienvenido: OldPantallaBienvenido,
  // Tmp_welcome: Tmp_welcome,
  Principal: AppDrawerNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator); //Original

//const AppContainer = createAppContainer(AppDrawerNavigator);//yes drawer

//const AppContainer = createAppContainer(DashStackNavigator); //Lenta
