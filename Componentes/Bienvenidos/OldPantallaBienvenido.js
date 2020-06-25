
 import React, { Component} from 'react';
 
 import {        
    View,Text,StyleSheet,   
    TextInput, Alert, ImageBackground,
    ScrollView, Image,
    Button    
 } from 'react-native';   

 import { TouchableOpacity } from 'react-native-gesture-handler';

 import AwesomeButton from "react-native-really-awesome-button";
 import LinearGradient from "react-native-linear-gradient";

 import Dropdown from 'react-native-modal-select-option';

  // import DatePicker from 'react-native-datepicker'; //! normal
 import DatePicker from 'react-native-date-picker'; //! al estilo iphone
// import {DatePicker, Picker} from 'react-native-woodpicker'; //! No funciona como debería //!woodpicker

import ModalDatePicker from 'react-native-datepicker-modal';

// import CountryCodeList from 'react-native-country-code-list'

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

 export default class OldPantallaBienvenido extends Component {

    state: State;
 
     static navigationOptions = {
         title: 'Bienvenido a AppTurist'
     }
 
     constructor(props){ //todo: Constructor
         super(props)
         this.state = {
             TextInputNombreUsuario: '',
             TextInputNacionalidad: '',
             TextInputGenero: '',  
             TextInputFechaNac: '', //'2000-05-16',
            // pickedDate: null, //!woodpicker
             selectedOption: propsDropdown.defaultValue || {value: 0, label: 'Pilih Kota'},
             isShowingOptions: false,
            date: [],
         }
      }
    
 
      InsertUsers = () => {
        const {TextInputNombreUsuario} = this.state;
          const {TextInputNacionalidad} = this.state;
          const {TextInputGenero} = this.state;
          const {TextInputFechaNac} = this.state;
         //  const {selectedOption} = this.state;
         // Alert.alert('Hola');
 
          // fetch('http://192.168.43.66:8081/crud_reactnative/insert.php',{
           fetch('http://192.168.43.66:8081/crud_reactnative/other_insert.php',{  //#VeryKool
            //  fetch('http://192.168.43.19:8081/crud_reactnative/other_insert.php',{   //#SamsJ1Mini
            //  fetch('https://appturistica07.000webhostapp.com/api/jsusuario',{
              method: 'POST',
              headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
              body: JSON.stringify({
                nombreUsuario: TextInputNombreUsuario,
                nacionalidad: TextInputNacionalidad,
               genero: TextInputGenero,
                fechaNac: TextInputFechaNac,
               // genero: selectedOption
              })
          }).then((response) => response.json())
            .then((responseJson) => {
              Alert.alert(responseJson);
             // this.props.navigation.navigate('Principal');
          }).catch((error) => {
              console.error(error);
          })
      }

      Hola = () => {
         Alert.alert('Hola');
      }
 
      ViewUsersList = () => {
          this.props.navigation.navigate('ViewDataUsers');
      }

//!woodpicker inicio -------------
      // state = {
      //   pickedDate: null
      // };

      // data = [
      //   { label: "DataCat", value: 1 },
      //   { label: "DataDog", value: 2 },
      //   { label: "DataSnake", value: 3 },
      //   { label: "DataPlatypus", value: 4 },
      //   { label: "DataWhale", value: 5 }
      // ];


    handlePicker = data => {
      this.setState({ pickedData: data });
    };
    
    handlePlaceholder = () =>
      this.state.pickedDate
        ? this.state.pickedDate.toDateString()
        : "No value Selected";
    //!woodpicker fin -----------
 

     render(){
      let {isShowingOptions, selectedOption} = this.state;
         return(
          <ScrollView style={{backgroundColor: '#fff'}}
       // source = {require('../../img/logo_gran_via_ferrea.jpg')}
        >
         
             <View style={styles.Contenedor}>
                <Text style={{fontSize:22, marginTop: 40, textAlign: 'center', color: '#00Bcd4'}}>
                   ¡Bienvenido a Sonsonate! Para Iniciar, ingresa lo siguiente:
                 </Text>  
                   
                 <TextInput 
                    //value={this.state.TextInputNacionalidad} //*not here
                     placeholder = "Nomnre de Usuario..."
                     onChangeText = {TextInputValue => this.setState({TextInputNombreUsuario: TextInputValue})}
                     underlineColorAndroid = 'transparent'
                     style = {[styles.TextInputStyle, styles.TextInputStyle2]}
                 />

                    <TextInput 
                    //value={this.state.TextInputNacionalidad} //*not here
                     placeholder = "Nacionalidad..."
                     onChangeText = {TextInputValue => this.setState({TextInputNacionalidad: TextInputValue})}
                     underlineColorAndroid = 'transparent'
                     style = {[styles.TextInputStyle, styles.TextInputStyle2]}
                 />

             {/* <CountryCodeList //!selector de paises
	                    onClickCell={(cellObject) => console.log(cellObject)}
	                 /> */}

                 <TextInput
                 //onPress={this.simpleHola} 
                     placeholder = "Género..."
                     onChangeText = {TextInputValue => this.setState({TextInputGenero: TextInputValue})}
                     underlineColorAndroid = 'transparent'
                     style = {styles.TextInputStyle}
                 />

             <Dropdown {...propsDropdown} //! selector de género: Modal
                   onSelect={this._onSelect.bind(this)}
                   onShow={this._onShow.bind(this)}
                   isShowingOptions={isShowingOptions}
                   selectedOption={selectedOption }
                   //valorGenero={TextInputGenero}
             />

              {/* <TextInput 
                     placeholder = "Fecha de Nacimiento..."
                     onChangeText = {TextInputValue => this.setState({TextInputFechaNac: TextInputValue})}
                     underlineColorAndroid = 'transparent'
                     style = {styles.TextInputStyle}
                 /> */}
             
                 
                  {/* <DatePicker //! Componente Fecha normal
                    style={{width: 280,  borderColor: '#00Bcd4', alignSelf: 'center'}}
                    date={this.state.TextInputFechaNac}
                    mode="date" // default era "date"
                    placeholder="Fecha de nacimiento" format="YYYY-MM-DD"
                    minDate="1920-01-01" maxDate="2020-12-12"
                    confirmBtnText="Confirm" cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                     },
                 dateInput: {
                  marginLeft: 36,
                  
                }
             // ... You can check the source to find the other keys.
          }}
        onDateChange={(date) => {this.setState({TextInputFechaNac: date})}}
      />  */}
      
  <Text style={{marginStart: 30, fontSize:15, 
        fontFamily:'verdana', color: 'grey'}}>
     Fecha de Nacimiento:
  </Text>

      <DatePicker //! Componente Fecha 2 al estilo iphone
      date={this.state.date}
      mode= 'date'
      locale='es'
     // textColor= '#000000'
      style={{width: 280,  borderColor: '#00Bcd4', alignSelf: "center", width:350, fontSize:5}}
     onDateChange={date => this.setState({ date })}
     onChangeText = {date => this.setState({TextInputFechaNac: date})} 
    />
    


    {/* <DatePicker //!woodpicker
          onDateChange={this.handleDatePicker}
          value={this.state.pickedDate}
          title="Fecha"
          placeholder={this.handlePlaceholder()}
          //iosPickerMode="date"
         // androidPickerMode="spinner"
          //locale="fr"
          //isNullable
        />

<Picker //!woodpicker
          onValueChange={this.handlePicker}
          items={this.data}
          title="Data Picker"
          placeholder="Select Data"
          value={this.state.pickedData}
          //androidPickerMode="dropdown"
          //isNullable
        /> */}



        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle}    
        // onPress= {() => this.props.navigation.navigate('Principal')}>
        // onPress={this.Hola}>
        onPress={this.InsertUsers}>
        
            <Text style={styles.TextStyle}>ACCEDER</Text>
        </TouchableOpacity>

     <AwesomeButton
     style={{alignSelf: "center"}}
     ExtraContent={
        <LinearGradient
          colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
        />
      }
       progress 
       onPress={next => { this.props.navigation.navigate('Principal')
        /** Do Something **/
        next();
      }} >
           <Text>SALTAR</Text>
    </AwesomeButton>

     <Image source={require('../../img/logo_gran_via_ferrea.jpg')} 
        style={{height:130, width:220, overflow:"visible", marginBottom:100, alignSelf: "center"}} />  

             </View>

             </ScrollView>
         )
     }

     _onShow(value: boolean): void {
      this.setState({
        isShowingOptions: value,
      });
    }
    _onSelect(item: Object, isShow: boolean): void {
      this.setState({
        isShowingOptions: isShow,
        selectedOption: item,
      });
    }

 }
 
 
 const styles = StyleSheet.create ({
      Contenedor: {
          flex: 1,
          //alignItems: 'center',
          marginTop: 5,
          backgroundColor: '#fff'
      },
      TextInputStyle:{
         alignSelf: "center",
         // textAlign: 'center',
          marginBottom: '4%',
          width: '90%',
          height: '5.5%',
          borderWidth: 1.5,
          borderRadius: 5,
          //borderColor: '#FF5722'
          borderColor: '#00Bcd4'
      },
      TextInputStyle2:{
        alignSelf: "center",
          marginTop: 20,
      },
      TextStyle:{
          color: '#fff',
          textAlign: 'center',
          alignSelf: "center",
      },
 
      TouchableOpacityStyle:{
        alignSelf: "center",
         paddingTop: '3%',
         paddingBottom: 10,
         borderRadius: 5,
         marginBottom: 7,
         marginTop: 15,
         width: '90%',
        // position: 'absolute',
         backgroundColor: '#00bcd4'
      },
      container:{
        flex:1,
         width:'100%',
         height:'100%'
      },
 }); 
 
 




