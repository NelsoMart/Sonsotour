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


export default class ListaAtractivosGVF extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'La Gran Vía Férrea'
       }

    render() {
        return (

 <View style = {styles.container}>

   <ScrollView>  
     <View style = {styles.textSection}>
          <TouchableOpacity style={{flex:1}} >
             <Text style={{fontSize:15,fontStyle:'italic', textAlign:'center'}}>
             La Gran Vía Férrea cuenta con varios sitios para hacer turismo,
             ya que sus atractivos se actualizan constantemente dándoles nueva vida
             y haciéndolos ideales para disfrutar y pasar momentos agradables. Aquí 
             está la lista de todo lo que puedes encontrar en estos sitios.
             </Text>
           </TouchableOpacity>
      </View>

     <View style = {styles.container2}>
       <TouchableOpacity style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('PlaFerrovScreen')}>
         <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_plaza_ferroviaria.jpeg')}  // style={styles.imagen}    
                 />
      </TouchableOpacity>
     </View>
 
     <View style = {styles.container2}>
       <TouchableOpacity style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('MuseoFerrocScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_museo_ferrocarril.jpeg')}// style={styles.imagen} 
           />
       </TouchableOpacity>
      </View>  

      <View style = {styles.container2}>
       <TouchableOpacity style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('ComplefourCuadras')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_complejo_cuatro_cuadras.jpeg')}// style={styles.imagen} 
           />
       </TouchableOpacity>
      </View>  

      <View style = {styles.container2}>
       <TouchableOpacity style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('MercaditoAngel')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_mercadito_el_angel.jpeg')}// style={styles.imagen} 
           />
       </TouchableOpacity>
      </View>  

      <View style = {styles.container2}>
       <TouchableOpacity style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('AntEFerrocarrilScreen')}>
           <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../../img/imgPortada/_antigua_estacion_del_ferrocarril.jpeg')}// style={styles.imagen} 
           />
       </TouchableOpacity>
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