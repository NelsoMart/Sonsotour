import React, {Component} from 'react';

import {
  StyleSheet, Text, View, Image as MyImage, ScrollView, Dimensions, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

import Carousel from 'react-native-carousel-view';

// import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class AtractivoScreen extends Component { //? Pestaña principal

  static navigationOptions = ({ navigation }) => ({ // full response
      title: String(navigation.state.params.nombre) });

   MetodoMapa = () => {
      this.props.navigation.navigate('Maps'
       ,{
          titulo: this.props.navigation.state.params.titulo,
          descripcMapa: this.props.navigation.state.params.descripcMapa,
          latitude: this.props.navigation.state.params.latitude,
          longitude: this.props.navigation.state.params.longitude
        }
      )
    }

  render(){ 
    return (  

     <View style = {styles.container}>
       <ScrollView>
         <Carousel
                      height={253}   delay={2000}   indicatorAtBottom={true}
                      adjustsFontSizeToFit ={true} //colocado por mí
                      indicatorColor="skyblue"
                      animate ={false} // esto comentado, hace que se desplace automáticamente
                      >
             {
              this.props.navigation.state.params.imgSitio == '' || 
              this.props.navigation.state.params.imgSitio == null ?
                     null
               :
               <View style={styles.contentContainer}>
                 <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                        source = {{ uri: this.props.navigation.state.params.imgSitio}} /> 
               </View>
              }
             {
              this.props.navigation.state.params.imgSitio2 == '' || 
              this.props.navigation.state.params.imgSitio2 == null ?
                      null
               :
               <View style={styles.contentContainer}>
                  <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                        source = {{ uri: this.props.navigation.state.params.imgSitio2}} /> 
              </View>
              }
              {
                this.props.navigation.state.params.imgSitio3 == '' || 
                this.props.navigation.state.params.imgSitio3 == null ?
                      null
                 :
                 <View style={styles.contentContainer}>
                   <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                          source = {{ uri: this.props.navigation.state.params.imgSitio3}} /> 
                </View>
              }
         </Carousel>

         <View style = {styles.container}>
              <Text /* //! Texto */
                      style={styles.TextStile}>
                   {this.props.navigation.state.params.texto}
              </Text>
         </View>

         {  //todo: Validación del botón del mapa, que mostrará el botón sólo si tanto 'latitude' como 'longitide' no vienen null de la bd

               ((this.props.navigation.state.params.latitude==null || this.props.navigation.state.params.latitude=='')
               ||(this.props.navigation.state.params.longitude==null || this.props.navigation.state.params.longitude==''))?
       
                  null
                :
              <View /* //! Botón del Mapa */ >
                  <TouchableOpacity activeOpacity={.5} style = {styles.TouchableOpacityStyle}
                     onPress={() => this.MetodoMapa()}>
         
                   <MyImage source={require('../../../../../../img/localization_icon.png')} 
                         style={{height:30, width:30, overflow:"visible", marginStart: '33%'}} /> 
                 
                   <Text style={{fontSize:20,color:'white'}}> Mapa </Text>
                   
                  </TouchableOpacity>
              </View>
          }

       </ScrollView>
       </View>
       
     );
   }
 }

const styles = StyleSheet.create({

  // image:{ //!método responsive antiguo
  //   width: width * 0.9
  // },
 

    container:  {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
      },

      contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      TextStile: {
        fontSize: 20,
        //textAlign: "center",
        justifyContent: 'space-around',
        margin: '4%',
        //fontWeight: "bold",
        fontFamily:'verdana'
      },

      TouchableOpacityStyle:{
        paddingTop: 10,
        //padding: 30,
        paddingBottom: 10,
        borderRadius: 25,
        marginBottom: '4%',
        marginTop: '7%',
        width: '90%',
        flexDirection:'row',
        backgroundColor: '#00bcd4',
        alignSelf: 'center'
     },
})