import React from 'react';
import './CarDetail.scss';

class CarDetail extends React.Component {
  render() {
    return (
      <div className="car-detail">
        <h1>{this.props.match.params.name}</h1>
      </div>
    )
  }
}

export default CarDetail;