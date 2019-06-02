import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import handleLogIn from '../redux/actions/handleLogin';
import { formHide } from '../redux/actions/formDisplay';
import { setFormErrors, resetFormErrors } from '../redux/actions/handleFormErrors';

import WithForm from './WithForm';

import WarningText from '../components/WarningText';

import { login, password } from '../constantValues';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: ''
    };
    this.changeHandler = props.changeHandler.bind(this);
  }
  submitHandler() {
    if (this.state.name === login && this.state.pass === password) {
      this.props.formHide();
      this.props.handleLogIn();
    } else {
      this.props.setFormErrors({
        login: 'Неверная пара логин-пароль'
      });
    }
  }
  render() {
    const { formErrors, formHide } = this.props;
    return(
      <div className="form__container">
        <div className="container">
          <form className="form col-12 col-sm-11 col-md-10">
            <label className="row">
              <span className="col-12 col-sm-4">Логин: </span>
              <div className="col-12 col-sm-8">
                <input
                  type="text" name="name" value={this.state.name}
                  onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  className="form-control"
                />
              </div>
            </label>
            <label className="row">
              <span className="col-12 col-sm-4">Пароль: </span>
              <div className="col-12 col-sm-8">
                <input
                  type="password" name="pass" value={this.state.pass}
                  onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  className="form-control"
                />
              </div>
            </label>
            {formErrors.login &&
              <div className="row mb-2">
                <div className="col-12 col-sm-8 ml-auto">
                  <WarningText text={formErrors.login}/>
                </div>
              </div>
            }
            <div className="d-flex justify-content-between">
              <button
                type="button" className="btn btn-outline-success col-3"
                onClick={() => this.submitHandler()}
              >Войти</button>
              <button
                type="button" className="btn btn-outline-danger col-3"
                onClick={() => formHide()}
              >Закрыть</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    formErrors: state.formErrors
  }
};

const mapDispatchToProps = {
  handleLogIn,
  formHide,
  setFormErrors,
  resetFormErrors
};

FormLogin.propTypes = {
  formErrors: PropTypes.object.isRequired,
  formHide: PropTypes.func.isRequired,
  resetFormErrors: PropTypes.func.isRequired,
  setFormErrors: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  handleLogIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(FormLogin));
