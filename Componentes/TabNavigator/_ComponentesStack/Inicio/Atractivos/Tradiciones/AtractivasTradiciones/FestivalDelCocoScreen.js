import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
//import { TouchableHighlight } from 'react-native-gesture-handler';

export default class FestivalDelCocoScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Festival del Coco'
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
           source={require('../../../../../../../img/imgPortada/festival_de_coco.jpg')}  // style={styles.imagen}
           />
        </TouchableHighlight>
      </View>
      
     <View style = {styles.container}>
       <Text style={styles.TextStile}>
       En el evento se ofrece una variada oferta gastronómica,
       exhibición de pinturas de artistas locales, venta de productos
       artesanales, elección de la reina del festival, presentaciones 
       artísticas, y recorridos en tren por el centro histórico de Sonsonate.
       Este evento se realiza en el parque Rafael Campo. Sé parte del 
       evento, disfruta del festin derivado de esta fruta, y conoce más sobre la 
       cultura de esta ciudad también llamada, Ciudad de los Cocos.
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