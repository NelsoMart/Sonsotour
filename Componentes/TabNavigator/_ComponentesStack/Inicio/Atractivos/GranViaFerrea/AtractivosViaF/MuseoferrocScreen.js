import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
  TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
// import { TouchableHighlight } from 'react-native-gesture-handler';

export default class MuseoFerrocScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Museo del Ferrocarril'
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
          source={require('../../../../../../../img/imgPortada/museo_ferrocarril.jpeg')} // style={styles.imagen}
                />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
            El Museo del Ferrocarril cuenta, através de immágenes,
            pinturas, libros, y el mismo tren, todo lo que Sonsonate
            ha vivido a través de los años en cuanto al transporte 
            por tren se refiere, y ello lo hace un atractivo interesante,
            acompañado, claro, de mucha gastronomía de la zona.
            Ven y sumergete en años y años de história férrea.

       </Text>
     </View>

     </ScrollView>
  </View>
      );
    }
  }

const styles = StyleSheet.create({
    imagen: {
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