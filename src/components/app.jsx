import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <FlatList />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}


const apiKey = "AIzaSyAYg_nommw0M0P4yN7cBYCMe8LE6Hg-eLU";
const paris = {
  lat: 48.86,
  lng: 2.34
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: paris.lat,
      lng: paris.lng
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
