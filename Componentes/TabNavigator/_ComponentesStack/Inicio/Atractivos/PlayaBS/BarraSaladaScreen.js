import React, {Component} from 'react';

import {
  StyleSheet, Text, View, /*Image,*/ ScrollView, Dimensions,
   TouchableHighlight, TouchableOpacity, Image as MyImage
} from 'react-native';

import Image from 'react-native-scalable-image';

import Carousel from 'react-native-carousel-view';

//import { TouchableHighlight } from 'react-native-gesture-handler';

//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class BarraSaladaScreen extends Component { //? Pestaña principal

  static navigationOptions={
    title: 'Playa Barra Salada'
    }
    render() {
      return (       
  <View>
    <ScrollView>
      <View style = {styles.container}>
      {/* <TouchableOpacity style={{flex:1}} 
            //onPress={() => this.props.navigation.navigate('TraductorScreen')}
            >
          <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
          source={require('../../../../../../img/imgPortada/playa_barra_salada.jpeg')}//?ruta comprobada
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />
        </TouchableOpacity>  */}
        <Carousel
          //  width={375} // con esto activo, aparecen márgenes incómodos 
            height={250}
            delay={2000}
            indicatorAtBottom={true}
            //indicatorSize={10}
           // indicatorText="◙"
            adjustsFontSizeToFit ={true}//colocado por mí
            indicatorColor="skyblue"
            animate ={false} // esto comentado hace que se desplace automáticamente
            >
            <View style={styles.contentContainer}>
            <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
          source={require('../../../../../../img/imgPortada/playa_barra_salada.jpeg')}//?ruta comprobada
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           /> 
           </View>

            <View style={styles.contentContainer}>
            <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
          source={require('../../../../../../img/imgPortada/playa_barra_salada2.jpeg')}//?ruta comprobada
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />

            </View>
            <View style={styles.contentContainer}>
            <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
          source={require('../../../../../../img/imgPortada/playa_barra_salada.jpeg')}//?ruta comprobada
          // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
           />
          </View>

      </Carousel>

      </View>
     <View style = {styles.container}>
       <Text style={styles.TextStile}
      // numberOfLines={3} // serán las lineas que mostrará; no las demás
       >

          Es lugar de esparcimiento natural perteneciente al municipio 
          de Sonsonate, donde puedes pasar un momento 
          agradable en familia, con amigos o solo, si buscas escapar de la ciudad.{'\n\n'}
          La playa es visitada en todo el año, 
          pero tiene una mayor afluencia en verano: épocas de vacaciones.
          Si estás pensando ir a una playa,  Barra Salada es una buena opción.

          {<Text style={{fontSize:30, color: 'skyblue', fontWeight: "bold" }}>{'\n\n'}Datos generales</Text>}
       
          {<Text style={styles.TextStile2}>{'\n\n'}Clima:{'\n'}</Text>}

          El clima en esta playa suele ser muy cálido durante los meses de marzo y abril.
          Luego, de mayo a octubre es cálido durante el día, y relativamente frío
          en horas nocturas. Durante los meses que van de noviembre a febrero,
          el clima es generalmente fresco y agradable.

           {<Text style={styles.TextStile2}>{'\n\n'}Vía de acceso terrestre:{'\n'}</Text>}   
           Para llegar a Barra Salda, tomar la carretera que desde San Salvador conduce a...    
        </Text>

      </View>

    <View style={{marginBottom:15, alignItems: 'center'}}>

       <TouchableOpacity activeOpacity={.5} style = {styles.TouchableOpacityStyle}>

          <MyImage source={require('../../../../../../img/localization_icon.png')} 
              style={{height:30, width:30, overflow:"visible", marginStart: '36%'}} /> 
                 
           <Text style={{fontSize:20,color:'white'}}>Mapa</Text>

        </TouchableOpacity>

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
       width: 340,
      resizeMode:'contain', alignSelf: 'center', height:250
    },
    container:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      
      TextStile: {
        fontSize: 20,
        //textAlign: "center",
        justifyContent: 'space-around',
        margin: 20,
        //fontWeight: "bold",
        fontFamily:'verdana'
      },
      TextStile2: {
        fontSize: 20,
        fontFamily:'verdana',
        //textAlign: "center",
        justifyContent: 'space-around',
        margin: 20,
        fontWeight: "bold"
      },
      TouchableOpacityStyle:{
        paddingTop: 10,
        //padding: 30,
        paddingBottom: 10,
        marginRight:10,
        marginLeft: 10,
        borderRadius: 5,
        marginBottom: 7,
        marginTop: 15,
        width: '90%',
        flexDirection:'row',
        backgroundColor: '#00bcd4'
     },
     contentContainer: {
      borderWidth: 2,
      borderColor: '#CCC',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})