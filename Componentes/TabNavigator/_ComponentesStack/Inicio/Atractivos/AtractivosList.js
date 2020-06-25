//!LOCAL

import React, {Component} from 'react';
import {
  StyleSheet, View, Text, ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

/*
Parece que el problema desaparece después 
de agregar una clave a la imagen como: 
<Image key={some-image - $ {index}}/>
*/




 //imports de íconos
// import Icon from 'react-native-vector-icons/Ionicons';

//import de ícocno de base nativa
  import {Header, Left, Right, Icon/*,View*/} from 'native-base';

//import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class AtractivosScreen extends Component { //? Pestaña principal


    render() {
        return (

 <View style = {styles.container}>

      {/* <Header>
          <Left>
            <Icon name= "menu" onPress={()=>this.props.navigation.openDrawer()} />
           </Left>
      </Header> */}

   <ScrollView>  
     <View style = {styles.textSection}>
          <TouchableOpacity style={{flex:1}} >
             <Text style={{fontSize:15,fontStyle:'italic', textAlign:'center'}}>
             Sonsonate es una ciudad muy importante, ya que es el
             núcleo del departamento y tiene mucha afluencia de 
             personas que vienen con fines mercantiles. Pero además,
             como municipio, posee lugares que son ideales para 
             hacer turismo. A continuación verás todo lo que puedes 
             encontrar en Sonsonate.   
             </Text>
           </TouchableOpacity>
      </View>

     <View style = {styles.container2}>
       <TouchableOpacity style={{flex:1}} 
            onPress={() => this.props.navigation.navigate('ListaAtractivosGVF')}>
         <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
           source={require('../../../../../img/imgPortada/_la_gran_via_ferrea.jpeg')}  // style={styles.imagen}    
                 />
      </TouchableOpacity>
     </View>

      <View style = {styles.container2}>
        <TouchableOpacity style={{flex:1}} 
           onPress={() => this.props.navigation.navigate('IglesiasList')}>
                 <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                 source={require('../../../../../img/imgPortada/_iglesias.jpeg')} // style={styles.imagen} 
                       />
        </TouchableOpacity>
      </View>
   
      <View style = {styles.container2}>
          <TouchableOpacity style={{flex:1}} 
               onPress={() => this.props.navigation.navigate('BarraSaladaScreen')}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
               source={require('../../../../../img/imgPortada/_playa_barra_salada.jpeg')} //style={styles.imagen} 
                    /> 
           </TouchableOpacity>
      </View> 

      <View style = {styles.container2}>
          <TouchableOpacity style={{flex:1}} 
               onPress={() => this.props.navigation.navigate('ListaAtractivosCHist')}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
               source={require('../../../../../img/imgPortada/_centro_historico.jpeg')} //style={styles.imagen} 
                    /> 
           </TouchableOpacity>  
      </View>


      <View style = {styles.container2}>
          <TouchableOpacity style={{flex:1}}     
               onPress={() => this.props.navigation.navigate('ListaAtractivasTradiciones')}>
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}} 
                 source={require('../../../../../img/imgPortada/_tradiciones.jpeg')} //style={styles.imagen} 
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