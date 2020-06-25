import React, {Component} from 'react';
import {
  StyleSheet, View, Text, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

/*!
//!ojo
Parece que el problema de imágenes en blanco desaparece después 
de agregar una clave a la imagen como: 
<Image key={some-image - $ {index}}/>
*/


 //imports de íconos
// import Icon from 'react-native-vector-icons/Ionicons';

//import de ícocno de base nativa
import {Header, Left, Right, Icon/*,View*/} from 'native-base';

//import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class ListaAtractivosCHist extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Centro Histórico'
       }

    render() {
        return (

 <View style = {styles.container}>

   <ScrollView>  
     <View style = {styles.textSection}>
          <TouchableHighlight style={{flex:1}} >
             <Text style={{fontSize:15,fontStyle:'italic', textAlign:'center'}}>
             Aquí encontrarás la escencia de la cultura que marca al municipio
             de Sonsonate, representada en construcciones arquitectónicas que
             demuestran ser una belleza que perdura a través de los siglos...

             </Text>
           </TouchableHighlight>
      </View>

     <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('ParqueSonScreen')}>
         <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_parque_sonsonate.jpeg')}  // style={styles.imagen}    
                 />
      </TouchableHighlight>
     </View>
 
      <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('AlcaldiaScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_alcaldia_municipal.jpeg')}// style={styles.imagen} 
           />
       </TouchableHighlight>
      </View> 

      <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('PalacioCulturalScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_palacio_cultural.jpeg')}// style={styles.imagen} 
           />
       </TouchableHighlight>
      </View>         

      <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('CasaSalarrueScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_casa_de_salarrue.jpeg')}// style={styles.imagen} 
           />
       </TouchableHighlight>
      </View>         

      <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('FirsCasadeLadrilloScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_primera_casa_de_ladrillo.jpeg')}// style={styles.imagen} 
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