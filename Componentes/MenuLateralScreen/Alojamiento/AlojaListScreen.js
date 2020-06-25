import React, {Component} from 'react';
import { 
    View,
    Text,
    Image,  
    StyleSheet,
 } from 'react-native';

// import { TouchableHighlight,TouchableOpacity } from 'react-native-gesture-handler';

 export default class AlojaListScreen extends Component{
    constructor(props)
    {
      super(props);
    }

  
    render()
    {
      return( //! Esto es sólo para la cuadrícula de imagenes de alojamiento
        <View style = { styles.imageHolder }>
          <Image source = {{ uri: this.props.imageURI }} style = { styles.image }/>
          <View style = { styles.textViewHolder }>
            <Text numberOfLines = { 2 } style = { styles.textOnImage }>
              { this.props.name }
            </Text>
          </View>
        </View>
      );
    }
  }

 const styles = StyleSheet.create({

  image:
  {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  imageHolder:
  {
    margin: 5,
    height: 160,
    flex: 1,
    position: 'relative'
  },
  textOnImage:
  {
    fontSize:12,
    color: 'white'
  },

  textViewHolder:
  {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center'
  },

 });