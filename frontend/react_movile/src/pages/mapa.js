import React from 'react';
import MapView,  {PROVIDER_GOOLE}  from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class Mapa extends React.Component {
    constructor(props){
    super(props)
  
  // Estado inicial de los componentes
  this.state = {
    // Tendrá las coordenadas del marcador
    latLng: {
      latitude: 0,
      longitude: 0,
    },

    // Configuración del mapa
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
    }
  }
}
componentDidMount(){
    navigator.geolocation.getCurrentPosition( ({coords}) => {
      const {latitude, longitude} = coords
      this.setState({
        latLng: {latitude, longitude},
        region: {
          ...this.state.region,
          latitude,
          longitude
        }
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
         provider={PROVIDER_GOOLE}
         region={this.state.region}
        showsUserLocation
        loadingEnabled/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
