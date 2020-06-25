import React, {Component} from 'react';

import {
  StyleSheet, Text, View, ScrollView, Dimensions,
  TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
//import { TouchableHighlight } from 'react-native-gesture-handler';

export default class AntEFerrocarrilScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Antigua Estación del Ferrocarril'
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
          source={require('../../../../../../../img/imgPortada/antigua_estacion_del_ferrocarril.jpeg')} //style={styles.imagen} 
          />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
            La Antigua estación del Ferrocarril, es uno de los actractivos más
            recientes, y uno de los más interesantes gracias 
            a la nueva apuesta por la innovación del turismo del 
            municipio. Entre las principales atracciones que ofrece
            el sitio, están los platillos típicos de Sonsonate y,
            por supueto, el paseo en el emblemático tren de
            Sonsonate, que ofrece una experiencia única. Además se 
            realizan actividades constantemente. No te las pierdas.
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