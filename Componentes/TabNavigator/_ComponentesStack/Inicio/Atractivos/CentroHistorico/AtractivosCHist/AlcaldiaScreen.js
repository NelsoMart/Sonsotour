import React, {Component} from 'react';

import {
  StyleSheet, Text, View, /*Image,*/ ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

//import { TouchableHighlight } from 'react-native-gesture-handler';
//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class AlcaldiaScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Alcaldía Municipal de Sonsonate'
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
          source={require('../../../../../../../img/imgPortada/alcaldia_municipal.jpeg')}
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
        La alcaldía del municipio de Sonsonate, además de ser el lugar desde
        el cual se gobierna al municipio, es tambén un verdadero palacio
        municipal, una bella joya arquitectónica que se ha venido remodelando
        con los años y es considerado un monumento histórico puesto
        que ha existio desde hace siglos.
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