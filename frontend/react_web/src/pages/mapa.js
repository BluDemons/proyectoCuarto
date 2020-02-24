import React, { Component } from 'react';
import L from 'leaflet';
import '../styles/leaflet.css'

class SimpleMap extends Component {
 componentDidMount=()=>{
   this.map=L.map('map').
    setView([ -0.178810, -78.468893], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
 }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
      </div>
    );
  }
}
 
export default SimpleMap;