import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actions/handleLogin';
import { formValidate, formInvalidate } from '../redux/actions/formValidate';
import { formHide } from '../redux/actions/formDisplay';

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
      this.props.formValidate();
      this.props.logIn();
    } else {
      this.props.formInvalidate({
        login: 'Неверная пара логин-пароль'
      });
    }
  }
  render() {
    const { validation, formHide } = this.props;
    return(
      <div className="form__container container">
        <form className="form">
          <label className="row">
            <span className="col-4">Логин: </span>
            <div className="col-8">
              <input
                type="text" name="name" value={this.state.name}
                onChange={e => this.changeHandler(e.target.name, e.target.value)}
                className="form-control"
              />
            </div>
          </label>
          <label className="row">
            <span className="col-4">Пароль: </span>
            <div className="col-8">
              <input
                type="password" name="pass" value={this.state.pass}
                onChange={e => this.changeHandler(e.target.name, e.target.value)}
                className="form-control"
              />
            </div>
          </label>
          {typeof validation === 'object' && validation.login &&
            <div className="row mb-2">
              <div className="col-8 ml-auto">
                <WarningText text={validation.login}/>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    validation: state.validation
  }
};

const mapDispatchToProps = {
  logIn,
  logOut,
  formValidate,
  formInvalidate,
  formHide
};

FormLogin.propTypes = {
  validation: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  formHide: PropTypes.func.isRequired,
  formInvalidate: PropTypes.func.isRequired,
  formValidate: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(FormLogin));
