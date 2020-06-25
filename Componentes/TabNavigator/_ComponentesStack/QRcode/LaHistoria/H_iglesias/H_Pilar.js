import React, {Component} from 'react';

import { StyleSheet, Text, View, ScrollView, Dimensions,
  TouchableHighlight
} from 'react-native';

import Image from 'react-native-scalable-image';
// import { TouchableHighlight } from 'react-native-gesture-handler';


export default class H_Pilar extends Component { //? Pestaña principal

    static navigationOptions={
        title: 'Iglesia El Pilar'
      }

      render() {
        return (
          <View style = {styles.container}>
          <View style = {styles.container2}>
            <TouchableHighlight 
                //onPress={() => this.props.navigation.navigate('TraductorScreen')}
                >
              <Image width={Dimensions.get('window').width} style={{overflow:"visible"}}
             source={require('../../../../../../img/imgPortada/iglsea_pilar.jpeg')} // style={styles.imagen} 
             />
            </TouchableHighlight>
          </View>
            <View style = {styles.container}>
            <ScrollView >
    
             <Text style={styles.TextStile}>
             HISTORIA DE IGLESIA EL PILAR
             </Text>
    
             <Text style={styles.TextStile}>
             La iglesia el pilar fue fundada por 
             Fray José Patricio Ruiz (mexicano) en el año 
             de 1553 (mismo año en que fue fundada 
             la “villa de la Santísima Trinidad de Sonsonate”). 
             La total construcción fue culminada y bendecida 
             el 1º de abril de 1887, siendo esta la principal 
             iglesia parroquial de la ciudad de Sonsonate. 
             </Text>
    
             <Text style={styles.TextStile}>
             Según algunos escritos la dedicación a la 
             Santísima Trinidad responde a la visita que 
             hiciera el entonces obispo de Guatemala Don Francisco 
             Marroquín (en compañía del entonces alcalde mayor 
             de Acajutla don Francisco del Valle Marroquín) a la 
             nueva villa; el 28 de mayo año 1553 la iglesia 
             celebraba la fiesta de Santísima Trinidad y dado 
             el espíritu religioso de la época y la costumbre 
             de bautizar a los pueblos con el nombre del Santo 
             del día, El obispo Francisco Marroquín ordenó el 
             cambio del nombre a la ciudad por el de “Villa de 
             Santísima Trinidad”; reemplazando los anteriores 
             nombres que recibía de “Provincia de los Izalcos” y 
             luego “Villa del Espíritu Santo”. Fue así que este templo 
             fuese dedicado a la Santísima Trinidad.
             </Text>
    
             <Text style={styles.TextStile}>
             En su cúpula mayor que se encuentra sobre 
             el altar principal se dibujan cuatro logos 
             pertenecientes a las Órdenes Religiosas que tenían 
             presencia en la ciudad: Domínicos, Franciscanos, 
             Nuestra señora de la Merced y Hospitalarios de San 
             Juan de Dios. ESTO SE LOGRA VER POR QUE SI NO SE 
             VE NO MENCIONA
             </Text>
    
             <Text style={styles.TextStile}>
             En el mismo Altar principal sobre la Virgen de 
             Candelaria se encuentra la Imagen de la Santísima 
             Trinidad. Fiesta principal hasta 1834, y a quien aún 
             está dedicada la Catedral.
             </Text>
    
             <Text style={styles.TextStile}>
             Esta iglesia se halla en la ciudad de 
             Sonsonate, al occidente de El Salvador. 
             El inmueble es toda una reliquia; fue erigida 
             a finales del siglo XVIII por los 
             descendientes hispanos de apróximadamente 
             400 familias, quienes organizaron la cofradía 
             de Nuestra señora del Pilar y trabajaron 
             incansablemente por la construcciòn de la 
             misma. 
             </Text>
    
             <Text style={styles.TextStile}>
             El 2001, la catedral sufrió daños por el terremoto 
             del 13 de enero y 13 de febrero de ese año, hasta quedar 
             inutilizada. La parte frontal y el campanario izquierdo 
             fueron los más dañados. 
             </Text>
    
             <Text style={styles.TextStile}>
             En el año 2003 gracias al entusiasmo del entonces 
             párroco de la catedral, el Pbro. Ricardo Romero, 
             y, con la ayuda de la feligresía de Sonsonate, 
             y personas altruistas dentro y fuera del país, 
             se inicia la reconstrucción del templo.
             </Text>
    
             <Text style={styles.TextStile}>
             Desde entonces los trabajos de mantenimiento 
             de la Catedral tienen que realizarse cada cierto 
             tiempo, para preservar su infraestructura.
             </Text>
    
             </ScrollView>
         </View> 
    
      </View>
          );
        }
      }
    
    const styles = StyleSheet.create({
        imagen: { //! No en uso
          flex: 1,
          // resizeMode: 'cover', // otros: 'center', 'stretch','cover'
          // alignSelf: 'center',
          // height: 300,
           width: 340,
          // flexDirection: 'row',
          // flexWrap:'nowrap',
          resizeMode:'contain', alignSelf: 'center', height:250
        },
        container:  {
            flex: 1,
            resizeMode: 'contain',
            alignItems: 'center',
            justifyContent: 'center',
          },
          container2:  {
            flex: 1,
            resizeMode: 'contain',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          },
          
          TextStile: {
            fontSize:20,
            alignItems: 'center',
            margin: 10,
            justifyContent: 'center',
          //  lineHeight: 30
          }
    })