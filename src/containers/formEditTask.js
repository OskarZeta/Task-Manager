import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editTask from '../redux/actions/editTask';
import { setFormErrors, resetFormErrors } from '../redux/actions/handleFormErrors';
import { formHide } from '../redux/actions/formDisplay';

import WithForm from './WithForm';

import WarningText from '../components/WarningText';

class FormEditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.data.status,
      text: this.props.data.text
    };
    this.changeHandler = props.changeHandler.bind(this);
  }
  submitHandler(id, data) {
    if (!this.state.text.trim().length) {
      this.props.setFormErrors({
        text: 'Поле обязательно для заполнения'
      });
    } else {
      this.props.editTask(id, data, this.props.sorting);
    }
  }
  render() {
    const { data: { id, username, email }, formErrors, formHide } = this.props;
    return(
      <div className="form__container">
        <div className="container">
          <form className="form col-12 col-sm-11 col-md-10">
            <div className="row">
              <span className="col-4">Пользователь: </span>
              <span className="col-8">{ username }</span>
            </div>
            <div className="row">
              <span className="col-4">ID: </span>
              <span className="col-8">{ id }</span>
            </div>
            <div className="row">
              <span className="col-4">E-mail: </span>
              <span className="col-8">{ email }</span>
            </div>
            <label className="row">
              <span className="col-12 col-sm-4">Текст задания: </span>
              <div className="col-12 col-sm-8">
                <textarea
                  name="text" value={ this.state.text } className="form-control"
                  onChange={e => this.changeHandler(e.target.name, e.target.value)}
                />
                {formErrors.text && <WarningText text={formErrors.text}/>}
              </div>
            </label>
            <label className="row">
              <span className="col-4">Выполнено: </span>
              <div className="col-8">
                <input
                  type="checkbox" name="status" className="form-check-input m-0"
                  checked={ !!Number(this.state.status) }
                  onChange={e => this.changeHandler(e.target.name, e.target.checked ? 10 : 0)}
                />
              </div>
            </label>
            <div className="d-flex justify-content-between">
              <button
                type="button" className="btn btn-outline-success col-4"
                onClick={() => this.submitHandler(id, this.state)}
              >send</button>
              <button
                type="button" className="btn btn-outline-danger col-4"
                onClick={() => formHide()}
              >close</button>
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
  editTask,
  formHide,
  setFormErrors,
  resetFormErrors
};

FormEditTask.propTypes = {
  data: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  changeHandler: PropTypes.func.isRequired,
  setFormErrors: PropTypes.func.isRequired,
  resetFormErrors: PropTypes.func.isRequired,
  formHide: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(FormEditTask));
