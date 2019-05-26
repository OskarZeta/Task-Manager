import React, { Component } from 'react';
import addTask from '../redux/actions/addTask';
import { connect } from 'react-redux';
import { resetForm } from '../redux/actions/validateForm';
import { hideForm } from '../redux/actions/displayForm';
import WarningText from './WarningText';

class AddTaskForm extends Component {
  state = {
    username: '',
    email: '',
    text: ''
  }
  changeHandler(field, value) {
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
          <span>username</span>
          <input
            type="text" name="username" value={this.state.username}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          {typeof validation === 'object' && validation.username &&
            <WarningText text={validation.username}/>
          }
        </label>
        <label>
          <span>email</span>
          <input
            type="text" name="email" value={this.state.email}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          {typeof validation === 'object' && validation.email &&
            <WarningText text={validation.email}/>
          }
        </label>
        <label>
          <span>text</span>
          <input
            type="text" name="text" value={this.state.text}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          {typeof validation === 'object' && validation.text &&
            <WarningText text={validation.text}/>
          }
        </label>
        <button type="button" onClick={() => this.submitHandler(this.state)}>send</button>
        <button type="button" onClick={() => this.props.hideForm()}>close</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    validation: state.validation
  }
};

const mapDispatchToProps = {
  addTask,
  resetForm,
  hideForm
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
