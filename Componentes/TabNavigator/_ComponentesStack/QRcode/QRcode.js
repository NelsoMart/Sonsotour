import React, {Component} from 'react';

import {
            Image
       } from 'react-native';

//import principal del Lector QR
  import QrScreen from './QrScreen/QrScreen';
//todo: alternativa a QRScreen
  import OnlineQrScreen from './QrScreen/OnlineQrScreen';

//*imports de ventanas de la Historia de los Sitios Turísticos
    // Ciudad de Sonsonate
    import H_sonsonate   from './LaHistoria/H_Sonsonate/H_sonsonate';
    // La gran Vía Férrea
    import H_PlaFerroviaria    from './LaHistoria/H_GranViaFerrea/H_PlaFerroviaria';
    import H_MuseoFerrocarril from './LaHistoria/H_GranViaFerrea/H_MuseoFerrocarril';
    // Iglesias
    import H_Catedral        from './LaHistoria/H_iglesias/H_Catedral';
    import H_Angeles         from './LaHistoria/H_iglesias/H_Angeles';
    import H_Pilar           from './LaHistoria/H_iglesias/H_Pilar';
    import H_StoDomingo      from './LaHistoria/H_iglesias/H_StoDomingo';
    // Playa
    import H_BarraSalada     from './LaHistoria/H_Playa/H_BarraSalada';
    // Centro Histórico 
    import H_Parque          from './LaHistoria/H_CentroHistorico/H_Parque';
    //todo: Historia 
    import OnlineQRH_Screen  from './LaHistoria/Online_QR_Historia/OnlineQRH_Screen';
    import Maps from '../../../Maps';


//import de navegaciones
  //import {createStackNavigator} from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
//imports de íconos
  import Icon from 'react-native-vector-icons/Ionicons';
//imports gestos
//!Error intencional para comprobar si tiene solución
  import { TouchableOpacity } from 'react-native-gesture-handler';


  const QRcode = createStackNavigator({ //! New Stuff stack4
    QRcode: {
   //! --- witch inicio ----
     // screen: QrScreen, //* Local
      screen: OnlineQrScreen, //* Online
  //! --- witch fin ----
      navigationOptions:({navigation})=>{
        return{
          //headerTitle: 'Traductor',
          headerTitle: null,
       headerStyle: {height: 130},
          headerLeft: (
        <TouchableOpacity>
            <Icon
               style={{ paddingLeft: 15 }}
               onPress={() => navigation.openDrawer()}
               name="md-menu"
               size={35}  />
         </TouchableOpacity>
          ),
          headerBackground: <Image source={require("../../../../img/logo_Sonsonate.jpg")}
                  style = {{resizeMode:"contain", alignSelf: 'center', height:130, overflow:"visible"}} 
                       />      
        }     
      }
    },
    //? Aquí agregar más ventanas
       //* ventanas a las que dirigirá el escaneo QR
       // Ciudad de Sonsonate
       H_sonsonate: H_sonsonate,
       // La gran Vía Férrea
       H_PlaFerroviaria: H_PlaFerroviaria,
       H_MuseoFerrocarril: H_MuseoFerrocarril,
       //Iglesias
       H_Catedral: H_Catedral,
       H_Angeles: H_Angeles,
       H_Pilar: H_Pilar,
       H_StoDomingo: H_StoDomingo,
       // Playa
       H_BarraSalada: H_BarraSalada,
       // Parque Rafael Campos
       H_Parque: H_Parque,

       //todo: Online Historia (sustituye a las de arriba):
       OnlineQRH_Screen: OnlineQRH_Screen,
       Maps: Maps,
  });

  export default QRcode;

