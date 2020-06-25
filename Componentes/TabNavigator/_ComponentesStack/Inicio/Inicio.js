import React, {Component} from 'react';

import {
          Image,TouchableOpacity,TouchableHighlight
       } from 'react-native';

//* import principal para la pestaña Inicio
   import AtractivosScreen from './Atractivos/AtractivosList';
//todo: sucesor de Atractivos list quemada
   import AtractivosOnlineList from './Atractivos/AtractivosOnlineList';

//*imports de circuitos de la gran vía férrea
   import ListaAtractivosGVF from './Atractivos/GranViaFerrea/ListaAtractivosGVF';
   //?Listado
   import PlaFerrovScreen from './Atractivos/GranViaFerrea/AtractivosViaF/PlaFerrovScreen';
   import ComplefourCuadras  from './Atractivos/GranViaFerrea/AtractivosViaF/ComplefourCuadras';
   import MercaditoAngel from './Atractivos/GranViaFerrea/AtractivosViaF/MercaditoAngel';
   import MuseoFerrocScreen from './Atractivos/GranViaFerrea/AtractivosViaF/MuseoferrocScreen';
   import AntEFerrocarrilScreen from './Atractivos/GranViaFerrea/AtractivosViaF/AntEFerrocarrilScreen';
   
//* imports de circuitos de iglesias  
      import IglesiasList from './Atractivos/Iglesias/IglesiasList';
      //?listado
      import CatedralScreen from './Atractivos/Iglesias/IglesiasList/CatedralScreen';
      import IglesiaAngelesScreen from './Atractivos/Iglesias/IglesiasList/IglesiaAngelesScreen';
      import IglesiaPilarScreen from './Atractivos/Iglesias/IglesiasList/IglesiaPilarScreen';
      import IglesiaSantoDomingoScreen from './Atractivos/Iglesias/IglesiasList/IglesiaSantoDomingoScreen';

  //* import de playa
      import BarraSaladaScreen from './Atractivos/PlayaBS/BarraSaladaScreen';

//* imports de circuitos del Centro Histórico
      import ListaAtractivosCHist from './Atractivos/CentroHistorico/ListaAtractivosCHist'; 
      //? Listado
      import ParqueSonScreen from './Atractivos/CentroHistorico/AtractivosCHist/ParqueSonScreen';    
      import AlcaldiaScreen from './Atractivos/CentroHistorico/AtractivosCHist/AlcaldiaScreen';    
      import PalacioCulturalScreen from './Atractivos/CentroHistorico/AtractivosCHist/PalacioCulturalScreen';    
      import CasaSalarrueScreen from './Atractivos/CentroHistorico/AtractivosCHist/CasaSalarrueScreen';    
      import FirsCasadeLadrilloScreen from './Atractivos/CentroHistorico/AtractivosCHist/FirsCasadeLadrilloScreen';    

//* imports de Tradiciones
  import ListaAtractivasTradiciones from './Atractivos/Tradiciones/ListaAtractivasTradiciones';
   //? Listado
   import SemanaSantaScreen from './Atractivos/Tradiciones/AtractivasTradiciones/SemanaSantaScreen';
   import FestivalDelCocoScreen from './Atractivos/Tradiciones/AtractivasTradiciones/FestivalDelCocoScreen';
   import TronosVeracruzScreen from './Atractivos/Tradiciones/AtractivasTradiciones/TronosVeracruzScreen';
   import TronosPilarScreen from './Atractivos/Tradiciones/AtractivasTradiciones/TronosPilarScreen';

//Todo: imports de sucesor de sitios
import SubListAtractivos from './Atractivos/OnlineAtractivos/SubListAtractivos';
import SubListFinalAtractivos from './Atractivos/OnlineAtractivos/SubListFinalAtractivos';
import AtractivoScreen from './Atractivos/OnlineAtractivos/AtractivoScreen';

//* para el screen de mapas
import Maps from '../../../Maps';

//imports de navegaciones
   import { createAppContainer,DrawerActions,NavigationToggleDrawerAction} from 'react-navigation';
   import { createStackNavigator } from 'react-navigation-stack';
 //imports de íconos
   import Icon from 'react-native-vector-icons/Ionicons';
   
 //imports de gestos
   //import { TouchableOpacity,TouchableHighlight } from 'react-native-gesture-handler';

   import {withNavigation} from 'react-navigation'

