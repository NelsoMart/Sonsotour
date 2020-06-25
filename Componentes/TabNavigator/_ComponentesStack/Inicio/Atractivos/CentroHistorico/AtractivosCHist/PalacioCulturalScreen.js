import React, {Component} from 'react';

import {
  StyleSheet, Text, View, /*Image,*/ ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

// import { TouchableHighlight } from 'react-native-gesture-handler';
//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class PalacioCulturalScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Palacio Cultural'
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
          source={require('../../../../../../../img/imgPortada/palacio_cultural.jpeg')}
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
       En el año de 1865 ya existía un teatro en Sonsonate, 
       pero éste se conocía con el nombre de teatro arce; lo más 
       probable que era el que decían el popular o pulgoso. 
       Luego, el señor Manuel Arce, quería nombralo Centro Cultural Arce.
       Sonsonate queda sin cines. En el 2010 la Administración Municipal 
       del señor José Roberto Aquino logró remodelar el teatro 
       arce y lo reinauguró como palacio cultural, dejando una 
       presentación opcional para el público en general.
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