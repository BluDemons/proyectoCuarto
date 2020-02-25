import React, { Component } from 'react';
import L from 'leaflet';
import '../styles/leaflet.css'
import {Map,TileLayer,Marker,Popup} from 'react-leaflet'
import Sidebar from "../components/sidebar";
import Header from "../components/header";

var MyIcon = L.icon({

});
class SimpleMap extends Component {

  state={
    lat: -0.178810,
    lng:-78.468893,
    zoom:13,
  }

  render() {
    const position=[this.state.lat,this.state.lng]
    return (
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
                    <Map  className="map" center={position} zoom={this.state.zoom}>
                      <TileLayer 
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
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