const Inicio = createStackNavigator(
  { //! New Stuff, stack1
    Inicio: { // Para mostrar el carrete de imágenes
     // todo: Switch SITIOS (LOCAL/ONLINE) 
    //  screen: AtractivosScreen, // método local
     screen: AtractivosOnlineList, // método en línea
     
      navigationOptions:({navigation})=>{
        return{
            headerTitle: null,
             headerStyle: {height: 130, backgroundColor: '#fff'},
             headerTintColor: 'blue',
            
           //  headerLeft: <DrawerButton navigation={navigation} />,
           
          headerLeft: (
               <Icon
                  style={{ paddingLeft: 15, overflow:"visible" }}               
                  name="md-menu"
                  onPress={() => navigation.openDrawer()}
                  size={35} />
               ),   
          //?Logo de Sonsonate
       headerBackground: <Image source={require("../../../../img/logo_Sonsonate.jpg")}
               style = {{resizeMode:'contain', alignSelf: 'center', height:130, overflow:"visible"}} 
                    />
           }
      }
        },
   //*--------- La Gran Vía Férrea
   ListaAtractivosGVF:{
     screen: ListaAtractivosGVF
   },
        //? Listado GVF
    PlaFerrovScreen:{
          screen: PlaFerrovScreen
          },
    MuseoFerrocScreen: {
          screen: MuseoFerrocScreen
          },
    ComplefourCuadras:{
          screen: ComplefourCuadras
          },
    MercaditoAngel:{ 
          screen: MercaditoAngel
          },
    AntEFerrocarrilScreen: {
      screen: AntEFerrocarrilScreen
    },
  //*---------- Iglesias 
    IglesiasList: { 
          screen: IglesiasList
          },
          //? Listado Iglesias
    CatedralScreen: {
          screen: CatedralScreen
                 },
    IglesiaAngelesScreen: {
          screen: IglesiaAngelesScreen
                 },
    IglesiaPilarScreen: {
          screen: IglesiaPilarScreen
                 },
    IglesiaSantoDomingoScreen:{
            screen: IglesiaSantoDomingoScreen
             },
    
  //*------- Playa Barra Salada
    BarraSaladaScreen: {
            screen: BarraSaladaScreen
              },
  //* ---------- Centro Histórico
     ListaAtractivosCHist: {
      screen: ListaAtractivosCHist
          },
          //? Listado de centro histórico
     ParqueSonScreen: {
      screen: ParqueSonScreen
          },
   AlcaldiaScreen: {   
     screen: AlcaldiaScreen
       },
   PalacioCulturalScreen: {
     screen: PalacioCulturalScreen
          },
   CasaSalarrueScreen: {
        screen: CasaSalarrueScreen
         },
    FirsCasadeLadrilloScreen: {
         screen: FirsCasadeLadrilloScreen
               },       
          

 //*--- Tradiciones Sonsonatecas
      ListaAtractivasTradiciones: {
      screen: ListaAtractivasTradiciones
      },
    //? Listado de tradiciones
    SemanaSantaScreen: {
      screen: SemanaSantaScreen
      },
      FestivalDelCocoScreen: {
        screen: FestivalDelCocoScreen
        },
      TronosVeracruzScreen: {
        screen: TronosVeracruzScreen
        },
      TronosPilarScreen: {
         screen: TronosPilarScreen
         },
         
    //TODO: ----------- Sucesor Lista de Sitios Turísticos---------------- 
    SubListAtractivos: {
         screen: SubListAtractivos
             },

    SubListFinalAtractivos: {
            screen: SubListFinalAtractivos
             },
    AtractivoScreen: {
           screen: AtractivoScreen
          },

          Maps: { 
            screen: Maps
          },
         //fin

    },
    ); //*Fin Inicio

    export default withNavigation(Inicio); // original

    // const Inicio = createAppContainer(Inicios); // para sólo el stack envolver
    //  export default Inicio


  // const AppContainer = createAppContainer(Inicios); // con render función