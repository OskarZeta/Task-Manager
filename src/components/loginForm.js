import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actions/handleLogin';
import { login, password } from '../constantValues';
import { validateForm, invalidateForm } from '../redux/actions/validateForm';
import { hideForm } from '../redux/actions/displayForm';
import WarningText from './WarningText';
import WithForm from './WithForm';

class LoginForm extends Component {
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
      this.props.validateForm();
      this.props.logIn();
    } else {
      this.props.invalidateForm({
        login: 'Неверная пара логин-пароль'
      });
    }
  }
  render() {
    const { validation, hideForm } = this.props;
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
        <button type="button" onClick={() => hideForm()}>close</button>
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
  validateForm,
  invalidateForm,
  hideForm
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(LoginForm));
