import React, {Component} from 'react';

import {
  StyleSheet, Text, View, /*Image,*/ ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

//import { TouchableHighlight } from 'react-native-gesture-handler';
//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class FirsCasadeLadrilloScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'La Primera Casa de Ladrillo'
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
          source={require('../../../../../../../img/imgPortada/primera_casa_de_ladrillo.jpeg')}
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
        Se cree que estos muros tienen años de antigüedad, 
        ya que representan que lo fue, alguana vez en sonsonate, 
        una casa construida por primera vez, de ladrillo, y que a partir de
        de ésa muchas otras comenzaron a construirse con el mismo material
        dando paso a la era de las casas de ladrillo, y dejando casi en el
        olvido las casas de adobe. Sin duda estos muros que un día fueron la
        primera casa de ladrillo estarán allí por muchos años más.
       </Text>
     </View>

     </ScrollView>
  </View>
      );
    }
  }

const styles = StyleSheet.create({

  // image:{ //!método responsive antiguo
  //   width: width * 0.9
  // },
 
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
        // fontSize:20,
        // alignItems: 'center',
        // margin: 10,
        // justifyContent: 'center',
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
      }
})