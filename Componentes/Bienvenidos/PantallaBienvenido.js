import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';

// import axios from 'axios'; //! axios

//* NetInfo
import NetInfo from "@react-native-community/netinfo";

//* Spinner Loading...
import Spinner from 'react-native-loading-spinner-overlay';

import MisPaises from './Paises';

import Modal from 'react-native-modal'; // ventana modal complemento de fecha nac

import ModalSelector from 'react-native-modal-selector'; // para país y género

import SplashScreen from 'react-native-splash-screen';

//  import { TouchableOpacity } from 'react-native-gesture-handler'; // no se está usando

// import AwesomeButton from 'react-native-really-awesome-button'; // no se está usando
// import LinearGradient from 'react-native-linear-gradient';  // no se está usando

// import Dropdown from 'react-native-modal-select-option'; // para select género de maner antigua

// import DatePicker from 'react-native-datepicker'; //! normal
import DatePicker from 'react-native-date-picker'; //! al estilo iphone
// import {DatePicker, Picker} from 'react-native-woodpicker'; //! No funciona como debería //!woodpicker // desinstalarla

//import ModalDatePicker from 'react-native-datepicker-modal'; // no se está usando

// import CountryCodeList from 'react-native-country-code-list' // no se está usando



export default class PantallaBienvenido extends Component {
  
  static navigationOptions = {
    title: 'Bienvenido a Sonsonate',
  };

  constructor(props) {
    //todo: Constructor
    super(props);
    this.state = {

      TextInputNombreUsuario: '',// para los TextInput
      TextInputNacionalidad: '',// para los TextInput
      TextInputGenero: '',// para los TextInput
      TextInputFechaNac: '', //'2000-05-16',// para los TextInput

      selectedStartDate: null, //* a) para Componente Fecha
      showMe: false, // para ventana Modal, usada en la fecha

      nameValidate: true, //para validadcion del nombre
      paisValidate: true, //para validadcion del nombre
      generoValidate: true, //para validadcion del genero
      fechaValidate: true, //para validadcion de la fecha
       usuarioExiste: false, //* para validación del nombre
      
       isLoading: true, // para el internet
       connection_Status: '', // para el internet
       loadingDisable: false, // para el internet

       spinner: false, // para el spinner overlay loading

       DefaultSpinner: true, // para el spinner default ActivityIndicator


       ValAsyncStFinal: null, // para validar si ya ingresó los datos de inicio

       data: [], //Para intentar obtener el idLogin de la tabla login, justo después de insertar el uruario  

       date: [], // Es  para obtener la fecha local y enviarla en el formulario, que servirá para como fecha de creación del registro de usurio.

       tmpActivador: false // para controlar lo de la obtención de id login
       
    };

    //* b)  para Componente Fecha
    this.onDateChange = this.onDateChange.bind(this);
    try{
      AsyncStorage.getItem('key').then((value) =>{ // "value" contendrá los datos de la BD llamada 'database_from'
          this.setState({
            ValAsyncStFinal:  JSON.parse(value) // pasamos a list los elementos de la BD y los convertimos a JSON
             // list:  value // forma primitiva
          })
      })
  } catch(err){
      console.log(err)
  }

  setTimeout(() => { //! activity indicator // funciona para mostrarse antes que el Login
    // Alert.alert('Oops!');
    this.setState({ DefaultSpinner: false })
  }, 3000);

  };

