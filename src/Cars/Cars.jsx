import React from 'react';
import Car from './Car/Car';
import './Cars.scss';

class Cars extends React.Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010},
    ]
  };

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  };

  render() {
    console.log(this.props);
    return (
      <div className="cars">
        <button onClick={this.goToHomePage}>Go to home page</button>
        <hr/>
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}

export default Cars;