import React, { Component } from 'react';
import flats from '../flats';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.img}')` }}>
          <div className="card-category">{this.props.price} {this.props.currency}</div>
          <div className="card-description">
            <h2>{this.props.name}</h2>
          </div>
          <a href="#" className="card-link"></a>
        </div>
      )
      }
}

export default Flat;
