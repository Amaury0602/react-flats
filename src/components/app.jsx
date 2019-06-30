import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import FlatList from './flat_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
      );
  }

}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const api_key = "AIzaSyDKqAjAuNBCf_79fSvA5jQMF-ai-yniROA";
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
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}




export default App;