 // async storeToken(user) {
    userToken = async (user) => { // para insertar el nombre del usuario en el almacenamiento local.
    try {
       await AsyncStorage.setItem("key", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }



  validate(text, type) {
    //todo: VALIDACIONES
    alph = /^[a-zA-Z0-9]+$/;
    beth = /^(.*)$/;
    if (type == 'TextInputNombreUsuario') {
      if (alph.test(text)) {
        this.setState({
          nameValidate: true,
        });
      } else {
        this.setState({
          nameValidate: false,
        });
      }
    } else if (type == 'TextInputNacionalidad') {
      if (beth.test(text)) {
        this.setState({
          paisValidate: true,
        });
      } else {
        this.setState({
          paisValidate: false,
        });
      }
    } else if (type == 'TextInputGenero') {
      if (beth.test(text)) {
        this.setState({
          generoValidate: true,
        });
      } else {
        this.setState({
          generoValidate: false,
        });
      }
    } 
  };

  resultValidate = () => {
    //todo: VALIDACIONES
    Alert.alert('¡Importante!','No pueden haber campos vacíos');
  };

  resultValidateBi = () => {
    //todo: VALIDACIONES
    Alert.alert('¡Importante!','Debe llenar todos los campos, y el nombre de usuario debe ser un nombre válido');
  };

  resultValidateUsuario = () => {
    //todo: VALIDACIONES
    // if(!this.state.usuarioExiste){
    //   Alert.alert('el nombre de usuario ya existe');
    // }  else {
    //   Alert.alert('Usuario Inválido');
    // }
    Alert.alert('Usuario Inválido');
  };

  onDateChange(date) {
    //todo: función para compoenente Fecha de Nacimiento
    this.setState({
      selectedStartDate: date,
    });
  };

  hola = () => {
    // Alert.alert('hola!')
    this.props.navigation.navigate('Principal')

  }

  GetData = async() => { // todo: este método era para intentar obtener el id del usuario una vez insertado.

    const {TextInputNombreUsuario} = this.state;

    const response = await fetch('http://192.168.43.19:8081/crud_reactnative/laravel_View_IdLogin.php',

    { 
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombreUsuario: TextInputNombreUsuario,
      })
      })

   const getLoginId = await response.json();
    this.setState({
      data: getLoginId,
    })
  console.log(this.state.data)
 }


 obteniendoIdLogin(idLogin){
    Alert.alert('¡Logrado!', 'el Id es:'+idLogin)
 } 



  InsertUsers = async() => {  
  // InsertUsers = fecha => { //*antes
    //todo: función para ACCEDER
    const {TextInputNombreUsuario} = this.state;
    const {TextInputNacionalidad} = this.state;
    const {TextInputGenero} = this.state; //!Ojo... FechaNac se insertaba de otra forma
    const {TextInputFechaNac} = this.state; //? SE HACÍA DE OTRA FORMA
    // const {selectedOption} = this.state;
    // Alert.alert('Hola');

    this.setState({
     spinner: true
    })

    
 //todo ------------------- Inicio block para fecha local -------------------------
 //* o sea que sirve para obtener la fecha local y enviarla a la bd en el campo createUpdate
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

   that.setState({
    //Setting the value of the date time
    date: year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec,
  });
//todo ------------------- Fin block para fecha local -------------------------


    setTimeout(() => { //Todo: considerar mover esta función más abajo, que sirve para quitar el 'loading...' después de 20 segundos
      // Alert.alert('Oops!');
      this.setState({ spinner: false })
    }, 20000); //!antes tenía 5000

    // fetch('http://192.168.43.66:8081/crud_reactnative/other_insert.php', { //#VeryKool
    // fetch('http://192.168.43.19:8081/crud_reactnative/other_insert.php', {   //#SamsJ1Mini
       fetch('https://appturistica07.000webhostapp.com/other_insert.php',{ //# online
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombreUsuario: TextInputNombreUsuario,
        nacionalidad: TextInputNacionalidad,
        genero: TextInputGenero,
        fechaNac: TextInputFechaNac,
        created_at: this.state.date, // fecha local, tomada para fecha de creación del login
        // fechaNac: fecha, //! así se insertaba antes.
      }),
      
    })
    
    .then(response => response.json())
      .then(responseJson => {
          
        Alert.alert(responseJson);


       // this.props.navigation.navigate('Principal');


        // this.setState({ //* descomentar esto en caso de mosrtar comportamientos extraños
        //   spinner: true
        // });

//todo: OJO que antes no entraba a los if por que estaba así ''responseJson.data'' El error era el ''.data'':
 //todo: if(responseJson == 'Usuario ya existe'){...}

        if(responseJson == 'Usuario ya existe'){ //! ese string se encuentra en el archivo php de conexión. MUCHO CUIDADO CON ESA FRASE: 'Usuario ya existe'
          this.setState({
            nameValidate: false,
            usuarioExiste: true,
            spinner: false
          })
        } else if(responseJson == 'Datos guardados'){ //! ese string se encuentra en el archivo php de conexión. MUCHO CUIDADO CON ESA FRASE: 'Datos guardados'
          this.setState({
            nameValidate: true,
            usuarioExiste: false,
           // spinner: false,  //! considerar descomentar esto         
             }),

           this.userToken(TextInputNombreUsuario) //todo: en este preciso instante se guarda el usuario en el AsyncStorage

           
        this.props.navigation.navigate('Principal')
        

        } else if(responseJson == 'Chequea tu conexión a internet'){ //! ese string se encuentra en el archivo php de conexión. MUCHO CUIDADO CON ESA FRASE: 'Datos guardados'
        this.setState({
          spinner: false        
           })

       } else {
          null       
        }
      })
      .catch(error => {
        // console.error(error);
        Alert.alert('Atención','Revisa tu conexión a internet e inténtalo de nuevo.');
        this.setState({ spinner: false})
      }); 
          

   /* axios.post('http://192.168.43.19:8081/crud_reactnative/other_insert.php', { ///! AXIOS y OJOS CON LA URL DE SAMSUNG
      nombreUsuario: TextInputNombreUsuario,
      nacionalidad: TextInputNacionalidad,
      genero: TextInputGenero,
      fechaNac: TextInputFechaNac,
      // fechaNac: fecha,
    })

    .then(response =>{
     // console.log(response.data);
      Alert.alert(response.data);
      if(response.data == 'Usuario ya existe'){
        this.setState({
          nameValidate: false,
          usuarioExiste: true,
        })
      } else {
        this.setState({
          nameValidate: true,
          usuarioExiste: false,
        })
      }
    })
    .catch(error => {
     console.log(error)
      Alert.alert('Información', 'Parece que no tienes acceso a internet');
    }) */



  };
  // Alert.alert('El nombre no es válido')


