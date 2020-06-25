import React, {Component} from 'react';

import {
  StyleSheet, Text, View, ScrollView, Dimensions,
  TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
// import { TouchableHighlight } from 'react-native-gesture-handler';

export default class MercaditoAngel extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Terraza del Mercado El Ángel'
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
          source={require('../../../../../../../img/imgPortada/mercadito_el_angel.jpeg')} //style={styles.imagen} 
          />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
            En este mercado, llamado "Mercadito el Ángel",
            existe un rárea en donde se puede
            encontrar variedad de gastronomía; y ahora que está recién 
            remodelado, es un lugar ameno en el que también se encuantran  
            lugares para descansar y degustar algún platillo típico de sonsonate.
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