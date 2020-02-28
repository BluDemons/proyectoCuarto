import React from 'react';
import MapView, { PROVIDER_GOOLE } from 'react-native-maps';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default class Mapa extends React.Component {
  constructor(props) {
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
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords
      this.setState({
        latLng: { latitude, longitude },
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
                <View style={styles.getStartedContainer}>
                  <ScrollView vertical={true}>
                    <MapView style={styles.mapStyle}
                      provider={PROVIDER_GOOLE}
                      region={this.state.region}
                      showsUserLocation
                      loadingEnabled />
                  </ScrollView>
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
    backgroundColor: '#fff',
  },
  getStartedContainer:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "10%",
    marginLeft:"5%",
    marginRight:"5%",
    marginBottom:"5%",
    height:"100%"
  },
  mapStyle: {
    width: "100%",
    height: Dimensions.get('window').height,    
  },
});
