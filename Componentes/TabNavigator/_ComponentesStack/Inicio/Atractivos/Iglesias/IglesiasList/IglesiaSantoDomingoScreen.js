
import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
//import { TouchableHighlight } from 'react-native-gesture-handler';

export default class IglesiaSantoDomingoScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Ermita Santo Domingo de Guzmán'
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
           source={require('../../../../../../../img/imgPortada/iglesia_santo_domingo.jpeg')} // style={styles.imagen} 
           />
        </TouchableHighlight>
      </View>
      
     <View style = {styles.container}>
       <Text style={styles.TextStile}>
           Esta es la descripción de la iglesia Santo
           Domingo de Guzmán cuyas
           caractesrísticas fundamentales aún es
           desconocida por los desarrolladores.
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