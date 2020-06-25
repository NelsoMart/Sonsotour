import React, {Component} from 'react';
import { 
    View,
    Image,  
    StyleSheet,
    TouchableHighlight,TouchableOpacity,
    Alert,
    Linking
 } from 'react-native';

// import { TouchableHighlight,TouchableOpacity } from 'react-native-gesture-handler';

 export default class MenuItem extends Component{

    SampleFunction=()=>{
        Alert.alert(this.props.titulo, this.props.info)
          }

     render(){
         return(
           <View style = {styles.menuItem}>
             <View>
                <TouchableOpacity 
                onPress={()=>{Linking.openURL(this.props.llamar);}}
                onLongPress={this.SampleFunction}
                >
                   <Image source = {this.props.itemImage}            
                          style = {styles.image} />      
                </TouchableOpacity> 
              </View>
            </View>
         )
     }
 }

 const styles = StyleSheet.create({
    menuItem:{
        width: '33.333333%',
        height: '50%',
        padding:20,
    },
    image:{
        width: '100%',
        height:'100%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 20,
        //borderLeftColor: 'skyblue',
        borderWidth: 2
    }
 });