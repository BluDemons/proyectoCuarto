import React, { Component } from 'react';
// import L from 'leaflet';
import '../styles/leaflet.css'
import { Map, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import L from 'leaflet';

const iconVerde = new L.Icon({

   iconUrl: require('../assets/marker.jpeg'),

   iconSize:     [40, 45], // tamaño del icono

   shadowSize:   [50, 64], // tamaño de la sombra

   iconAnchor:   [20, 40], // punto del icono que corresponde a la posición del marcador

   popupAnchor:  [0, -40] // punto relativo al marcador desde donde se deberá abrir el popup

});

let position;
let zoomMap;
class SimpleMap extends Component {

  state = {
    lat: -0.178810,
    lng: -78.468893,
    zoom: 13,
  }

  render() {
    const { lat, lng, zoom } = this.state;
    position = [lat, lng];
    zoomMap = zoom;    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="justify-between flex my-0 select-none">
            <h1 className="ml-12 text-center mr-10 text-5xl">Mapa Leaflet</h1>
          </div>
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Mapa de Ubicación
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <Map className="map" center={position} ref={e => { this.mapInstance = e }} zoom={this.state.zoom}>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={position} icon={iconVerde}>
                        <Tooltip direction='top' opacity={1} >
                          <span> Tooltip del marcador de ejemplo </span>
                        </Tooltip>
                        <Popup>
                          <span> Popup del marcador de ejemplo </span>
                        </Popup>
                      </Marker>
                    </Map>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
