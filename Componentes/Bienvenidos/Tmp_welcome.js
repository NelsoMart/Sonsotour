// This is an Example to Share Post on Facebook from React Native App
import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';

let facebookParameters = ""

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FacebookShareURL: 'https://aboutreact.com',
      FacebookShareMessage: 'Hello Guys, This is a testing of facebook share example',
    };
  }
  postOnFacebook=() => {
    let FacebookShareURL = this.state.FacebookShareURL;
    let FacebookShareMessage = this.state.FacebookShareMessage;
    if(this.state.FacebookShareURL != undefined)
    {
        if(facebookParameters.includes("?") == false)
        {
            facebookParameters = facebookParameters+"?u="+encodeURI(this.state.FacebookShareURL);
        }else{
            facebookParameters = facebookParameters+"&u="+encodeURI(this.state.FacebookShareURL);
        }
    }
    if(this.state.FacebookShareMessage != undefined)
    {
        if(facebookParameters.includes("?") == false)
        {
            facebookParameters = facebookParameters+"?quote="+encodeURI(this.state.FacebookShareMessage);
        }else{
            facebookParameters = facebookParameters+"&quote="+encodeURI(this.state.FacebookShareMessage);
        }
    }
    let url = 'https://www.facebook.com/sharer/sharer.php'+facebookParameters;
    Linking.openURL(url).then((data) => {
      alert('Facebook Opened');
    }).catch(() => {
      alert('Something went wrong');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
          Example to share on Facebook from React Native App
        </Text>
        <Text style={{marginTop: 20}}>
          Enter Facebook Post Content
        </Text>
        <TextInput
          value={this.state.FacebookShareMessage}
          onChangeText={FacebookShareMessage => this.setState({ FacebookShareMessage })}
          placeholder={'Enter Facebook Post Content'}
          style={styles.input}
        />
        <Text style={{marginTop: 20}}>
          Enter URL to share
        </Text>
        <TextInput
          value={this.state.FacebookShareURL}
          onChangeText={FacebookShareURL => this.setState({ FacebookShareURL })}
          placeholder={'Enter URL to share'}
          style={styles.input}
        />
        <View style={{marginTop:20}}>
          <Button
            onPress={this.postOnFacebook}
            title= 'Share on Facebook'
            />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    padding: 30,
    backgroundColor: '#ffffff',
  },
 input: {
   width:'100%',
   height: 44,
   padding: 10,
   backgroundColor: '#D3D3D3',
 },
});



//! Código  a cerca de reglas que cumplir en un formulario --- Found!
// import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import Input from './APIKit';

// export default class App extends React.Component {
//   state = {
//     isValid: null,
//   };

//   render() {
//     const { isValid } = this.state;
//     console.log('isValid', isValid);

