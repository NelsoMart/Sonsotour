

import React, {Component} from 'react';

import { Animated, Dimensions, Keyboard, StyleSheet,Text, 
  TextInput, UIManager, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { State: TextInputState } = TextInput;

export default class TraductorScreen extends Component{

  state = {
    shift: new Animated.Value(0),
  };

  /*******EVENTO QUE COMPARA EL TEXTO ESCRITO*********** */
 onChangeDo(text) {
  this.setState({ text })
  if (text === 'Sonsonate' || text === 'SONSONATE' || text === 'sonsonate' ) {
      return this.setState({ Sonsonate: true})
  }

  if (text === 'Izalco' || text === 'IZALCO' || text === 'izalco' ) {
    return this.setState({ Izalco: true})
}

 if (text === 'Jutiapa' || text === 'JUTIAPA' || text === 'jutiapa' ) {
  return this.setState({ Jutiapa: true})
}

  this.setState({ Sonsonate: false})
  this.setState({ Izalco: false})
  this.setState({ Jutiapa: false})
}
/********** */
UNSAFE_componentWillMount() {
  this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
  this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
}

componentWillUnmount() {
  this.keyboardDidShowSub.remove();
  this.keyboardDidHideSub.remove();
}
/************************* */

  render() {

    const { shift } = this.state;

    return (
      <ImageBackground
      
      source = {require('./../../../../../img/fondonativo.jpg')}
      style={styles.imageBackgorund}>
    
    <ScrollView>
      <View style={{alignContent:"center"}}>

          <Text 
          style={{fontSize:18,alignSelf:"center",color:'white',
          textAlign:"center", marginTop: '3%', marginBottom: '2%'}}>
        ¡Escribe nombres de lugares turísticos, de origen Nahuatl,
         y conoce su significado en español!      
          </Text>

      </View>
      <TextInput
            placeholder=" Escribe..."
          style={styles.inputText}
          onChangeText={ (text) => this.onChangeDo(text) }
       />

   <TextInput multiline editable = {false}
       style={styles.inputResltTRext} >
           
        { this.state.Sonsonate && <Text style={ styles.Textoestilo }> Río de muchas aguas, o Cuatrocientos ojos de agua</Text>  }
     
        { this.state.Izalco && <Text style={ styles.Textoestilo }> Ciudad de las casas de obsidiana</Text>  }

        { this.state.Jutiapa && <Text style={ styles.Textoestilo }> Río de jutes</Text>  }
      </TextInput> 

    </ScrollView>
 </ImageBackground>
    );
  }
  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }

}

const styles = StyleSheet.create({

  imageBackgorund:{
    flex:1,
     width:'100%',
     height:'100%'
  },
  container: {
    alignItems: "center",
   // backgroundColor: 'rgba(47,250,218, .5)',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  textInput: {
    backgroundColor: 'white',
    height: 30,
  },
  inputText: {
   fontSize:20,
   alignSelf: "center",
    backgroundColor: 'rgba(249,249,247, .5)',
    height: '15%',
    width: '90%',
    borderColor: 'black', 
     borderWidth: 0.5,
      paddingTop: 10,
      marginTop: 15, // 50 default
      borderRadius:8,
      marginBottom: '4%',
  },
  inputResltTRext: {
    alignSelf: "center",
    fontSize:25,
    height:150,
    backgroundColor: 'rgba(249,249,247, .5)',
   // height: 150,
    width: '90%',
     borderColor: 'black', 
     borderWidth: 0.5,
     // marginLeft: 10,
     // paddingTop: 20,
      marginTop: '12%',
      borderRadius:8,
      marginBottom: '4%',
  },
  Textoestilo: {
    fontSize:25,
    color: 'brown',
    //fontWeight:'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  }

});
