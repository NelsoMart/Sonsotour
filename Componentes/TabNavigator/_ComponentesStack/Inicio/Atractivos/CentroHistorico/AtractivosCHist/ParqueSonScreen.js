import React, {Component} from 'react';

import {
  StyleSheet, Text, View, /*Image,*/ ScrollView, Dimensions,
  TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

// import { TouchableHighlight } from 'react-native-gesture-handler';
//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class ParqueSonScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Parque Rafael Campo'
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
          source={require('../../../../../../../img/imgPortada/parque_sonsonate.jpeg')}
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />
        </TouchableHighlight>
      </View>

     <View style = {styles.container}>
       <Text style={styles.TextStile}>
        El Parque Rafael Campos, es el parque principal del municipio,
        y es considerado el núcleo donde se desarrolló la ciudad
        desde la época colonial, y centro de las edificaciones
        más antiguas. Se encuentra rodeado por la catedral, casa 
        consistorial y otros edificios de importancia comercial. 
        En ese lugar se erigió un busto en honor al presidente Rafael 
        Campo en el año 1913.
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