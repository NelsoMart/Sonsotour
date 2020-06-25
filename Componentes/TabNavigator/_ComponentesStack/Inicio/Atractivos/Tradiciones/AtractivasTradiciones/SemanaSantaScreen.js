import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

// import { TouchableHighlight } from 'react-native-gesture-handler';

export default class SemanaSantaScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Semana Santa'
  }

    render() {
      return (
  <View style = {styles.container}>
   <ScrollView >
      <View style = {styles.container}>
        <TouchableHighlight 
            //onPress={() => this.props.navigation.navigate('TraductorScreen')}
            >
          <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../../img/imgPortada/semana_santa.jpeg')} // style={styles.imagen} 
           />
        </TouchableHighlight>
      </View>
      
     <View style = {styles.container}>
       <Text style={styles.TextStile}>
            La Semana Santa, es un evento religioso que se realiza en una
            época específica del año, en el cual se vive con fervor 
            las diversas procesiones en Honor a Cristo, recordando el 
            sacrificio que hizo por el mundo, y cómo éste fue llevado  
            camino en el Calvario para ser Crusificado. 

            La Semana Santa es la última de la Cuaresma que comienza desde
            el domingo de ramos y termina el domingo de resurrección.

            Si compartes esta fe ven y conmemora junto a los habitantes 
            Sonsonatecos la pasión, la muerte y la resurrección de Jesús.

            * Datos Importantes.

             -  El evento se lleva a cabo en el mes de Abril
             - Ciudad: Sonsonate.
             - ...
       </Text>
     </View> 

     </ScrollView>
  </View>
      );
    }
  }

const styles = StyleSheet.create({
    imagen: { //! No en uso
      flex: 1,
      // resizeMode: 'cover', // otros: 'center', 'stretch','cover'
      // alignSelf: 'center',
      // height: 300,
       width: 340,
      // flexDirection: 'row',
      // flexWrap:'nowrap',
      resizeMode:'contain', alignSelf: 'center', height:250
    },
    container:  {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      TextStile: {
        fontSize:20,
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
      }
})