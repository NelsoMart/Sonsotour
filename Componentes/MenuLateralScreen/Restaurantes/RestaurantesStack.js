import React, {Component} from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
 
import {createStackNavigator} from 'react-navigation-stack';

import RestauranteList from './RestauranteList';
import InfoRestaurantScreen from './InfoRestaurantScreen';
import Maps from '../../Maps';

 //imports de íconos
 import Icon from 'react-native-vector-icons/Ionicons';


const RestaurantesStack = createStackNavigator({

  RestauranteList: {screen: RestauranteList,
        navigationOptions:({navigation})=>{
            return{
             headerTitle: 'Restaurantes', //! título de la barra

            //  headerTitle: null,
            //  headerStyle: {height: 130},
                headerStyle: {
                  height: 50,
                 backgroundColor: 'rgba(239, 239, 239, .4)', //* este color sólo lo agarra cuando no hay headerBackground 
                },  
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

            //    //?logo de Sonsonate
            //    headerBackground: <Image source={require("../../../img/logo_Sonsonate.jpg")}
            //            style = {{resizeMode:"contain", alignSelf: 'center', height:130, overflow: "visible"}} 
            //                 />
            }
          }
    },

    InfoRestaurantScreen: {screen: InfoRestaurantScreen},

    Maps:{screen: Maps}
});

export default RestaurantesStack;