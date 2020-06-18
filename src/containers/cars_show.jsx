import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteCar } from '../actions';

class CarsShow extends Component {
  handleClick = () => {
    this.props.deleteCar(this.props.car, this.props.history);
  }

  render() {
    const car = this.props.car;
    return (
      <div className="car-card">
        <h3>{car.brand} - {car.model}</h3>
        <p>Owner: {car.owner}</p>
        <p>{car.plate}</p>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsShow));
