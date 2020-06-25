import React, {Component} from 'react';
import {
  StyleSheet, View, Text, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

/*!
//!ojo
Parece que el problema desaparece después 
de agregar una clave a la imagen como: 
<Image key={some-image - $ {index}}/>
*/


 //imports de íconos
// import Icon from 'react-native-vector-icons/Ionicons';

//import de ícocno de base nativa
import {Header, Left, Right, Icon/*,View*/} from 'native-base';

//import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class ListaAtractivasTradiciones extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Tradiciones'
       }

    render() {
        return (

 <View style = {styles.container}>

   <ScrollView>  
     <View style = {styles.textSection}>
          <TouchableHighlight style={{flex:1}} >
             <Text style={{fontSize:15,fontStyle:'italic', textAlign:'center'}}>
            Estas tradiciones son actividades que se realizan en fechas 
            específicas del año en el municipio, y
            casi siempre se traducen en vacaciones para sus
            habitantes... Disfruta de estas bellas festividades.

             </Text>
           </TouchableHighlight>
      </View>

     <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('SemanaSantaScreen')}>
         <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_semana_santa.jpeg')}  // style={styles.imagen}    
                 />      
      </TouchableHighlight>
     </View>
 
     <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('TronosVeracruzScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_trono_veracruz.jpeg')}// style={styles.imagen} 
           />
       </TouchableHighlight>
      </View>

      <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('TronosPilarScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_trono_pilar.jpeg')}// style={styles.imagen} 
           />
       </TouchableHighlight>
      </View> 

      {/* <View style = {styles.container2}>
       <TouchableHighlight style={{flex:1}} //!Festival de Coco, que por el momento no se usa, para usar sólo basta con descomentar este View
            onPress={() => this.props.navigation.navigate('FestivalDelCocoScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_festival_de_coco.jpg')}// style={styles.imagen} 
           />
       </TouchableHighlight>
      </View>      */}

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