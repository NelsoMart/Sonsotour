
import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';
//import { TouchableHighlight } from 'react-native-gesture-handler';

export default class CatedralScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Catedral Santísima Trinidad'
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
           source={require('../../../../../../../img/imgPortada/iglesia_trinidad.jpeg')} // style={styles.imagen} 
           />
             </TouchableHighlight>
           </View>
           
          <View style = {styles.container}>
            <Text style={styles.TextStile}>
            La iglesia de la parroquia de la Santísima Trinidad 
            fue bendecida el 1 de abril de 1887. Para 1986, el 
            papa Juan Pablo II erigió la Diócesis de Sonsonate, 
            por lo que el templo se consagró como catedral. Su 
            primer obispo fue monseñor José Carmen di Pietro. El 
            2001, la catedral sufrió daños por el terremoto del 13 
            de enero de ese año, hasta quedar inutilizada. 
            Desde entonces fue sometida a reparaciones.
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
            // lineHeight: 150
           }
     })