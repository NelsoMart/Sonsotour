import React, {Component} from 'react';

import {
  StyleSheet, Text, View, ScrollView, Dimensions,
  TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
// import { TouchableHighlight } from 'react-native-gesture-handler';

export default class ComplefourCuadras extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Murales en Recorrido de Bala Tacuzcalco'
  }

    render() {
      return (
  <View style = {styles.container}>
    <ScrollView>
      <View style = {styles.container}>
        <TouchableHighlight style={{flex:1}} 
            //onPress={() => this.props.navigation.navigate('TraductorScreen')}
            >
          <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
          source={require('../../../../../../../img/imgPortada/complejo_cuatro_cuadras.jpeg')} //style={styles.imagen} 
          />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
       También conocido com "El complejo de las cuatro cuadras", es un sitio
            turístico inagurado hace pocos años, y el cual es considerado
            de sano esparcimiento ya que se puede disfrutar
            de momentos de tranquilidad, ver en en las inturas de los Murales
            toda una cultura sonsonateca, que através de ellas trasciende la historia.
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
        alignItems: 'center',
        justifyContent: 'center'
      },
      
      TextStile: {
        fontSize:20,
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
      }
})