//     return (
//       <View style={styles.container}>
//         <Text>TextInput validation using RegEx rules</Text>
//         <Input
//           placeholder="Password"
//           style={styles.input}
//           pattern={[
//             '^.{8,}$', // min 8 chars
//             '(?=.*\\d)', // number required
//             '(?=.*[A-Z])', // uppercase letter
//           ]}
//           onValidation={isValid => this.setState({ isValid })}
//         />
//         <View>
//           <Text style={{ color: isValid && isValid[0] ? 'green' : 'red' }}>
//             Rule 1: min 8 chars
//           </Text>
//           <Text style={{ color: isValid && isValid[1] ? 'green' : 'red' }}>
//             Rule 2: number required
//           </Text>
//           <Text style={{ color: isValid && isValid[2] ? 'green' : 'red' }}>
//             Rule 3: uppercase letter
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   input: {
//     height: 48,
//     width: '80%',
//     padding: 8,
//     margin: 16,
//     borderColor: 'gray',
//     borderWidth: StyleSheet.hairlineWidth,
//     borderRadius: 8,
//   },
// });




/* //! Example of Recat Native Loading Spinner Overlay (Found)
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends React.Component {
  state = {
    //default loading false
    loading: false,
  };
  componentDidMount() {
    //Setting a timer to show the spinner demo in every 3 second
    setInterval(() => {
      this.setState({
        //change the state of the laoding in every 3 second
        loading: !this.state.loading,
      });
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={this.state.loading}
          //Text with the Spinner 
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          Spinner Overlay Example
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
*/



/*// <ROOT>/App/Views/Login/LoginView.js
//! ESTE ES UN EJEMPLO DE LOGIN VALIDADO USANDO AXIOS PARA LLAMADAS HTTP y un spinner para gargar
import React, {Component} from 'react';


import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import APIKit, {setClientToken} from './APIKit';

const initialState = {
  username: '',
  password: '',
  errors: {},
  isAuthorized: false,
  isLoading: false,
};

class Tmp_welcome extends Component {
  state = initialState;

  componentWillUnmount() {}

  onUsernameChange = username => {
    this.setState({username});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPressLogin() {
    const {username, password} = this.state;
    const payload = {username, password};
    console.log(payload);

    const onSuccess = ({data}) => {
      // Set JSON Web Token on success
      setClientToken(data.token);
      this.setState({isLoading: false, isAuthorized: true});
    };

    const onFailure = error => {
      console.log(error && error.response);
      this.setState({errors: error.response.data, isLoading: false});
    };

    // Show spinner when call is made
    this.setState({isLoading: true});

    APIKit.post('/api-token-auth/', payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  getNonFieldErrorMessage() {
    // Return errors that are served in `non_field_errors`
    let message = null;
    const {errors} = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field
    // Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {this.state.errors[field].map(item => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  render() {
    const {isLoading} = this.state;

    return (
      <View style={styles.containerStyle}>
        <Spinner visible={isLoading} />

        {!this.state.isAuthorized ? <View>
          <View style={styles.logotypeContainer}>
            <Image
              source={require('../../img/logo_Sonsonate.jpg')}
              style={styles.logotype}
            />
          </View>

          <TextInput
            style={styles.input}
            value={this.state.username}
            maxLength={256}
            placeholder="Enter username..."
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={event =>
              this.passwordInput.wrappedInstance.focus()
            }
            onChangeText={this.onUsernameChange}
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />

          {this.getErrorMessageByField('username')}

          <TextInput
            ref={node => {
              this.passwordInput = node;
            }}
            style={styles.input}
            value={this.state.password}
            maxLength={40}
            placeholder="Enter password..."
            onChangeText={this.onPasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            onSubmitEditing={this.onPressLogin.bind(this)}
            secureTextEntry
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />

          {this.getErrorMessageByField('password')}

          {this.getNonFieldErrorMessage()}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.onPressLogin.bind(this)}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View> : <View><Text>Successfully authorized!</Text></View>}
      </View>
    );
  }
}

// Define some colors and default sane values
const utils = {
  colors: {primaryColor: '#af0e66'},
  dimensions: {defaultPadding: 12},
  fonts: {largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12},
};

// Define styles here
const styles = {
  innerContainer: {
    marginBottom: 32,
  },
  logotypeContainer: {
    alignItems: 'center',
  },
  logotype: {
    maxWidth: 280,
    maxHeight: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  input: {
    height: 50,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: utils.dimensions.defaultPadding,
  },
  loginButton: {
    borderColor: utils.colors.primaryColor,
    borderWidth: 2,
    padding: utils.dimensions.defaultPadding,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  loginButtonText: {
    color: utils.colors.primaryColor,
    fontSize: utils.fonts.mediumFontSize,
    fontWeight: 'bold',
  },
  errorMessageContainerStyle: {
    marginBottom: 8,
    backgroundColor: '#fee8e6',
    padding: 8,
    borderRadius: 4,
  },
  errorMessageTextStyle: {
    color: '#db2828',
    textAlign: 'center',
    fontSize: 12,
  },
};

export default Tmp_welcome;
*/


/*
//! DATEPICKER AL ESTILO IPHONE EL MISMO DE SIEMPRE con jemeplo de fecha local
import React, { Component } from 'react';
import DatePicker from 'react-native-date-picker';

import {
           View, Text
} from 'react-native';

export default class TmpEventosScreen extends Component{


  constructor(props){ //todo: Constructor
    super(props)
    this.state = {
       TextInputFechaNac: '',
       date: [],
     }
    }

     componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

    render(){
       return (
       <View>
       <Text style={{marginStart: 30, fontSize:30, 
        fontFamily:'verdana', color: 'grey'}}>
     Fecha de Nacimiento:
  </Text>
  <DatePicker //! Componente Fecha 2 al estilo iphone
    //  date={this.state.date}
      mode= 'date'
      //locale
      locale='esa'
      onChangeText = {date => this.setState({ TextInputFechaNac: date })} 
      // onDateChange={date => this.setState({ date })}
  />
  <Text>fecha: {this.state.date} </Text>
  
       </View>
       );
   } 
}
*/

//! Funcional compnente DatePicker tipo iPhone dentro de un Modal  y que obtiene la fecha de manera magistral
/*
import React, { Component } from 'react';
import DatePicker from 'react-native-date-picker';

import {
  Text, View, StyleSheet, Alert,
  TouchableOpacity, // Modal
} from 'react-native';

import Modal from "react-native-modal";


export default class Fecha extends Component {
 
    constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      // date: [],
      // birtday: '',
      showMe: false,
     // fecha: false, //* era para una condición del componente fecha
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

 render(){
  
  const { selectedStartDate } = this.state;
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  
  //const birtday = startDate[startDate.length+15];

  // var birtday = startDate.replace("GMT", "YES");

  var birtday = startDate.substring(0,15); // nombredía, mes, numDía y año
  var birtday2 = birtday.substring(15,4); // mes, numDía y año
  var mes = birtday2.substring(0,3); // mes  //? me quedo con los primeros tres caracteres de la cadena que tiene un total de 11 caracteres, pero que se puede selecionar todo colocando cero al inicio
  var birtday4 = birtday2.substring(0,6); // mes y numDía
  var NumDía = birtday4.substring(4,6); //numDía
  var anio = birtday2.substring(11,7); // año
  var megaFecha = (NumDía + '/' + mes + '/' + anio) //concatenando fecha

  // var  ultraFecha = megaFecha.replace("Feb", "02");


  //Función para reemplazar los nombres de meses por números
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function replaceAll(str, map){
    for(key in map){
        str = str.replaceAll(key, map[key]);
    }
    return str;
}
var map = {
    'Jan' : '01',
    'Feb' : '02',
    'Mar' : '03',
    'Apr' : '04',
    'May' : '05',
    'Jun' : '06',
    'Jul' : '07',
    'Aug' : '08',
    'Sep' : '09',
    'Oct' : '10',
    'Nov' : '11',
    'Dec' : '12'
};

var ultraFecha = replaceAll(megaFecha, map);
 
console.log(ultraFecha);

//if (this.state.fecha == false && ultraFecha == ' //'){
  if (ultraFecha == '//'){

  return (    
    <View style={styles.container}>
      
    <View style={styles.StyleButtonOpenModal}>
    <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityAbrirModal} 
      onPress={() => {
              this.setState({
                showMe: true,
                   })
              }}>
         <Text style={{marginStart: 5}}>Fecha de Nacimiento...</Text>
     </TouchableOpacity>

     </View>   

   <Modal animationIn = 'slideInDown' // animationInTiming='400'
      visible= {this.state.showMe}
           onRequestClose={()=> console.warn("this is a close request")}>
         <View style={styles.ModalView}>
               
         <DatePicker
           mode = "date"
            locale = 'es'
            onDateChange={this.onDateChange}
            />
        
          <Text>Logrado:{ultraFecha}</Text> 
        

         <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityCerrarModal} 
               onPress={() => {
                    this.setState({
                       showMe: false,
                        // fecha: true,                  
                    })
                 }}>
                  <Text style={styles.closeText}>
                     Ok
                 </Text>
               </TouchableOpacity>
        </View>
     </Modal>
     
 </View>
  );  

} else
{

  return (    
    <View style={styles.container}>
      
    <View style={styles.StyleButtonOpenModal}>
    <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityAbrirModal} 
      onPress={() => {
              this.setState({
                showMe: true
                   })
              }}>
         <Text style={{marginStart: 5}}>{ultraFecha}</Text>
     </TouchableOpacity>

     </View>   

      <Modal visible= {this.state.showMe}
           onRequestClose={()=> console.warn("this is a close request")}>
         <View style={styles.ModalView}>
               
         <DatePicker
           mode = "date"
            locale = 'es'
            onDateChange={this.onDateChange}
            />
        
        <Text>Logrado:{ultraFecha}</Text> 
        

         <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityCerrarModal} 
               onPress={() => {
                    this.setState({
                       showMe: false
                    })
                 }}>
                  <Text style={styles.closeText}>
                     Ok
                 </Text>
               </TouchableOpacity>
        </View>
     </Modal>
 </View>
  );  

}


}

}

const  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue' 
  },

  StyleButtonOpenModal: {
    flex: 1,
    alignContent: "center",
    alignContent:"center",
    paddingTop: 200       
  },

  ModalView:{
    backgroundColor: '#aaaa',
   // height: 200,
    flex: 1, //* este flex puesto por mí hace que la ventama modal se muestre completa
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200, 
  },

  openText: {
    backgroundColor: '#333',
    color: '#bbb',
    padding: 5,
    margin: 20
  },

  closeText:{
   color: 'blue',
   fontSize: 17,
   fontWeight: 'bold'
  },
  TouchableOpacityAbrirModal:{
    alignSelf: "center",
     paddingTop: '3%',
     paddingBottom: 10,
    // borderRadius: 5,
     marginBottom: 7,
     marginTop: 15,
     width: '90%',
     borderColor: 'red',
     borderWidth: 1,
    // position: 'absolute',
    // backgroundColor: '#fff',
  },
  TouchableOpacityCerrarModal:{
   // alignSelf: "center",
     paddingTop: '015%',
     paddingBottom: 20,
    // marginBottom: 7,
    marginLeft: '65%',
     marginTop: 20,
     width: '39 %',
    // position: 'absolute',
    // backgroundColor: 'skyblue',
  },

})
*/

//! ESTO ES PARA DATE PICKER MODAL PERO SOLO MUESTRA EL CALENDARIO Y NO DEJA SELECCIONAR NADA
/* import React from 'react'
import { StyleSheet, Text } from 'react-native'
 
import ModalDatePicker from 'react-native-datepicker-modal'; //TODO: AÑADIR ESTA LIBRERÍA A BITÁCORA

 
const DatePicker = ({ style, ...props }) => (
  <ModalDatePicker
    style={[styles.container, style]}
    renderDate={({ year, month, day, date }) => {
      if (!date) {
        return <Text style={[styles.text, styles.placeholderText]}>Fecha de nacimiento</Text>
      }
 
      const dateStr = `${day}-${month}-${year}`
      return <Text style={styles.text}>{dateStr}</Text>
    }}
    {...props}
  />
)
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 1,
    marginHorizontal: 0.1,
    justifyContent: 'center',
    borderRadius: 2,
    height: 50
  },
  placeholderText: {
    color: 'gray'
  },
  text: {
    width: '100%',
    paddingHorizontal: 1,
    paddingVertical: 0.1,
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: 'black'
  }
})
 
export default DatePicker
*/

/*
import React, { Component } from 'react';
import { //! primitiva
    View,
    Text,
    StyleSheet,
    Picker
} from 'react-native';

export default class Tmp_welcome extends Component{
    render(){
        return(
            <View style = {{flex:1, alignItems: "center", textAlign:"center"}}>
                <Text style={{textAlign:"center",fontSize:25, 
                         fontWeight: 'bold', marginTop:20}}>
                  Hola Mundo
                </Text>

      <Picker //onValueChange={this.handleValueChange} selectedValue={this.state.pickerValue}>
      >
             <Picker.Item value="1" label="1" />
             <Picker.Item value="2" label="2" />
             <Picker.Item value="3" label="3" />
      </Picker>

            </View>
        );
    }
}
*/

//! Esto sólo es para un ejemplo (funcional) de selección de género
/*
  import React, { Component } from 'react';
import {
  AppRegistry,
  View, Text
} from 'react-native';
import Dropdown from 'react-native-modal-select-option';

const propsDropdown = {
  defaultValue: {value: 5, label: 'Seleccionar'},
  options: [
    {value: 1, label: 'Masculino'},
    {value: 2, label: 'Femenino'},
    {value: 3, label: 'Otro'},
    {value: 4, label: 'Perfiero No Contestar'},
  ],
  label: 'Género',
  animationType: 'none',
};

type State = {
  selectedOption: Object,
  isShowingOptions: boolean;
};

type Option = {
  value: string | number | Object | Function;
  label: string;
}

type Props = {
  onSelect: (option: Option, isShow: boolean) => void;
  label?: string;
  onShow: (isShow: boolean) => void;
  isShowingOptions: boolean;
  selectedOption: Option;
  options: Array<Option>;
  animationType: 'none' | 'fade' | 'slide';
};
*/  


//! Ejemplo sencillo de selección de género (Funconal y Magistral)

// import React, { Component } from 'react';

// import {View, Text, TextInput, Switch, StyleSheet} from 'react-native';

// import ModalSelector from 'react-native-modal-selector';

// export default class SampleApp extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             textInputValue: ''
//         }
//     }

//     render() {

//       let hola = this.state.textInputValue;

//         let index = 0;
//         const data = [
//             { key: index++, section: true, label: 'Género' },
//             { key: index++, label: 'Masculino' },
//             { key: index++, label: 'Femenino' },
//             { key: index++, label: 'Prefiero no contestar' },
//             // etc...
//             // Can also add additional custom keys which are passed to the onChange callback
//             // { key: index++, label: 'Otro', customKey: 'Not a fruit' }
//         ];

//         return (
//             <View style = {styles.Contenedor}
//             //style={{flex:1, justifyContent:'space-around', padding:50}}>
//             >

//                 {/* <ModalSelector // comentar
//                     data={data}
//                     initValue="Select something yummy!"
//                     onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />
//   */}

//                 <ModalSelector
//                     data={data}
//                     initValue="Género..."
//                     supportedOrientations={['landscape']}
//                     accessible={true}
//                     scrollViewAccessibilityLabel={'Scrollable options'}
//                     cancelButtonAccessibilityLabel={'Cancel Button'}
//                     onChange={(option)=>{ this.setState({textInputValue:option.label})}}>

//                     <TextInput
//                     style = {styles.TextInputStyle}
//                         // style={{borderWidth:1, borderColor:'skyblue', padding:1, height:40, width: 250}}
//                         editable={false}
//                         placeholder="Género..."
//                         value={this.state.textInputValue} />

//                 </ModalSelector>

//                 {/* <ModalSelector // comentar
//                     data={data}
//                     ref={selector => { this.selector = selector; }}
//                     customSelector={<Switch onValueChange={() => this.selector.open()} />}
//                 /> */}

//                 <Text>{hola}</Text>

//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({

//   TextInputStyle:{
//     alignSelf: "center",
//     // textAlign: 'center',
//      marginBottom: '5%',
//      width: '90%',
//      height: 40,
//      borderWidth: 1.5,
//      borderRadius: 5,
//      //borderColor: '#FF5722'
//      borderColor: '#00Bcd4',
//      marginTop: 100
//  },

//  Contenedor: {
//   flex: 1,
//   //alignItems: 'center',
//   marginTop: 5,
//   backgroundColor: '#fff'
// },

// })

/*
//! ejemplo funcional de country picker modal pero parece traer los datos de internet
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
  StatusBar,
  PixelRatio
} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';

export default class Example extends Component {
  constructor(props){
    StatusBar.setHidden(true);
    super(props);
    this.state = {
      cca2: 'US'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Country Picker !
        </Text>
        <CountryPicker
          onChange={(value)=> this.setState({country: value, cca2: value.cca2})}
          cca2={this.state.cca2}
          translation='eng'
        />
        <Text style={styles.instructions}>
          press on the flag
        </Text>
        {this.state.country &&
          <Text style={styles.data}>
            {JSON.stringify(this.state.country, null, 2)}
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777'
  }
});
*/


/*
//!Ejemplo básico pero magistral (foun) de lista Países, pero no logro obtener el nombre del país en un Text Component
import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native';
import RNCountry from 'react-native-countries';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'TR',
      MycountryName: '',
    };
  }

  componentWillMount() {
    let countryNamesWithCodes = RNCountry.getCountryNamesWithCodes;
    countryNamesWithCodes.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      countryNameListWithCode: countryNamesWithCodes,
    });
  }

  render() {
    const hey = '';

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.countryCode}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({countryCode: itemValue})
          }>
          {this.state.countryNameListWithCode.map(val => {
            return (
              <Picker.Item
                key={'country-item-' + val.code}
                label={val.name}
                value={val.code}
              />
            );
          })}
        </Picker>
        <Text>Selected Country Code: {this.state.countryCode}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 200,
  },
});
*/



/* //!  quitar y desinstalar paquetería
import React from 'react';

import CountryCodeList from 'react-native-country-code-list';

import {View} from 'react-native';

export default class CountryCodeListApp extends React.Component {
    render() {
      return (

 <CountryCodeList
	  onClickCell={(cellObject) => console.log(cellObject)}
	  />
       
      );
    }
  }

*/

/*
import React, { useState } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from './src/types'
 
const styles = StyleSheet.create({
  // ...
})
 
export default function App() {
  const [countryCode, setCountryCode] = useState<CountryCode>('FR')
  const [country, setCountry] = useState<Country>(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
    false
  )
  const [withFlag, setWithFlag] = useState<boolean>(true)
  const [withEmoji, setWithEmoji] = useState<boolean>(true)
  const [withFilter, setWithFilter] = useState<boolean>(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false)
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false)
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Country Picker !</Text>
      <Option
        title="With country name on button"
        value={withCountryNameButton}
        onValueChange={setWithCountryNameButton}
      />
      <Option title="With flag" value={withFlag} onValueChange={setWithFlag} />
      <Option
        title="With emoji"
        value={withEmoji}
        onValueChange={setWithEmoji}
      />
      <Option
        title="With filter"
        value={withFilter}
        onValueChange={setWithFilter}
      />
      <Option
        title="With calling code"
        value={withCallingCode}
        onValueChange={setWithCallingCode}
      />
      <Option
        title="With alpha filter code"
        value={withAlphaFilter}
        onValueChange={setWithAlphaFilter}
      />
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect 
        }}
        visible
      />
      <Text style={styles.instructions}>Press on the flag to open modal</Text>
      {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
      )}
    </View>
  )
}*/
//-----------------------------------------------------------------------------
/*
Afganistán
Albania
Alemania
Andorra
Angola
Antigua y Barbuda
Antillas Holandesas
Arabia Saudí
Argelia
Argentina
Armenia
Aruba
Australia
Austria
Azerbaiyán
B
Bahamas
Bahrein
Bangladés
Barbados
Bélgica
Belice
Benín
Bermudas
Bielorrusia
Bolivia
Botsuana
Bosnia
Brasil
Brunei
Bulgaria
Burkina Faso
Burundi
Bután
C
Cabo Verde
Camboya
Camerún
Canadá
Catar
Chad
Chile
China
Chipre
Colombia
Comoras
Congo
Corea del Norte
Corea del Sur
Costa de Marfil
Costa Rica
Croacia
Cuba
D
Dinamarca
Dominica
E
Ecuador
Egipto
El Salvador
Emiratos Árabes Unidos
Eritrea
Eslovaquia
Eslovenia
España
Estados Unidos de América
Estonia
Etiopía
F
Fiyi
Filipinas
Finlandia
Francia
G
Gabón
Gambia
Georgia
Ghana
Grecia
Guam
Guatemala
Guayana Francesa
Guinea-Bissau
Guinea Ecuatorial
Guinea
Guyana
Granada
H
Haití
Honduras
Hong Kong
Hungría
Holanda
I
India
Indonesia
Irak
Irán
Irlanda
Islandia
Islas Caimán
Islas Marshall
Islas Pitcairn
Islas Salomón
Israel
Italia
J
Jamaica
Japón
Jordania
K
Kazajstán
Kenia
Kirguistán
Kiribati
Kósovo (reconocido parcialmente)
Kuwait
L
Laos
Lesotho
Letonia
Líbano
Liberia
Libia
Liechtenstein
Lituania
Luxemburgo
M
Macedonia
Madagascar
Malasia
Malawi
Maldivas
Malí
Malta
Marianas del Norte
Marruecos
Mauricio
Mauritania
México
Micronesia
Mónaco
Moldavia
Mongolia
Montenegro
Mozambique
Myanmar (antes Birmania)
N
Namibia
Nauru
Nepal
Nicaragua
Níger
Nigeria
Noruega
Nueva Zelanda
Ñ
O
Omán
Orden de Malta
P
Países Bajos
Pakistán
Palestina
Palau
Panamá
Papúa Nueva Guinea
Paraguay
Perú
Polonia
Portugal
Puerto Rico
R
Reino Unido
República Centroafricana
República Checa
República del Congo
República Democrática del Congo (antiguo Zaire)
República Dominicana
Ruanda
Rumanía
Rusia
S
Sáhara Occidental
Samoa Americana
Samoa
San Cristóbal y Nieves
San Marino
Santa Lucía
Santo Tomé y Príncipe
San Vicente y las Granadinas
Senegal
Serbia
Seychelles
Sierra Leona
Singapur
Siria
Somalia
Sri Lanka (antes Ceilán)
Sudáfrica
Sudán
Sudán del Sur
Suecia
Suiza
Suazilandia
T
Tailandia
Taiwán o Formosa (República Nacionalista China)
Tanzania
Tayikistán
Tíbet (actualmente bajo soberanía China)
Timor Oriental (antiguamente ocupado por Indonesia)
Togo
Tonga
Trinidad y Tobago
Túnez
Turkmenistán
Turquía
Tuvalu
U
Ucrania
Uganda
Uruguay
Uzbequistán
V
Vanuatu
Vaticano
Venezuela
Vietnam
W
Wallis y Futuna
X
Y
Yemen
Yibuti
Z
Zambia
Zaire
Zimbabue

*/

/*
const dataCtry = [ //! Lista género
          { key: indexCtry++, section: true, label: 'Nacionalidad' },
          { key: indexCtry++, label: 'Afganistán' },
          { key: indexCtry++, label: 'Albania' },
          { key: indexCtry++, label: 'Alemania' },
          { key: indexCtry++, label: 'Andorra' },
          { key: indexCtry++, label: 'Angola' },
          { key: indexCtry++, label: 'Antigua y Barbuda' },
          { key: indexCtry++, label: 'Antillas Holandesas' },
          { key: indexCtry++, label: 'Arabia Saudí' },
          { key: indexCtry++, label: 'Argelia' },
          { key: indexCtry++, label: 'Argentina' },
          { key: indexCtry++, label: 'Armenia' },
          { key: indexCtry++, label: 'Aruba' },
          { key: indexCtry++, label: 'Australia' },
          { key: indexCtry++, label: 'Austria' },
          { key: indexCtry++, label: 'Azerbaiyán' },
          { key: indexCtry++, label: 'Bahamas' },
          { key: indexCtry++, label: 'Bahrein' },
          { key: indexCtry++, label: 'Bangladés' },
          { key: indexCtry++, label: 'Barbados' },
          { key: indexCtry++, label: 'Bélgica' },
          { key: indexCtry++, label: 'Belice' },
          { key: indexCtry++, label: 'Benín' },
          { key: indexCtry++, label: 'Bermudas' },
          { key: indexCtry++, label: 'Bielorrusia' },
          { key: indexCtry++, label: 'Bolivia' },
          { key: indexCtry++, label: 'Botsuana' },
          { key: indexCtry++, label: 'Bosnia' },
          { key: indexCtry++, label: 'Brasil' },
          { key: indexCtry++, label: 'Brunei' },
          { key: indexCtry++, label: 'Bulgaria' },
          { key: indexCtry++, label: 'Burkina Faso' },
          { key: indexCtry++, label: 'Burundi' },
          { key: indexCtry++, label: 'Bután' },
          { key: indexCtry++, label: 'Cabo Verde' },
          { key: indexCtry++, label: 'Camboya' },
          { key: indexCtry++, label: 'Camerún' },
          { key: indexCtry++, label: 'Canadá' },
          { key: indexCtry++, label: 'Catar' },
          { key: indexCtry++, label: 'Chad' },
          { key: indexCtry++, label: 'Chile' },
          { key: indexCtry++, label: 'China' },
          { key: indexCtry++, label: 'Chipre' },
          { key: indexCtry++, label: 'Colombia' },
          { key: indexCtry++, label: 'Comoras' },
          { key: indexCtry++, label: 'Congo' },
          { key: indexCtry++, label: 'Corea del Norte' },
          { key: indexCtry++, label: 'Corea del Sur' },
          { key: indexCtry++, label: 'Costa de Marfil' },
          { key: indexCtry++, label: 'Costa Rica' },
          { key: indexCtry++, label: 'Croacia' },
          { key: indexCtry++, label: 'Cuba' },
          { key: indexCtry++, label: 'Dinamarca' },
          { key: indexCtry++, label: 'Dominica' },
          { key: indexCtry++, label: 'Ecuador' },
          { key: indexCtry++, label: 'Egipto' },
          { key: indexCtry++, label: 'El Salvador' },
          { key: indexCtry++, label: 'Emiratos Árabes Unidos' },
          { key: indexCtry++, label: 'Eritrea' },
          { key: indexCtry++, label: 'Eslovaquia' },
          { key: indexCtry++, label: 'Eslovenia' },
          { key: indexCtry++, label: 'España' },
          { key: indexCtry++, label: 'Estados Unidos de América' },
          { key: indexCtry++, label: 'Estonia' },
          { key: indexCtry++, label: 'Etiopía' },

*/
