import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTask from '../redux/actions/addTask';
import { formHide } from '../redux/actions/formDisplay';

import WithForm from './WithForm';

import WarningText from '../components/WarningText';

class FormAddTask extends Component {
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
    const { validation, formHide } = this.props;
    const { username, email, text } = this.state;
    return(
      <div className="form__container container">
        <form className="form">
          <label className="row">
            <span className="col-4">Пользователь: </span>
            <div className="col-8">
              <input
                type="text" name="username" value={username}
                onChange={e => this.changeHandler(e.target.name, e.target.value)}
                className="form-control"
              />
              {typeof validation === 'object' && validation.username &&
                <WarningText text={validation.username}/>
              }
            </div>
          </label>
          <label className="row">
            <span className="col-4">E-mail: </span>
            <div className="col-8">
              <input
                type="text" name="email" value={email}
                onChange={e => this.changeHandler(e.target.name, e.target.value)}
                className="form-control"
              />
              {typeof validation === 'object' && validation.email &&
                <WarningText text={validation.email}/>
              }
            </div>
          </label>
          <label className="row">
            <span className="col-4">Задание: </span>
            <div className="col-8">
              <textarea
                name="text" value={text} className="form-control"
                onChange={e => this.changeHandler(e.target.name, e.target.value)}
              />
              {typeof validation === 'object' && validation.text &&
                <WarningText text={validation.text}/>
              }
            </div>
          </label>
          <div className="d-flex justify-content-between">
            <button
              type="button" className="btn btn-outline-success col-4"
              onClick={() => this.submitHandler(this.state)}
            >Добавить
            </button>
            <button
              type="button" className="btn btn-outline-danger col-4"
              onClick={() => formHide()}
            >Закрыть
            </button>
          </div>
        </form>
      </div>
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
  formHide
};

FormAddTask.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  validation: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  formHide: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(FormAddTask));