//todo: para la carga de internet

componentDidMount() { //! método nuevo 
  //* usando NetInfo
NetInfo.addEventListener(this.handleConnectivityChange);
// this.InsertUsers;
// The fetch is not needed as the listen will send the current state when you subscribe to it

SplashScreen.hide();

// this.state.TextInputNombreUsuario!=''?
// this.GetData()
// :
// null

}

componentWillUnmount() { //todo: usando NetInfo
 // this.InsertUsers;
}

handleConnectivityChange = (isConnected) => {
  if (isConnected == true) {
    this.setState({ connection_Status: "Online" });
    this.setState({ loadingDisable: true });
   // this.InsertUsers;

  }
  else {
    this.setState({ connection_Status: "Offline" });
    // this.setState({ loadingDisable: true });
  }
};

handleConnectivityChange = state => { // esto se activa cuando, después de un error de red, se recupera
  if (state.isConnected) {
   // Alert.alert('online');
    this.setState({connection_Status: 'Online'});
    this.setState({ loadingDisable: true });
   // this.InsertUsers;
  } else {
   // Alert.alert('offline');
    this.setState({connection_Status: 'Offline'});
  }
};


  Hola = () => {
    //this.state.tmpActivador=true
    Alert.alert('¡Tranquilo! Aún estamos trabajando en esto')
    
  };

  ViewUsersList = () => {
    this.props.navigation.navigate('ViewDataUsers');
  };

 superValidacion = () => { //* Ojo con el llamado de las funciones!

 if (this.state.TextInputNombreUsuario == '' || this.state.TextInputNacionalidad == ''
             || this.state.TextInputGenero == '' || this.state.TextInputFechaNac == '//' || this.state.TextInputFechaNac == '') {

            
    if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad == ''
    && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac == '//'  || this.state.TextInputFechaNac == '')){
      this.resultValidate();
            this.setState({
              nameValidate: false,
              paisValidate: false,
              generoValidate: false,
              fechaValidate: false,
            })

          }else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad == ''
          && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac== '//' || this.state.TextInputFechaNac == '')){
            if(!this.state.nameValidate){//todo: caso especial para nombre
              this.resultValidateBi();
              this.setState({
                // nameValidate: true,
                paisValidate: false,
                generoValidate: false,
                fechaValidate: false,
              })
            } else {
              this.resultValidate();
              this.setState({
             //   nameValidate: true,
                paisValidate: false,
                generoValidate: false,
                fechaValidate: false,
              })
            }
            

          }else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad != ''
          && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac== '//' || this.state.TextInputFechaNac == '')){
            if(!this.state.nameValidate){//todo: caso especial para nombre
              this.resultValidateBi();
              this.setState({
               // nameValidate: true,
                paisValidate: true,
                generoValidate: false,
                fechaValidate: false,
              })
  
            } else {
              this.resultValidate();
              this.setState({
              //  nameValidate: true,
                paisValidate: true,
                generoValidate: false,
                fechaValidate: false,
              })
  
            }

          }else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad != ''
          && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac== '//' || this.state.TextInputFechaNac == '')){
            
            if(!this.state.nameValidate){//todo: caso especial para nombre
              this.resultValidateBi();
              this.setState({
               // nameValidate: true,
                paisValidate: true,
                generoValidate: true,
                fechaValidate: false,
              })
            }else {
              this.resultValidate();
              this.setState({
              //  nameValidate: true,
                paisValidate: true,
                generoValidate: true,
                fechaValidate: false,
              })
            }
          }
          
      // ! este caso lo omití porque el estado ya cambia automáticamente al llenarse el campo
          // else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad != ''
          // && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac != '//' && this.state.TextInputFechaNac != '')){
          //   this.setState({
          //     nameValidate: true,
          //     paisValidate: true,
          //     generoValidate: true,
          //     fechaValidate: true,
          //   })
          // }

          else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad != ''
          && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac != '//' && this.state.TextInputFechaNac != '')){
            
            if(!this.state.nameValidate){//todo: caso especial para nombre
              this.resultValidateBi();
              this.setState({
               // nameValidate: true, //* que no lo ponga en verdadero porque está mal escrito
                paisValidate: true,
                generoValidate: false,
                fechaValidate: true,
              })
            }else{
              this.resultValidate();
              this.setState({
               // nameValidate: true, //? nameValidate NO necesita ninguna de estas condiciones lo vuelvan true
                paisValidate: true,
                generoValidate: false,
                fechaValidate: true,
              })
            }
           

          }else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad == ''
          && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac != '//' && this.state.TextInputFechaNac != '')){
            if(!this.state.nameValidate){//todo: caso especial para nombre (de usuario)
              this.resultValidateBi();
              this.setState({
               // nameValidate: true,
                paisValidate: false,
                generoValidate: true,
                fechaValidate: true,
              })
            } else {
              this.resultValidate;
              this.setState({
             //   nameValidate: true,
                paisValidate: false,
                generoValidate: true,
                fechaValidate: true,
              })
            }
           

          } else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad == ''
        && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac == '//' || this.state.TextInputFechaNac == '')){
          if(!this.state.nameValidate){//todo: caso especial para nombre
            this.resultValidateBi();
            this.setState({
             // nameValidate: true,
              paisValidate: false,
              generoValidate: true,
              fechaValidate: false,
            })
          }else{
            this.resultValidate();
            this.setState({
            //  nameValidate: true,
              paisValidate: false,
              generoValidate: true,
              fechaValidate: false,
            })
          } 


        } else if(this.state.TextInputNombreUsuario != '' && this.state.TextInputNacionalidad == ''
        && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac != '//'  || this.state.TextInputFechaNac != '')){
          if(!this.state.nameValidate){ //todo: caso especial para nombre
            this.resultValidateBi();
            this.setState({
             // nameValidate: true,
              paisValidate: false,
              generoValidate: false,
              fechaValidate: true,
            })
          } else{
            this.resultValidate();
            this.setState({
              // nameValidate: true,
              paisValidate: false,
              generoValidate: false,
              fechaValidate: true,
            })
          }
         

        }else if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad == ''
        && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac != '//' && this.state.TextInputFechaNac != '')){
          this.resultValidate();
          this.setState({
            nameValidate: false,
            paisValidate: false,
            generoValidate: false,
            fechaValidate: true,
          })

        } else if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad == ''
        && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac == '//' || this.state.TextInputFechaNac == '')){
          this.resultValidate();
          this.setState({
            nameValidate: false,
            paisValidate: false,
            generoValidate: true,
            fechaValidate: false,
          })

        } else if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad == ''
        && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac != '//' && this.state.TextInputFechaNac != '')){
          this.resultValidate();
          this.setState({
            nameValidate: false,
            paisValidate: false,
            generoValidate: true,
            fechaValidate: true,
          })

        } else if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad != ''
        && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac != '//' && this.state.TextInputFechaNac != '')){
          this.resultValidate();
          this.setState({  //!hubo un error aquí: por la fecha
            nameValidate: false,
            paisValidate: true,
            generoValidate: false,
            fechaValidate: true,
          })

        } else if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad != ''
        && this.state.TextInputGenero == '' && (this.state.TextInputFechaNac == '//' || this.state.TextInputFechaNac == '')){
          this.resultValidate();
          this.setState({ //!hubo un error aquí
            nameValidate: false,
            paisValidate: true,
            generoValidate: false,
            fechaValidate: false,
          })

        } else if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad != ''
        && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac == '//' || this.state.TextInputFechaNac == '')){
          this.resultValidate();
          this.setState({
            nameValidate: false,
            paisValidate: true,
            generoValidate: true,
            fechaValidate: false,
          })

        } else if(this.state.TextInputNombreUsuario == '' && this.state.TextInputNacionalidad != ''
        && this.state.TextInputGenero != '' && (this.state.TextInputFechaNac != '//'  || this.state.TextInputFechaNac != '')){
          this.resultValidate();
          this.setState({
            nameValidate: false,
            paisValidate: true,
            generoValidate: true,
            fechaValidate: true,
          })

        }else if (!this.state.nameValidate && this.state.usuarioExiste == false) { //!problemas aquí!!
          this.resultValidateUsuario();
        }            

     } else if (!this.state.nameValidate && this.state.usuarioExiste == false) { //!problemas aquí!!
       this.resultValidateUsuario();
     } else if (!this.state.nameValidate) { //!problemas aquí!!
      this.resultValidateUsuario();
    } else  {
      if (this.state.connection_Status == 'Offline'){    //todo: Aquí está la validación de NetInfo

        Alert.alert('Información', 'Para acceder, necesitas conectarte a Internet.')
    
    } else {
       this.InsertUsers()
       }
    }
    
  };


  render() {
    
    let index = 0; //! para género
    const data = [
      //! Lista género
      {key: index++, section: true, label: 'Género'},
      {key: index++, label: 'Masculino'},
      {key: index++, label: 'Femenino'},
      {key: index++, label: 'Prefiero no contestar'},
      // etc...
      // Can also add additional custom keys which are passed to the onChange callback
      // { key: index++, label: 'Otro', customKey: 'Not a fruit' }
    ];

    //!  ---- Inicio Variables Para Componente Fecha --- ---
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    //const birtday = startDate[startDate.length+15];

    // var birtday = startDate.replace("GMT", "YES");

    var birtday = startDate.substring(0, 15); // nombre  del día, mes, numDía y año
    var birtday2 = birtday.substring(15, 4); // mes, numDía y año
    var mes = birtday2.substring(0, 3); // mes  //? me quedo con los primeros tres caracteres de la cadena que tiene un total de 11 caracteres, pero que se puede selecionar todo colocando cero al inicio
    var birtday4 = birtday2.substring(0, 6); // mes y numDía
    var NumDía = birtday4.substring(4, 6); //numDía
    var anio = birtday2.substring(11, 7); // año
    // var megaFecha = NumDía + '/' + mes + '/' + anio; //concatenando fecha //! anterior cuando la fecha era VARCHAR en la BD LOCAL
    var megaFecha = anio + '/' + mes + '/' + NumDía;
    // var  ultraFecha = megaFecha.replace("Feb", "02");

    //* Método para reemplazar los nombres de meses por números
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };

    function replaceAll(str, map) {
      //todo: Función para fecha, convertir meses
      for (key in map) {
        str = str.replaceAll(key, map[key]);
      }
      return str;
    }
    var map = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };

    var ultraFecha = replaceAll(megaFecha, map);

    //todo: Ojeando: Quitar esto después
    console.log(this.state.TextInputNombreUsuario);
    console.log(this.state.TextInputNacionalidad);
    console.log(this.state.TextInputGenero);
    console.log(ultraFecha);
    console.log(this.state.TextInputFechaNac);


    //! ------ Fin Variables Para Componente Fecha ------ ---



     if (this.state.ValAsyncStFinal !=  null) {
      return(
           <View>{this.props.navigation.navigate('Principal')}</View>
           );
    }
    else { 
    // Todo: SI  ValAsyncStFinal ESTÁ VACÍO, ENTONCES QUE MUESTRE EL FORMULARIO

    return (
      this.state.DefaultSpinner
      ?
  <View style={[styles.containerViewAcInd, styles.horizontalActivIndic]}>
      <ActivityIndicator size="large" color="#0000ff"
      animating = {this.state.DefaultSpinner} />
   </View>

      :

      <ScrollView
        style={{backgroundColor: '#fff'}}
        // source = {require('../../img/logo_gran_via_ferrea.jpg')}
     >
    <View style={styles.Contenedor}>

        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />

          <Text
            style={{
              fontSize: 22, marginTop: 40, textAlign: 'center', color: '#00Bcd4',
            }}>
            ¡Bienvenido a Sonsonate! Para Iniciar, ingresa lo siguiente:
          </Text>

          <TextInput //! Usuario
            //value={this.state.TextInputNombreUsuario} //*not here
            placeholder="Nombre de Usuario"
            onChangeText={
              TextInputValue => [
                this.setState({TextInputNombreUsuario: TextInputValue}),
                this.validate(TextInputValue, 'TextInputNombreUsuario'),
              ]
              // TextInputValue =>
              //   this.validate(TextInputValue, 'TextInputNombreUsuario'))
            }
            underlineColorAndroid="transparent"
            style={[
              styles.TextInputStyle,
              styles.TextInputStyle2,
              !this.state.nameValidate ? styles.error : null,
            ]}
          />

          <ModalSelector //! País (Modal)
            data={MisPaises}
            initValue="País"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}


            onChange={
              option => [
                this.setState({TextInputNacionalidad: option.label}),
                this.validate(option, 'TextInputNacionalidad'),
              ]}
            >

            <TextInput //! País (TextInp)
              style={[styles.TextInputStyleGenero,  
              !this.state.paisValidate ? styles.error : null,]}
                     

              placeholder="País"
              value={this.state.TextInputNacionalidad}
            />
          </ModalSelector>

          <ModalSelector //! género
            data={data}
            initValue="Género"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}

            // onChange={option => {
            //   this.setState({TextInputGenero: option.label});
            // }}
 
            onChange={
              option => [
                this.setState({TextInputGenero: option.label}),
                this.validate(option, 'TextInputGenero'),
              ]
            }
            >
            <TextInput //! Genero
              style={[styles.TextInputStyleGenero,  
              !this.state.generoValidate ? styles.error : null,]}
              // style={{borderWidth:1, borderColor:'skyblue', padding:1, height:40, width: 250}}
              // editable={false}
              placeholder="Género"
              value={this.state.TextInputGenero}
            />
          </ModalSelector>

          <View //! Fecha de Nacimiento (View condicional)
          >
            {ultraFecha == '//' ? (
              <TouchableOpacity //* Touchable de Fecha
                activeOpacity={0.4}

                style={[styles.TouchableOpacityAbrirModal,
                  !this.state.fechaValidate ? styles.error : null,]}

                onPress={() => {
                  this.setState({
                    showMe: true,
                    TextInputFechaNac: ultraFecha
                  });
                }}>
                <Text style={{marginStart: 5, color: '#979A9A'}}>
                  Fecha de Nacimiento
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity //* Touchable de Fecha
                activeOpacity={0.4}
                style={styles.TouchableOpacityAbrirModal}
                onPress={() => {
                  this.setState({
                    showMe: true,
                     TextInputFechaNac: ultraFecha
                  });
                }}>
                <Text style={{marginStart: 5, color: '#000'}}>
                  {ultraFecha}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <Modal
            animationIn="slideInDown" //! VENTANA MODAL (para fecha de nac.)
            visible={this.state.showMe}
            onRequestClose={() => console.warn('this is a close request')}
            >
            <View style={styles.ModalView}>
            <View style={{height:250, width:350, backgroundColor: 'rgba(255, 255, 255, 0.97)',}}>
              <DatePicker
                mode="date"
                locale="es"
                onDateChange={this.onDateChange}
              />
               {/* <Text>Logrado:{ultraFecha}</Text> */}

              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.TouchableOpacityCerrarModal}
                onPress={() => {
                  this.setState({
                    showMe: false,
                    // fecha: true,
                    TextInputFechaNac: ultraFecha
                  });
                }}>
                <Text style={styles.closeText}> Ok </Text>
              </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity //! Botón ACCEDER
            activeOpacity={0.4}
            style={styles.TouchableOpacityStyle}
            // onPress= {() => this.props.navigation.navigate('Principal')}>
            // onPress={this.Hola}>

            onPress={

              // () => this.InsertUsers(ultraFecha)

            () => this.superValidacion() //! importante

             //  () => this.GetData()
           // ()=>this.Hola()

            }>
            <Text style={styles.TextStyle}> ACCEDER </Text>
          </TouchableOpacity>



          <TouchableOpacity //! Botón SALTAR
            activeOpacity={0.4}
            style={styles.TouchableOpacityStyle}
           onPress = {() => this.hola()}
            >
               <Text style={styles.TextStyle}> SALTAR </Text>
          </TouchableOpacity>

            
      {/* <FlatList // intentaba guardar el id de usuario
        //ItemSeparatorComponent={this.ListViewItemSeparator}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}

       renderItem={ ({ item }) => 
       (
       // this.obteniendoIdLogin.bind(this, item.idLogin)
       <View style={{flex: 1}}>
         <Text>Hola qué tal</Text>
       </View>
       )
       } /> */}
      
           

          <Image
            source={require('../../img/logo_gran_via_ferrea.jpg')}
            style={{
              height: 130,
              width: 220,
              overflow: 'visible',
              marginBottom: 100,
              alignSelf: 'center',
            }}
          />


          
        </View>
      </ScrollView>
    );

   } 

  }
}

