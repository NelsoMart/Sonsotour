import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions, Image as Images,
   TouchableHighlight, TouchableOpacity
} from 'react-native';

import Image from 'react-native-scalable-image';

// import { TouchableHighlight } from 'react-native-gesture-handler';

//import de ícocno de base nativa
import {Header, Left, Right, Icon} from 'native-base';

export default class IdiomasScreen extends Component { //? Pestaña principal

  static navigationOptions={

      
    drawerIcon: ({tintColor}) => (       
      // <Images source={require('../../../img/language.png')} //!forma1
      // style={{height:24, width:24, color: tintColor, overflow:"visible"}} />
       <Icon name='md-bookmarks' style={{fontSize:24,color:tintColor}} />
    )
  }

    render() {
      return (
  <View style = {styles.container}>
   <ScrollView >
      <View style = {styles.container}>
        <TouchableHighlight 
            //onPress={() => this.props.navigation.navigate('TraductorScreen')}
            >
          <Image width={Dimensions.get('window').width}  style={{overflow:"visible"}}
           source={require('../../../img/working.png')} // style={styles.imagen} 
           />
        </TouchableHighlight>
      </View>
      
     <View style = {styles.container}>
       <Text style={styles.TextStile}>
       Información sobre Idiomas, en construcción...    
       </Text>
     </View> 

     </ScrollView>
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