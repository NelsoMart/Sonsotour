import React, {Component} from 'react';

import {
  StyleSheet, Text, View, /*Image,*/ ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

//import { TouchableHighlight } from 'react-native-gesture-handler';
//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class CasaSalarrueScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'La Casa de Salarrue'
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
          source={require('../../../../../../../img/imgPortada/casa_de_salarrue.jpeg')}
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
        La casa donde  vivió en su infacia el gran escritor Salvador Salazar Arrué,
        conocido popularmente como Salarrue; es un lugar que resguarda tras
        sus paredes mucha historia que cuenta parte la vida del escritor 
        Salvadoreño. En el lugar actualmente se hacen exhibiciones de espacios culturales, 
        demostraciones, sinfónica, conversatorios. Ven y conoce más sobre Salarrué.
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