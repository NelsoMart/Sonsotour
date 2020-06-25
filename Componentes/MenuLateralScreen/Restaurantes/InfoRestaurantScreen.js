import React, {Component} from 'react';

import {
      StyleSheet, Alert, Text, View, ScrollView, Dimensions, Linking,
    TouchableOpacity,  Image as MyImage, 
} from 'react-native';

import Image from 'react-native-scalable-image';

import Carousel from 'react-native-carousel-view';

//var {width} = Dimensions.get('window'); //!método responsive antiguo

import config from './config';

export default class InfoRestaurantScreen extends Component { //? Pestaña principal

    //valor= 'this.props.navigation.state.params.flower_name';

    static navigationOptions = ({ navigation }) => ({ // full response
      title: String(navigation.state.params.nombreRest)
    });


  MetodoMapa = () => {
      this.props.navigation.navigate('Maps',
      {
           titulo: this.props.navigation.state.params.titulo,
           descripcMapa: this.props.navigation.state.params.descripcMapa,
           latitude: this.props.navigation.state.params.latitude,
           longitude: this.props.navigation.state.params.longitude
         }
        )
     }

  _compFacebook = () => {
    
     const faceLink = this.props.navigation.state.params.facebookLink;
             
    //  if( this.props.navigation.state.params.facebookLink == '' || 
    //     this.props.navigation.state.params.facebookLink == null ){
    //       //todo: Si la variable link viene vacía de la bd, no se activará el botón
    //       return null, //,
    //                Alert.alert('1')
    //   } else

        if( faceLink.includes('https://www.') || faceLink.includes('http://www.') ) { //todo: sila variable no viene vacía de la bd e incluye 'https://www' en su cadena

              Alert.alert('2'),
              Linking.openURL(faceLink)

              } else { //todo: La variable no viene vacía pero sólo trae el id de usuario ID_USER, no todo el link.

          const facebookUrlScheme = `fb://facewebmodal/f?href=https://www.facebook.com/${faceLink}`;

            Linking.canOpenURL(facebookUrlScheme)
                 .then((supported) =>
                     Linking.openURL(
                         supported
                             ? 
                             facebookUrlScheme   
                             :
                           'https://www.facebook.com/'+faceLink,
                            Alert.alert('4')
                         )
                     )
                     .catch((err) => console.error('An error occurred', err));
               } 
  }

  _compInstagram = () => {
    
    const instaLink = this.props.navigation.state.params.instagramLink;    

    if ( instaLink.includes('https://www.')  || instaLink.includes('http://www.') ) { //todo: sila variable no viene vacía de la bd e incluye 'https://www' en su cadena

              Alert.alert('2'),
              Linking.openURL(instaLink)

              } else { //todo: La variable no viene vacía pero sólo trae el id de usuario ID_USER, no todo el link.

          const instagramUrlScheme = `instagram://user?username=${instaLink}`;

            Linking.canOpenURL(instagramUrlScheme)
                 .then((supported) =>
                     Linking.openURL(
                         supported
                             ? 
                             instagramUrlScheme   
                             :
                           'https://instagram.com/'+instaLink, //! ojo con http
                            Alert.alert('4')
                         )
                     )
                     .catch((err) => console.error('An error occurred', err));
               } 
  }

  _compWhatsapp = () => {
    
    const numWhatsapp = this.props.navigation.state.params.whatsappNum;         
          // Alert.alert('2'),
            Linking.openURL(`tel:${numWhatsapp}`)              
  }

  _compPageWeb = () => {
    
    const pageLink = this.props.navigation.state.params.pageWebLink;
       // Alert.alert('2'),
        Linking.openURL(pageLink)             
  }


