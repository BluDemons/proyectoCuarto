import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = "AIzaSyAHRUFnPIZxppGdayahzanQZzKquvRspfE";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -0.178810,
      lng: -78.468893
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="h-64 mr-6 ">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={0.178810}
            lng={78.468893}
            text="Mapa de Dispositivos"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;