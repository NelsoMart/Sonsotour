import React, {Component} from 'react';

import {
  StyleSheet, Text, View, ScrollView, Dimensions, Linking,
   TouchableHighlight, TouchableOpacity,  Image as MyImage
} from 'react-native';

import Image from 'react-native-scalable-image';

//var {width} = Dimensions.get('window'); //!método responsive antiguo

export default class InfoEventoScreen extends Component { //? Pestaña principal

    //valor= 'this.props.navigation.state.params.flower_name';

    static navigationOptions = ({ navigation }) => ({ // full response
      title: String(navigation.state.params.Nombre)
    });


    MetodoMapa = () => {
      this.props.navigation.navigate('Maps',
      {
        titulo: this.props.navigation.state.params.titulo,
        descripcMapa: this.props.navigation.state.params.descripcMapa,
        latitude: this.props.navigation.state.params.latitude,
        longitude: this.props.navigation.state.params.longitude,

        }
       )
    }

    _visitFB = (url) => {
      Linking.openURL(url);
  }

    render() {
      const pageID = 159616034235; // Waltmart's ID 
const scheme = Platform.select({ ios: 'fb://profile/', android: 'fb://page/' });

const url = `${scheme}${pageID}`;

    return (  
             
         <View style = {styles.container}>
           <ScrollView>
       
             <View style = {styles.container}>
               <TouchableOpacity style={{flex:1}} 
                   //onPress={() => this.props.navigation.navigate('TraductorScreen')}
                   >
                <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
                          source = {{ uri: this.props.navigation.state.params.imagen}} /*style={styles.imageViewContainer}*/
                 // resizeMode = 'cover' style = {[styles.image,{overflow: 'visible'}]} //!método responsive antiguo
                  />
               </TouchableOpacity>
             </View>
       
            <View style = {styles.container}>
              <Text /* //! Texto */
                   style={styles.TextStile}>
                  {this.props.navigation.state.params.Descripcion}
              </Text>
            </View>
       
            { 
                //! Validación del botón del mapa, que mostrará el botón sólo si tanto 'latitude' como 'longitide' no vienen null de la bd
               ((this.props.navigation.state.params.latitude==null || this.props.navigation.state.params.latitude=='')
               ||(this.props.navigation.state.params.longitude==null || this.props.navigation.state.params.longitude==''))?
       
                  null
                :
            <View /* //! Botón del Mapa */ >
                <TouchableOpacity activeOpacity={.5} style = {styles.TouchableOpacityStyle}
                   onPress={() => this.MetodoMapa()}>
       
                   <MyImage source={require('../../../../../img/localization_icon.png')} 
                         style={{height:30, width:30, overflow:"visible", marginStart: '33%'}} /> 
                 
                  <Text style={{fontSize:20,color:'white'}}> Mapa </Text>
                
              </TouchableOpacity>
            </View>
            }

              {/* <View>
            <TouchableOpacity activeOpacity={.5} style = {styles.TouchableOpacityStyleFacebook}
                  //  onPress={() => this.MetodoMapa()}
                  // onPress={()=>{Linking.openURL('fb://page/101306095226')}}
                    // onPress={()=>{Linking.openURL('fb://facewebmodal/f?href=https://www.facebook.com/JoelOsteen')}}

                  // onPress = {()=> {Linking.openURL('http://instagram.com/_p/nelsonmartth')}}

                  // onPress = {()=> { Linking.openURL('instagram://user?username=nelsonmartth')}}


                    onPress={()=> {

                      Linking.canOpenURL("fb://profile/JoelOsteen").then(supported => {
                      if (supported) {
                            return Linking.openURL("fb://profile/JoelOsteen");
                             } else { 
                        return Linking.openURL("https://www.facebook.com/101306095226"); //mismo
                        // return Linking.openURL("https://www.facebook.com/JoelOsteen");//mismo
                      }
                   })

                    }}


            // onPress={()=> {

            //   const twitterUsername = "nelsonnet2"
                        
            //         const twitterUrlScheme = `twitter://user?screen_name=${twitterUsername}`;

            //          Linking.canOpenURL(twitterUrlScheme)
            //              .then((supported) =>
            //                  Linking.openURL(
            //                      supported
            //                          ? twitterUrlScheme
            //                          : `https://www.twitter.com/${twitterUsername}`
            //                      )
            //                  )
            //                  .catch((err) => console.error('An error occurred', err));
  
            //           }}




                  // onPress={()=>{Linking.openURL('fb://profile/walmart')}}
                  // onPress= {()=> this._visitFB('https://www.facebook.com/Arcolpeintures/')}

                   >   

            <Text style={{fontSize:20,color:'white'}}> Facebook </Text>
               
              </TouchableOpacity>
              </View> */}

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

      TouchableOpacityStyleFacebook:{
        paddingTop: 10,
        //padding: 30,
        paddingBottom: 10,
        // borderRadius: 25,
        marginBottom: '3%',
        marginTop: '7%',
        width: '90%',
        flexDirection:'row',
        backgroundColor: 'blue',
        alignSelf: 'center'
     },
})