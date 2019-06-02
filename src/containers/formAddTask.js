import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTask from '../redux/actions/addTask';
import { formHide } from '../redux/actions/formDisplay';
import { setFormErrors, resetFormErrors } from '../redux/actions/handleFormErrors';

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
      formData.append(key, data[key].trim());
    }
    this.props.addTask(formData, this.props.sorting);
  }
  render() {
    const { formErrors, formHide } = this.props;
    const { username, email, text } = this.state;
    return(
      <div className="form__container">
        <div className="container">
          <form className="form col-12 col-sm-11 col-md-10">
            <label className="row">
              <span className="col-12 col-sm-4">Пользователь: </span>
              <div className="col-12 col-sm-8">
                <input
                  type="text" name="username" value={username}
                  onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  className="form-control"
                />
                {formErrors.username && <WarningText text={formErrors.username}/>}
              </div>
            </label>
            <label className="row">
              <span className="col-12 col-sm-4">E-mail: </span>
              <div className="col-12 col-sm-8">
                <input
                  type="text" name="email" value={email}
                  onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  className="form-control"
                />
                {formErrors.email && <WarningText text={formErrors.email}/>}
              </div>
            </label>
            <label className="row">
              <span className="col-12 col-sm-4">Задание: </span>
              <div className="col-12 col-sm-8">
                <textarea
                  name="text" value={text} className="form-control"
                  onChange={e => this.changeHandler(e.target.name, e.target.value)}
                />
                {formErrors.text && <WarningText text={formErrors.text}/>}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formErrors: state.formErrors
  }
};

const mapDispatchToProps = {
  addTask,
  formHide,
  setFormErrors,
  resetFormErrors
};

FormAddTask.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  formErrors: PropTypes.object.isRequired,
  formHide: PropTypes.func.isRequired,
  sorting: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(FormAddTask));