const styles = StyleSheet.create({
  Contenedor: {
    flex: 1,
    //alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
  },
  TextInputStyle: {
    alignSelf: 'center',
    // textAlign: 'center',
    marginBottom: '5%',
    width: '90%',
    height: '5.5%',
    borderWidth: 1.5,
    borderRadius: 5,
    //borderColor: '#FF5722'
    borderColor: '#00Bcd4',
  },
  TextInputStyle2: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  TextInputStyleGenero: {
    alignSelf: 'center',
    // textAlign: 'center',
    marginBottom: '5%',
    width: '90%',
    height: 45,
    borderWidth: 1.5,
    borderRadius: 5,
    //borderColor: '#FF5722'
    borderColor: '#00Bcd4',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
  },

  TouchableOpacityStyle: {
    alignSelf: 'center',
    paddingTop: '3%',
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    marginTop: 15,
    width: '90%',
    // position: 'absolute',
    backgroundColor: '#00bcd4',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  //! INICIO PARA MODAL Y DATTEPICKER Fecha

  StyleButtonOpenModal: {
    flex: 1,
    alignContent: 'center',
    alignContent: 'center',
    paddingTop: 200,
  },

  ModalView: {
    backgroundColor: 'rgba(151, 154, 154, .4)',
     height: '100%',
     width: '100%',
    flex: 1, //* este flex puesto por mí hace que la ventama modal se muestre completa
    justifyContent: 'center',
    alignItems: 'center',
   // position: 'absolute',
    padding: 0,
    margin: 0
    // paddingTop: 200,
  },
  openText: {
    backgroundColor: '#333',
    color: '#bbb',
    padding: 5,
    margin: 20,
  },

  closeText: {
    color: 'blue',
    fontSize: 17,
    fontWeight: 'bold',
  },
  TouchableOpacityAbrirModal: {
    alignSelf: 'center',
    paddingTop: '3%',
    paddingBottom: 10,
    // borderRadius: 5,
    marginBottom: 7,
    marginTop: 10,
    width: '90%',
    borderColor: '#00Bcd4',
    borderWidth: 1.5,
    borderRadius: 5,
    // position: 'absolute',
    // backgroundColor: '#fff',
  },
  TouchableOpacityCerrarModal: {
    // alignSelf: "center",
    paddingTop: '02%',
    paddingBottom: 10,
    // marginBottom: 7,
    marginLeft: '65%',
    marginTop: 10,
    width: '20%',
    // position: 'absolute',
    // backgroundColor: 'skyblue',
  },
  //! FIN PARA MODAL Y DATTEPICKER fecha
  error: {//* error de red
    borderColor: 'red',
    // borderWidth: 2,
  },

  spinnerTextStyle: {
    color: '#FFF'
  },

  //! Styles for activityIndicator
  containerViewAcInd: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontalActivIndic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
});

