import React, { Component } from 'react';
import {Platform, AppRegistry, View } from 'react-native';
import Route from './routes';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
class App extends Component {
  //  state = {
  //     location: null,
  //     errorMessage: null,
  //   };
  
  //   componentDidMount() {
  //     if (Platform.OS === 'android' && !Constants.isDevice) {
  //       this.setState({
  //         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
  //       });
  //     } else {
  //       this._getLocationAsync();
  //     }
  //   }
  
  //   _getLocationAsync = async () => {
  //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //     if (status !== 'granted') {
  //       this.setState({
  //         errorMessage: 'Permission to access location was denied',
  //       });
  //     }
  
  //     let location = await Location.getCurrentPositionAsync({});
  //     this.setState({ location });
  //     console.log(location.coords.latitude)
  //   };

   render() {
      return (
         <Route />
      )
   }
}
export default App