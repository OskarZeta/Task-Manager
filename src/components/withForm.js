import React, { Component } from 'react';

const WithForm = FormComponent =>
  class extends Component {
    changeHandler(field, value) {
      this.setState({
        [field]: value
      });
    }
    clickhandler(e) {
      if (e.target.classList.contains('form__container')) {
        this.props.hideForm();
      }
    }
    render() {
      return(
        <div className="form__container" onClick={e => this.clickhandler(e)}>
          <FormComponent changeHandler={this.changeHandler} {...this.props}/>
        </div>
      );
    }
  }

  export default WithForm;
