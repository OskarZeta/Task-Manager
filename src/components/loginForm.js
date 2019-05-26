import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actions/handleLogin';
import { login, password } from '../constantValues';
import { resetForm, validateForm, invalidateForm } from '../redux/actions/validateForm';
import { hideForm } from '../redux/actions/displayForm';
import WarningText from './WarningText';

class LoginForm extends Component {
  state = {
    name: '',
    pass: ''
  }
  submitHandler() {
    if (this.state.name === login && this.state.pass === password) {
      this.props.validateForm();
      this.props.logIn();
    } else {
      this.props.invalidateForm({
        login: 'Неверная пара логин-пароль'
      });
    }
  }
  changeHandler(field, value) {
    this.setState({
      [field] : value
    });
  }
  componentDidMount() {
    this.props.resetForm();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.validation !== this.props.validation && this.props.validation === true) {
      this.props.hideForm();
    }
  }
  render() {
    const validation = this.props.validation;
    return(
      <form>
        <label>
          <span>login</span>
          <input
            type="text" name="name" value={this.state.name}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
        </label>
        <label>
          <span>password</span>
          <input
            type="password" name="pass" value={this.state.pass}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
        </label>
        {typeof validation === 'object' && validation.login &&
          <WarningText text={validation.login}/>
        }
        <button type="button" onClick={() => this.submitHandler()}>enter</button>
        <button type="button" onClick={() => this.props.hideForm()}>close</button>
      </form>
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
  resetForm,
  validateForm,
  invalidateForm,
  hideForm
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
