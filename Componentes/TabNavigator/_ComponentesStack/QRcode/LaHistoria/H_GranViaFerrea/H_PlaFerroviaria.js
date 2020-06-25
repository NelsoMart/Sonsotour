import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

export default class H_PlaFerroviaria extends Component { //? Pestaña principal

    static navigationOptions={
        title: 'La Gran Vía Férrea'
      }

  render() {
      return (     
                <View style = {styles.container}>
                   <Text style={styles.TextStile}>
                       Información en construcción...
                   </Text>
                </View> 
             );
        }
  }

const styles = StyleSheet.create({

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
      }
})