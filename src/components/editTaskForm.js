import React, { Component } from 'react';
import editTask from '../redux/actions/editTask';
import { connect } from 'react-redux';
import { resetForm, validateForm, invalidateForm } from '../redux/actions/validateForm';
import { hideForm } from '../redux/actions/displayForm';
import WarningText from './WarningText';

class EditTaskForm extends Component {
  state = {
    status: this.props.data.status,
    text: this.props.data.text
  }
  changeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }
  submitHandler(id, data) {
    if (!this.state.text.trim().length) {
      this.props.invalidateForm({
        text: 'Поле обязательно для заполнения'
      });
    } else {
      this.props.validateForm();
      this.props.editTask(id, data);
    }
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
    const { id, username, email } = this.props.data;
    const validation = this.props.validation;
    return(
      <form>
        <label>
          <span>Пользователь: </span>
          <span>{ username }</span>
        </label>
        <label>
          <span>ID: </span>
          <span>{ id }</span>
        </label>
        <label>
          <span>E-mail: </span>
          <span>{ email }</span>
        </label>
        <label>
          <span>Текст задания: </span>
          <textarea
            name="text" value={ this.state.text }
            onChange={e => this.changeHandler(e.target.name, e.target.value)}
          />
          {typeof validation === 'object' && validation.text &&
            <WarningText text={validation.text}/>
          }
        </label>
        <label>
          <span>Выполнено: </span>
          <input
            type="checkbox" name="status"
            checked={ Number(this.state.status) }
            onChange={e => this.changeHandler(e.target.name, e.target.checked ? 10 : 0)}
          />
        </label>
        <button type="button" onClick={() => this.submitHandler(id, this.state)}>send</button>
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
  editTask,
  resetForm,
  validateForm,
  invalidateForm,
  hideForm
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);
