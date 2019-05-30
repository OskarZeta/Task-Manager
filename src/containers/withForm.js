import React, { Component } from 'react';
import PropTypes from 'prop-types';

const WithForm = FormComponent => {
  class WrappedComponent extends Component {
    changeHandler(field, value) {
      this.setState({
        [field]: value
      });
    }
    clickHandler(e) {
      if (e.target.classList.contains('form__wrapper')) {
        this.props.formHide();
      }
    }
    render() {
      return(
        <div className="form__wrapper" onClick={e => this.clickHandler(e)}>
          <FormComponent changeHandler={this.changeHandler} {...this.props}/>
        </div>
      );
    }
  }
  WrappedComponent.propTypes = {
    formHide: PropTypes.func.isRequired
  }
  return WrappedComponent;
}

export default WithForm;
