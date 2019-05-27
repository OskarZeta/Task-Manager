import React, { Component } from 'react';
import fetchTasks from '../redux/actions/fetchTasks';
import { connect } from 'react-redux';
import { baseUrl, devName } from '../constantValues';
import Loading from './loading';
import TasksList from './tasksList';
import AddTaskForm from './addTaskForm';
import EditTaskForm from './editTaskForm';
import SortingForm from './sortingForm';
import Pagination from './pagination';
import LoginForm from './loginForm';
import { entriesPerPage } from '../constantValues';
import { showForm, hideForm } from '../redux/actions/displayForm';
import { resetForm } from '../redux/actions/validateForm';

const url = `${baseUrl}?developer=${devName}`;

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks(url + this._encodeParams());
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sorting !== this.props.sorting) {
      this.props.fetchTasks(url + this._encodeParams());
    }
    if (prevProps.validation !== this.props.validation && this.props.validation === true) {
      this.props.fetchTasks(url + this._encodeParams());
      this.props.resetForm();
      this.props.hideForm();
    }
  }
  _encodeParams() {
    let params = { ...this.props.sorting };
    let encodedParams = '';
    for (let key in params) {
      encodedParams += `&${key}=${params[key]}`
    }
    return encodedParams;
  }
  render() {
    const { loading, tasks, total, formDisplay, login, showForm } = this.props;
    return(
      <div className="app">
        <SortingForm />
        {loading && <Loading />}
        {!loading &&
          <div>
            <TasksList tasks={tasks}/>
            {total > entriesPerPage && <Pagination /> }
            {formDisplay.type === 'edit' && <EditTaskForm data={formDisplay.data}/>}
          </div>
        }
        <button onClick={() => showForm({ type: 'add' })}>Add task</button>
        {formDisplay.type === 'add' && <AddTaskForm />}
        {!login && <button onClick={() => showForm({ type: 'login' })}>Log in</button>}
        {login && <span>You are loggen in</span>}
        {formDisplay.type === 'login' && <LoginForm />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    loading: state.loading,
    sorting: state.sorting,
    total: Number(state.total),
    login: state.login,
    formDisplay: state.formDisplay,
    validation: state.validation
  }
};

const mapDispatchToProps = {
  fetchTasks,
  showForm,
  hideForm,
  resetForm
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
