
import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
  TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
//import { TouchableHighlight } from 'react-native-gesture-handler';

export default class IglesiaPilarScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Nuestra Señora del Pilar'
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
           source={require('../../../../../../../img/imgPortada/iglsea_pilar.jpeg')} // style={styles.imagen} 
           />
        </TouchableHighlight>
      </View>
      
     <View style = {styles.container}>
       <Text style={styles.TextStile}>
       Este templo comenzó a construirse en el año 1732
       en el barrio de El Pilar, hasta terminarse en 1840. 
       Es de estilo barroco, y la fachada se encuentra dividida 
       en tres cuerpos. A ambos lados se erigen dos torres con sus 
       respectivos campanarios. El templo de Nuestra Señora 
       del Pilar fue nombrado parroquia el 31 de enero de 1982, 
       por el obispo de la diócesis de Santa Ana, Marco René Revelo 
       Contreras.
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