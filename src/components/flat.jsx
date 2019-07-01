import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    if (this.props) {
      this.props.selectedFlat(this.props);
    }
  }

  render(){
    return (
      <div className="card"  onClick={this.handleClick} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.img}')` }}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>
    );
  }
}

export default Flat;
