import React, {Component} from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
 
import {createStackNavigator} from 'react-navigation-stack';

import NumEmergencias from './NumEmergencias';
//* import Maps from '../../Maps';

 //imports de íconos
 import Icon from 'react-native-vector-icons/Ionicons';

const NumEmergenStack = createStackNavigator({

  NumEmergencias: {screen: NumEmergencias,
     navigationOptions:({navigation})=>{
       return{
              // headerTitle: 'Numeros de Emergencia',

                 headerTitle: null,
             // headerStyle: {height: 130},
                headerStyle: {
                  height: 50,
                 backgroundColor: 'rgb(36,85,119)', //* este color sólo lo agarra cuando no hay headerBackground 
                   },  
                headerLeft: (
               <TouchableHighlight onPress={() => navigation.openDrawer()}>
                  <Icon 
                        style={{ paddingLeft: 15, overflow:"visible"}}
                        color='#fff'   name="md-menu"   size={35}  />
              </TouchableHighlight>
               ),

            //? logo de Sonsonate .. si se agrega, el color de la barra pierde su efecto
            //  headerBackground: <Image source={require("../../../img/logo_Sonsonate.jpg")}
            //         style = {{resizeMode:"contain", alignSelf: 'center', height:130, overflow: "visible"}} 
            //       />
          }
       }
    },

//? Aquí más Pantallas
    // Maps:{screen: Maps}
});

export default NumEmergenStack;