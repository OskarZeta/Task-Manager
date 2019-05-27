import React, { Component } from 'react';
import editTask from '../redux/actions/editTask';
import { connect } from 'react-redux';
import { showForm } from '../redux/actions/displayForm';
import EditTaskForm from './editTaskForm';

class Task extends Component {
  render() {
    const { id, username, email, text, status } = this.props;
    return(
      <article style={{ border: '1px solid black' }}>
        <div>
          <span>Пользователь: </span>
          <span>{ username }</span>
        </div>
        <div>
          <span>E-mail: </span>
          <span>{ email }</span>
        </div>
        <div>
          <span>Текст задания: </span>
          <textarea name="text" defaultValue={ text } readOnly />
        </div>
        <div>
          <span>Выполнено: </span>
          <span>{ Number(status) === 10 ? 'да' : 'нет' }</span>
        </div>
        {this.props.login && <button onClick={() => this.props.showForm({
          type: 'edit', data: { id, username, email, text, status }
        })}>Редактировать</button>}
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = {
  showForm
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
