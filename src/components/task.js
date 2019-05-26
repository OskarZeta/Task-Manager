import React, { Component } from 'react';
import editTask from '../redux/actions/editTask';
import { connect } from 'react-redux';
import { showForm } from '../redux/actions/displayForm';
import EditTaskForm from './editTaskForm';

class Task extends Component {
  render() {
    return(
      <article style={{ border: '1px solid black' }}>
        <div>
          <span>Пользователь: </span>
          <span>{ this.props.username }</span>
        </div>
        <div>
          <span>ID: </span>
          <span>{ this.props.id }</span>
        </div>
        <div>
          <span>E-mail: </span>
          <span>{ this.props.email }</span>
        </div>
        <textarea
          name="text"
          defaultValue={ this.props.text }
          readOnly
        />
        <div>
          <span>Выполнено: </span>
          <span>{ Number(this.props.status) === 10 ? 'да' : 'нет' }</span>
        </div>
        <button onClick={() => this.props.showForm({
          type: 'edit', data: {
            id: this.props.id,
            username: this.props.username,
            email: this.props.email,
            text: this.props.text,
            status: this.props.status
          }
        })}>edit</button>
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
