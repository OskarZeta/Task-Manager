import React, { Component } from 'react';
import addTask from '../redux/actions/addTask';
import { connect } from 'react-redux';
import { hideForm } from '../redux/actions/displayForm';
import WarningText from './WarningText';
import WithForm from './WithForm';

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      text: ''
    };
    this.changeHandler = props.changeHandler.bind(this);
  }
  submitHandler(data) {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    this.props.addTask(formData);
  }
  render() {
    const { validation, hideForm } = this.props;
    const { username, email, text } = this.state;
    return(
      <form>
        <label>
          <span>username</span>
          <input
            type="text" name="username" value={username}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          {typeof validation === 'object' && validation.username &&
            <WarningText text={validation.username}/>
          }
        </label>
        <label>
          <span>email</span>
          <input
            type="text" name="email" value={email}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          {typeof validation === 'object' && validation.email &&
            <WarningText text={validation.email}/>
          }
        </label>
        <label>
          <span>text</span>
          <input
            type="text" name="text" value={text}
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          {typeof validation === 'object' && validation.text &&
            <WarningText text={validation.text}/>
          }
        </label>
        <button type="button" onClick={() => this.submitHandler(this.state)}>send</button>
        <button type="button" onClick={() => hideForm()}>close</button>
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
  hideForm
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(AddTaskForm));
