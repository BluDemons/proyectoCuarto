import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";
import Route from './routes';

class App extends Component {

   componentDidMount = () => {
      navigator.geolocation.watchPosition(
        posicion => {
          const coordenadas = JSON.stringify(posicion);
          this.setState({ coordenadas });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

   render() {
      return (
         <Route />
      )
   }
}
export default App