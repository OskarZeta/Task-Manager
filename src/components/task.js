import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formShow } from '../redux/actions/formDisplay';

const Task = ({ id, username, email, text, status, login, formShow }) =>
  <article className={"task" + (status == 10 ? " task--completed" : "")}>
    <div className="mb-1">
      <span className="mr-2">Пользователь: </span>
      <span>{ username }</span>
    </div>
    <div className="mb-1">
      <span className="mr-2">E-mail: </span>
      <span>{ email }</span>
    </div>
    <div className="mb-1">
      <div>Задание: </div>
      <textarea
        className="task__text" name="text"
        defaultValue={ text } readOnly
      />
    </div>
    <div className="mb-1 d-flex justify-content-between">
      <div>
        <span className="mr-2">Выполнено: </span>
        <span className={status == 10 ? "text-success" : "text-danger"}>
          { status == 10 ? '✔' : '✘' }
        </span>
      </div>
      {login &&
        <button
          className="btn btn-outline-info" onClick={() => formShow({
            type: 'edit', data: { id, username, email, text, status }
          })}
        >Редактировать
        </button>
      }
    </div>
  </article>

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = {
  formShow
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  formShow: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
