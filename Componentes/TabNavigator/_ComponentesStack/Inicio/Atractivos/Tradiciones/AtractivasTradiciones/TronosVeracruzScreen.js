import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

//import { TouchableHighlight } from 'react-native-gesture-handler';

export default class TronosVeracruzScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Los Tronos de Veracruz'
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
           source={require('../../../../../../../img/imgPortada/trono_veracruz.jpeg')} // style={styles.imagen} 
           />
        </TouchableHighlight>
      </View>
      
     <View style = {styles.container}>
       <Text style={styles.TextStile}>
       Según la historia, el primer Trono 
       fue construido por el año de 518 aproximadamente.
       El trono es ubicado en la esquina de la Ermita del 
       Barrio Veracruz (se asume que, en el año 1574, 
       construyó de cal y canto en Sonsonate) esto se 
       realiza los primeros días de enero.
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
       width: 340,
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