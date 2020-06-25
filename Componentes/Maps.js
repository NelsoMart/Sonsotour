
/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
 

export default class Maps extends React.Component {

  static navigationOptions = ({ navigation }) => ({ // full response
    title: 'Mapa'
  });

  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            // latitude: 37.78825, //default
            // longitude: -122.4324, //default
            
            //  longitude: -89.7498769, // my house
            //  latitude: 13.68336552, // my house




            // longitude: -89.7279749, //parque
            // latitude: 13.7210985,

            longitude: parseFloat(this.props.navigation.state.params.longitude),  //parque
            latitude: parseFloat(this.props.navigation.state.params.latitude),


            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            
          }}
          customMapStyle={mapStyle}
        >
          <Marker //Marcador 
            draggable
            coordinate={{

              // longitude: -122.4324, // default
              // latitude: 37.78825,  // default


              //* Parque
            //   longitude: -89.7279749, 
            //  latitude: 13.7210985, 

              //* General
              longitude: parseFloat(this.props.navigation.state.params.longitude), 
             latitude: parseFloat(this.props.navigation.state.params.latitude), 
              
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            // title={'Parque Sonsonate'} //! Falta Modificar esto
            // description={'Parque Rafael Campo'} //! Y falta Modificar esto también
            title={this.props.navigation.state.params.titulo} 
            description={this.props.navigation.state.params.descripcMapa} 
          />  
          
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',  
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});


// ubicaciones de todos los sitios:

/*

         // Alcaldía
         longitude: -89.728056, 
         latitude: 13.7212366, 
         
         // Parque RCampos
         longitude: -89.7279749, 
         latitude: 13.7210985,

*/