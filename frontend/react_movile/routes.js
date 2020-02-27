import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import Login from "./src/pages/Login";
import Reserve from './src/pages/reserve';
import Detalle from './src/pages/detalle_reserva';
import RegistroScreen from './src/pages/registro';
import UserScreen from './src/pages/perfil';
import Home from './src/pages/home';
import ScooterScreen from './src/pages/scooters';
import Mapa from './src/pages/mapa';


export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={ Reserve } />
            <Route exact path="/home" component={ Home } /> 
            <Route path="/reserve" component={ Reserve } /> 
            <Route path="/detalle" component={ Detalle } /> 
            <Route path="/registro" component={ RegistroScreen } /> 
            <Route path="/perfil" component={ UserScreen } /> 
            <Route path="/scooters" component={ ScooterScreen } /> 
            <Route path="/mapa" component={ Mapa } /> 
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
