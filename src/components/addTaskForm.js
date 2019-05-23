import React, { Component } from 'react';
import addTask from '../redux/actions/addTask';
import { connect } from 'react-redux';
//import Task from './task';

class AddTaskForm extends Component {
  state = {
    username: '',
    email: '',
    text: ''
  }
  changeHandler(field, value) {
    //console.log(field, value);
    this.setState({
      [field]: value
    });
  }
  submitHandler(data) {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    this.props.addTask(formData);
  }
  render() {
    return(
      <form>
        <label>
          <span>username</span>
          <input type="text" name="username" onChange={e => this.changeHandler(e.target.name, e.target.value)}/>
        </label>
        <label>
          <span>email</span>
          <input type="text" name="email" onChange={e => this.changeHandler(e.target.name, e.target.value)}/>
        </label>
        <label>
          <span>text</span>
          <input type="text" name="text" onChange={e => this.changeHandler(e.target.name, e.target.value)}/>
        </label>
        <button type="button" onClick={() => this.submitHandler(this.state)}>send</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(AddTaskForm);
