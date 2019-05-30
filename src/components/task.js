import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formShow } from '../redux/actions/formDisplay';

const Task = ({ id, username, email, text, status, login, formShow }) =>
  <article className="task">
    <div>
      <span className="mr-2">Пользователь: </span>
      <span>{ username }</span>
    </div>
    <div>
      <span className="mr-2">E-mail: </span>
      <span>{ email }</span>
    </div>
    <div>
      <div>Задание: </div>
      <textarea
        className="task__text" name="text"
        defaultValue={ text } readOnly
      />
    </div>
    <div>
      <span className="mr-2">Выполнено: </span>
      <span>{ Number(status) === 10 ? 'да' : 'нет' }</span>
    </div>
    {login && <button onClick={() => formShow({
      type: 'edit', data: { id, username, email, text, status }
    })}>Редактировать</button>}
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
