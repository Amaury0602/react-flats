import React, { Component } from 'react';
import flats from '../flats';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (flats.map((flat) => {
      return (<Flat price={flat.price} currency={flat.priceCurrency} name={flat.name} img={flat.imageUrl} key={flat.lat} />);
    }));
  }
}

export default FlatList;