/*


 import React, { Component} from 'react';

 import {
    View,Text,StyleSheet,
    TextInput, Alert, ImageBackground,
    ScrollView, Image,
    Button, //Modal
 } from 'react-native';

    import Modal from "react-native-modal";

 import { TouchableOpacity } from 'react-native-gesture-handler';

 import AwesomeButton from "react-native-really-awesome-button";
 import LinearGradient from "react-native-linear-gradient";

 import Dropdown from 'react-native-modal-select-option'; // para select género

  // import DatePicker from 'react-native-datepicker'; //! normal
 import DatePicker from 'react-native-date-picker'; //! al estilo iphone
// import {DatePicker, Picker} from 'react-native-woodpicker'; //! No funciona como debería //!woodpicker

//import ModalDatePicker from 'react-native-datepicker-modal'; // no se está usando



// import CountryCodeList from 'react-native-country-code-list'

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

// type State = {
//     selectedOption: Object,
//     isShowingOptions: boolean;
// };

 export default class PantallaBienvenido extends Component {

    //state: State;
 
     static navigationOptions = {
         title: 'Bienvenido a AppTurist'
     }
 
       constructor(props) { //todo: Constructor
         super(props);
         this.state = {
             TextInputNombreUsuario: '',
             TextInputNacionalidad: '',
             TextInputGenero: '',  
             TextInputFechaNac: '', //'2000-05-16',
             selectedOption: propsDropdown.defaultValue || {value: 0, label: 'Pilih Kota'},
             isShowingOptions: false,
             selectedStartDate: null, // a) para Componente Fecha
             showMe: false, //para ventana Modal
         };

         // b)  para Componente Fecha
         this.onDateChange = this.onDateChange.bind(this);
      }


      onDateChange(date) { //todo: función para compoenente fecha
        this.setState({
          selectedStartDate: date,
        });
      }
 
      InsertUsers = () => {
        const {TextInputNombreUsuario} = this.state;
          const {TextInputNacionalidad} = this.state;
          const {TextInputGenero} = this.state;
          const {TextInputFechaNac} = this.state;
         //  const {selectedOption} = this.state;
         // Alert.alert('Hola');
 
           fetch('http://192.168.43.66:8081/crud_reactnative/other_insert.php',{  //#VeryKool
            //  fetch('http://192.168.43.19:8081/crud_reactnative/other_insert.php',{   //#SamsJ1Mini
            //  fetch('https://appturistica07.000webhostapp.com/api/jsusuario',{
              method: 'POST',
              headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
              body: JSON.stringify({
                nombreUsuario: TextInputNombreUsuario,
                nacionalidad: TextInputNacionalidad,
               genero: TextInputGenero,
                fechaNac: TextInputFechaNac,
               // genero: selectedOption
              })
          }).then((response) => response.json())
            .then((responseJson) => {
              Alert.alert(responseJson);
             // this.props.navigation.navigate('Principal');
          }).catch((error) => {
              console.error(error);
          })
      }

      Hola = () => {
         Alert.alert('Hola');
      }
 
      ViewUsersList = () => {
          this.props.navigation.navigate('ViewDataUsers');
      }


 

     render() {

      let {isShowingOptions, selectedOption} = this.state; // no recuerdo para qué era esto.

      //!  ---- Inicio Variables Para Componente Fecha --- 

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
      
       //! ------ Fin Variables Para Componente Fecha ------

       if (ultraFecha == '//'){ //Todo: SI FECHA NO HA SIDO SELECCIONADA

       return (
           
        <ScrollView style={{backgroundColor: '#fff'}}
     // source = {require('../../img/logo_gran_via_ferrea.jpg')}
      >
       
           <View style={styles.Contenedor}>
              <Text style={{fontSize:22, marginTop: 40, textAlign: 'center', color: '#00Bcd4'}}>
                 ¡Bienvenido a Sonsonate! Para Iniciar, ingresa lo siguiente:
               </Text>  
                 
               <TextInput 
                  //value={this.state.TextInputNacionalidad} //*not here
                   placeholder = "Nombre de Usuario..."
                   onChangeText = {TextInputValue => this.setState({TextInputNombreUsuario: TextInputValue})}
                   underlineColorAndroid = 'transparent'
                   style = {[styles.TextInputStyle, styles.TextInputStyle2]}
               />

                  <TextInput 
                  //value={this.state.TextInputNacionalidad} //*not here
                   placeholder = "Nacionalidad..."
                   onChangeText = {TextInputValue => this.setState({TextInputNacionalidad: TextInputValue})}
                   underlineColorAndroid = 'transparent'
                   style = {[styles.TextInputStyle, styles.TextInputStyle2]}
               />


               <TextInput
               //onPress={this.simpleHola} 
                   placeholder = "Género..."
                   onChangeText = {TextInputValue => this.setState({TextInputGenero: TextInputValue})}
                   underlineColorAndroid = 'transparent'
                   style = {styles.TextInputStyle}
               />

           <Dropdown {...propsDropdown} //! selector de género: Modal
                 onSelect={this._onSelect.bind(this)}
                 onShow={this._onShow.bind(this)}
                 isShowingOptions={isShowingOptions}
                 selectedOption={selectedOption }
                 //valorGenero={TextInputGenero}
           />
               
    <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityAbrirModal} 
      onPress={() => {
              this.setState({
                showMe: true
                   })
              }}>
         <Text style={{marginStart: 5}}>Fecha de Nacimiento...</Text>
     </TouchableOpacity>

  <Modal animationIn = 'slideInDown' //! VENTANA MODAL
     visible= {this.state.showMe}
          onRequestClose={()=> console.warn("this is a close request")}
           >
         <View style={styles.ModalView}>
               
         <DatePicker
           mode = "date"
            locale = 'es'
            onDateChange={this.onDateChange}
            />
        
        

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



      <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle}    
      // onPress= {() => this.props.navigation.navigate('Principal')}>
      // onPress={this.Hola}>
      onPress={this.InsertUsers}>
      
          <Text style={styles.TextStyle}>ACCEDER</Text>
      </TouchableOpacity>

   <AwesomeButton
   style={{alignSelf: "center"}}
   ExtraContent={
      <LinearGradient
        colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
      />
    }
     progress 

      next();
    }} >
         <Text>SALTAR</Text>
  </AwesomeButton>

   <Image source={require('../../img/logo_gran_via_ferrea.jpg')} 
      style={{height:130, width:220, overflow:"visible", marginBottom:100, alignSelf: "center"}} />  

           </View>

           </ScrollView>
       );      

              
       } else { //Todo: SI FECHA YA FUE SELECCIONADA


        return (
           
          <ScrollView style={{backgroundColor: '#fff'}}
       // source = {require('../../img/logo_gran_via_ferrea.jpg')}
        >
         
             <View style={styles.Contenedor}>
                <Text style={{fontSize:22, marginTop: 40, textAlign: 'center', color: '#00Bcd4'}}>
                   ¡Bienvenido a Sonsonate! Para Iniciar, ingresa lo siguiente:
                 </Text>  
                   
                 <TextInput 
                    //value={this.state.TextInputNacionalidad} //*not here
                     placeholder = "Nomnre de Usuario..."
                     onChangeText = {TextInputValue => this.setState({TextInputNombreUsuario: TextInputValue})}
                     underlineColorAndroid = 'transparent'
                     style = {[styles.TextInputStyle, styles.TextInputStyle2]}
                 />
  
                    <TextInput 
                    //value={this.state.TextInputNacionalidad} //*not here
                     placeholder = "Nacionalidad..."
                     onChangeText = {TextInputValue => this.setState({TextInputNacionalidad: TextInputValue})}
                     underlineColorAndroid = 'transparent'
                     style = {[styles.TextInputStyle, styles.TextInputStyle2]}
                 />
  
  
                 <TextInput
                 //onPress={this.simpleHola} 
                     placeholder = "Género..."
                     onChangeText = {TextInputValue => this.setState({TextInputGenero: TextInputValue})}
                     underlineColorAndroid = 'transparent'
                     style = {styles.TextInputStyle}
                 />
  
             <Dropdown {...propsDropdown} //! selector de género: Modal
                   onSelect={this._onSelect.bind(this)}
                   onShow={this._onShow.bind(this)}
                   isShowingOptions={isShowingOptions}
                   selectedOption={selectedOption }
                   //valorGenero={TextInputGenero}
             />
      
      <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityAbrirModal} 
        onPress={() => {
                this.setState({
                  showMe: true
                     })
                }}>
           <Text style={{marginStart: 5}}>{ultraFecha}</Text>
       </TouchableOpacity>
    
  
    <Modal // animationIn = 'slideInDown' //! VENTANA MODAL
       visible= {this.state.showMe}
          //   onRequestClose={()=> console.warn("this is a close request")}
             >
           <View style={styles.ModalView}>
                 
           <DatePicker
             mode = "date"
              locale = 'es'
              onDateChange={this.onDateChange}
              />
                    
  
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
  
  
  
        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle}    
        // onPress= {() => this.props.navigation.navigate('Principal')}>
        // onPress={this.Hola}>
        onPress={this.InsertUsers}>
        
            <Text style={styles.TextStyle}>ACCEDER</Text>
        </TouchableOpacity>
  
     <AwesomeButton
     style={{alignSelf: "center"}}
     ExtraContent={
        <LinearGradient
          colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
        />
      }
       progress 
       onPress={next => { this.props.navigation.navigate('Principal')
        next();
      }} >
           <Text>SALTAR</Text>
    </AwesomeButton>
  
     <Image source={require('../../img/logo_gran_via_ferrea.jpg')} 
        style={{height:130, width:220, overflow:"visible", marginBottom:100, alignSelf: "center"}} />  
  
             </View>
  
             </ScrollView>
         );      
    
       }



     }



     _onShow(value: boolean): void {
      this.setState({
        isShowingOptions: value,
      });
    }
    _onSelect(item: Object, isShow: boolean): void {
      this.setState({
        isShowingOptions: isShow,
        selectedOption: item,
      });
    }

 }
 
 
 const styles = StyleSheet.create ({
      Contenedor: {
          flex: 1,
          //alignItems: 'center',
          marginTop: 5,
          backgroundColor: '#fff'
      },
      TextInputStyle:{
         alignSelf: "center",
         // textAlign: 'center',
          marginBottom: '4%',
          width: '90%',
          height: '5.5%',
          borderWidth: 1.5,
          borderRadius: 5,
          //borderColor: '#FF5722'
          borderColor: '#00Bcd4'
      },
      TextInputStyle2:{
        alignSelf: "center",
          marginTop: 20,
      },
      TextStyle:{
          color: '#fff',
          textAlign: 'center',
          alignSelf: "center",
      },
 
      TouchableOpacityStyle:{
        alignSelf: "center",
         paddingTop: '3%',
         paddingBottom: 10,
         borderRadius: 5,
         marginBottom: 7,
         marginTop: 15,
         width: '90%',
        // position: 'absolute',
         backgroundColor: '#00bcd4'
      },
      container:{
        flex:1,
         width:'100%',
         height:'100%'
      },

      //! INICIO PARA MODAL Y DATTEPICKER

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
        paddingTop: 20
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
         borderColor: '#00Bcd4',
         borderWidth: 1,
        // position: 'absolute',
        // backgroundColor: '#fff',
      },
      TouchableOpacityCerrarModal:{
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
      //! FIN PARA MODAL Y DATTEPICKER
 }); 
 
 
*/