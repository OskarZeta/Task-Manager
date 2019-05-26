import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actions/handleLogin';
import { login, password } from '../constantValues';

class LoginForm extends Component {
  state = {
    name: '',
    pass: ''
  }
  clickHandler() {
    if (this.state.name === login && this.state.pass === password) {
      this.props.logIn();
    }
  }
  changeHandler(field, value) {
    this.setState({
      [field] : value
    });
  }
  render() {
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
            type="text" name="pass" value={this.state.pass}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
        </label>
        <button type="button" onClick={() => this.clickHandler()}>enter</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
};

const mapDispatchToProps = {
  logIn,
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
