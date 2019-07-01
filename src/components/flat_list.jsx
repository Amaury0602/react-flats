import React, { Component } from 'react';
import flats from '../flats';
import Flat from './flat';

class FlatList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: null
    };
  }

  render() {
    return (
      <div className="flat-list">
        {flats.map(flat => <Flat selectedFlat={this.selectedFlat} price={flat.price} currency={flat.priceCurrency} name={flat.name} img={flat.imageUrl} key={flat.lng} />)}
      </div>
    );
  }
}

export default FlatList;
