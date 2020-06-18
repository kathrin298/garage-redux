import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div className="container">
        <div className="garage-info">
          <h1>{this.props.garage}</h1>
          <Link to={"cars/new"}>
            <button>
              Add new car
            </button>
          </Link>
        </div>
        <div className="car-container">
          {this.props.cars.map((car) => {
            return (
              <Link to={`/cars/${car.id}`} key={car.id}>
                <p>{car.brand}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
