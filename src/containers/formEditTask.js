import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editTask from '../redux/actions/editTask';
import { formValidate, formInvalidate } from '../redux/actions/formValidate';
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
      this.props.formInvalidate({
        text: 'Поле обязательно для заполнения'
      });
    } else {
      this.props.formValidate();
      this.props.editTask(id, data);
    }
  }
  render() {
    const { id, username, email } = this.props.data;
    const { validation, formHide } = this.props;
    return(
      <div className="form__container container">
        <form className="form">
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
            <span className="col-4">Текст задания: </span>
            <div className="col-8">
              <textarea
                name="text" value={ this.state.text } className="form-control"
                onChange={e => this.changeHandler(e.target.name, e.target.value)}
              />
              {typeof validation === 'object' && validation.text &&
                <WarningText text={validation.text}/>
              }
            </div>
          </label>
          <label className="row">
            <span className="col-4">Выполнено: </span>
            <div className="col-8">
              <input
                type="checkbox" name="status" className="form-check-input m-0"
                checked={ Number(this.state.status) }
                onChange={e => this.changeHandler(e.target.name, e.target.checked ? 10 : 0)}
              />
            </div>
          </label>
          <button type="button" onClick={() => this.submitHandler(id, this.state)}>send</button>
          <button type="button" onClick={() => formHide()}>close</button>
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
  editTask,
  formValidate,
  formInvalidate,
  formHide
};

FormEditTask.propTypes = {
  data: PropTypes.object.isRequired,
  validation: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  changeHandler: PropTypes.func.isRequired,
  formInvalidate: PropTypes.func.isRequired,
  formValidate: PropTypes.func.isRequired,
  formHide: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForm(FormEditTask));
