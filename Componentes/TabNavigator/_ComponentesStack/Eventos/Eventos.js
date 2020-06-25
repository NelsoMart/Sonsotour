
import React, {Component} from 'react';

import {
            Image,
            TouchableOpacity, Text, View,
            TouchableHighlight, TextInput,
       } from 'react-native';


//imports principales para la pestaña eventos
   import EventosList from './EventosScreen/EventosList';
   import InfoEventoScreen from './EventosScreen/InfoEventoScreen';
   import Maps from '../../../Maps';

//imports de navegaciones
  // import {createStackNavigator} from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
 //imports de íconos
   import Icon from 'react-native-vector-icons/Ionicons';
 //imports gestos
  //* import { TouchableOpacity } from 'react-native-gesture-handler';

const Eventos = createStackNavigator({ 
  //! New Stuff, stack2    
    //? Aquí agregar más ventanas
    Eventos: { //Antes el nombre de esto era : TmpEventScreen, porque estaba funional el de arriba; en todo caso ahora de volver a lo anterior se tendría que llamar EventosList
          screen: EventosList,
          navigationOptions:({navigation})=>{
            return{
             // headerTitle: 'Eventos',
             headerTitle: null,
             headerStyle: {height: 130},
              headerLeft: (
             <TouchableHighlight
             onPress={() => navigation.openDrawer()}
             >
                <Icon
                   style={{ paddingLeft: 15, overflow:"visible"}}
                  // onPress={() => navigation.openDrawer()}
                   name="md-menu"
                   size={35}  />
             </TouchableHighlight>
               ),
               //?logo de Sonsonate
               headerBackground: <Image source={require("../../../../img/logo_Sonsonate.jpg")}
                       style = {{resizeMode:"contain", alignSelf: 'center', height:130, overflow: "visible"}} 
                            />
            }
          }
      },
      InfoEventoScreen: {
        screen: InfoEventoScreen,
    },
    Maps:{
      screen: Maps,
    }

  });

  export default Eventos;