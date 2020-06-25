import React, {Component} from 'react';
import {
  StyleSheet, View, Text, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';
import Image from 'react-native-scalable-image';

//import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class IglesiasList extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Iglesias'
  }
  
    render() {
        return (

 <View style = {styles.container}>
   <ScrollView>  
      <View style = {styles.textSection}>
          <TouchableHighlight style={{flex:1}} >
             <Text style={{fontSize:15,fontStyle:'italic', textAlign:'center'}}>
             En Sonsonate, algo que marca a su gente, son las tradiciones;
            y qué mejor forma de expresión que las iglesias que posee, las 
            cuales tienen siglos de historia, y resguardan imágenes que
            son una verdadera joya arqueológica y de fe, por ser únicas.
            Además del fervor que se vive en ellas en la celebración de la
            famosa Semana Santa, cada año. No querrás perdertela.  
             </Text>
           </TouchableHighlight>
      </View> 

     <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('CatedralScreen')}>
         <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_iglesia_trinidad.jpeg')}  // style={styles.imagen}    
                 />
      </TouchableHighlight>
     </View>
 
     <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('IglesiaAngelesScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_iglesia_angeles.jpeg')}// style={styles.imagen} 
           />
      </TouchableHighlight>
     </View>
   
      <View style = {styles.container2}>
          <TouchableHighlight style={{flex:1}} 
               onPress={() => this.props.navigation.navigate('IglesiaPilarScreen')}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_iglsea_pilar.jpeg')}// style={styles.imagen} 
           /> 
           </TouchableHighlight>
      </View> 

      <View style = {styles.container2}>
          <TouchableHighlight style={{flex:1}} 
               onPress={() => this.props.navigation.navigate('IglesiaSantoDomingoScreen')}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_iglesia_santo_domingo.jpeg')}  // style={styles.imagen}    
           /> 
           </TouchableHighlight>
      </View> 

    </ScrollView>
  </View>

    );
  }
}
 

  const styles = StyleSheet.create({

    imagen: { //!No se usa, por el momento...
        flex: 1,
        // height: '100%',
        // width: '100%',
           //*  width: 300,
           //*  height: 200, 
        // resizeMode: 'contain',
            //* padding: 0,
            //* flexDirection: 'row', flexWrap:'wrap', resizeMode: 'contain'
        resizeMode: 'cover', // center, stretch
        alignSelf: 'center',
        height: 180,
        width: 340,
        flexDirection: 'row',
        flexWrap:'nowrap',
    },
    container:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      container2:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 1,
      },

      textSection:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 25,
          paddingBottom: 25

        }
})



