import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

const required = value => value ? undefined : 'Required field';

const plate = (value) => {
  value && !/^[A-Z0-9-]+/.test(value) ? 'Please use all caps and no special characters' : undefined;
};

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        {field.meta.touched && ((field.meta.error && <span>{field.meta.error}</span>) || (field.meta.warning && <span>{field.meta.warning}</span>))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
          <Field
            label="Brand"
            name="brand"
            type="text"
            placeholer="Aston Martin"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
            validate={required}

          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
            validate={required}

          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
            validate={[required, plate]}
          />
          <button
            className="btn btn-primary"
            type="submit"
          >
            Add Car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