    render() {

      return (  
             
      <View style = {styles.container}>
           <ScrollView>

                <Carousel
                      height={253}   delay={2000}
                      indicatorAtBottom={true}
                      adjustsFontSizeToFit ={true} //colocado por mí
                      indicatorColor="skyblue"
                      animate ={false} // esto comentado, hace que se desplace automáticamente
                      >
             {
              this.props.navigation.state.params.imagen == '' || 
              this.props.navigation.state.params.imagen == null ?
               null
               :
               <View style={styles.contentContainer}>
                 <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                        source = {{ uri: this.props.navigation.state.params.imagen}} /> 
               </View>
             }
             {
              this.props.navigation.state.params.imagen2 == '' || 
              this.props.navigation.state.params.imagen2 == null ?
               null
               :
               <View style={styles.contentContainer}>
                  <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                        source = {{ uri: this.props.navigation.state.params.imagen2}} /> 
              </View>
               }
               {
                 this.props.navigation.state.params.imagen3 == '' || 
                this.props.navigation.state.params.imagen3 == null ?
                null
                 :
                 <View style={styles.contentContainer}>
                   <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                          source = {{ uri: this.props.navigation.state.params.imagen3}} /> 
                </View>
                }

         </Carousel>

         <View style={styles.iconBar /* //! Iconos Redes Sociales (4) */} >
           
           { //! facebook incon
            this.props.navigation.state.params.facebookLink == '' || 
            this.props.navigation.state.params.facebookLink == null ?
               null
           :
          <TouchableOpacity onPress={()=> {  this._compFacebook() }} >
             <MyImage style = {styles.icon} source = {config.images.facebookIcon} />
          </TouchableOpacity>
           }

           { //! instagram incon
            this.props.navigation.state.params.instagramLink == '' || 
            this.props.navigation.state.params.instagramLink == null ?
               null
           :
          <TouchableOpacity onPress={()=> {  this._compInstagram() }} >
              <MyImage style = {styles.icon} source = {config.images.instaGramIcon} />
          </TouchableOpacity>
           }

          {/* <TouchableOpacity>
             <MyImage style = {styles.icon, {height:30,width:30,  marginLeft:15,} } source = {config.images.twitterIcon} />
          </TouchableOpacity> */}

          { //! whatsapp incon
            this.props.navigation.state.params.whatsappNum == '' || 
            this.props.navigation.state.params.whatsappNum == null ?
               null
           :
          <TouchableOpacity onPress={()=> {  this._compWhatsapp() }} >
             <MyImage style = {styles.icon} source = {config.images.whatsappIcon} />
          </TouchableOpacity>
           }

          {/* <TouchableOpacity>
             <MyImage style = {styles.icon, {height:30,width:30,  marginLeft:15,} } source = {config.images.youtubeIcon} />
          </TouchableOpacity> */}

          { //! pageWeb incon
            this.props.navigation.state.params.pageWebLink == '' || 
            this.props.navigation.state.params.pageWebLink == null ?
               null
           :
          <TouchableOpacity onPress={()=> {  this._compPageWeb() }} >
             <MyImage style = {[styles.icon,{tintColor: 'blue'}]} source = {config.images.pageWebIcon} />
          </TouchableOpacity>
          }

         </View>        

         <View style = {styles.container}>
            <Text /* //! Dirección */
                   style={styles.TextDirectionStyle}>
                 {this.props.navigation.state.params.direccion}
            </Text>
          </View>      

          <View style = {styles.container}>
            <Text /* //! Texto */
                   style={styles.TextStile}>
                 {this.props.navigation.state.params.descripcion}
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
         
                   <MyImage source={require('../../../img/localization_icon.png')} 
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

  // image:{ //?método responsive antiguo
  //   width: width * 0.9
  // },
 
    imagen: {
      flex: 1,
       width: 340,
      resizeMode:'contain', alignSelf: 'center', height:250
    },
    container:  {
        flex: 1,
      //  alignItems: 'center',
        justifyContent: 'center'
      },
      
      TextStile: {
        fontSize: 20,
        //textAlign: "center",
        justifyContent: 'space-around',
        margin: '4%',
        //fontWeight: "bold",
        fontFamily:'verdana'
      },
      TextDirectionStyle: {
        fontSize: 15,
       justifyContent: 'space-around',
        margin: '4%',
        // fontWeight: "bold",
        color: '#218242', // como el color que está en Tripadvisor text
        // fontStyle: 'italic'
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


     iconBar: { //* para los iconos de redes sociales
       height: config.styleConstants.rowHeight,
       width: 100 + "%",
       borderColor: "rgb(233, 233, 233)",
       borderTopWidth: StyleSheet.hairlineWidth,
       borderBottomWidth: StyleSheet.hairlineWidth,
       flexDirection: "row",
        alignItems: "center"
     },
     icon: {
              marginLeft: 12,
              height:30,width:30,
     }
});