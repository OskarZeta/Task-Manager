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

let url = `${baseUrl}?developer=${devName}`;

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks(url + this._encodeParams());
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sorting !== this.props.sorting || prevProps.page !== this.props.page) {
      this.props.fetchTasks(url + this._encodeParams());
    }
  }
  _encodeParams() {
    let params = { ...this.props.sorting, page: this.props.page };
    let encodedParams = '';
    for (let key in params) {
      encodedParams += `&${key}=${params[key]}`
    }
    return encodedParams;
  }
  render() {
    return(
      <>
        <SortingForm />
        {this.props.loading && <Loading />}
        {!this.props.loading &&
          <div>
            <TasksList tasks={this.props.tasks}/>
            {this.props.total > entriesPerPage &&
              <Pagination
                page={this.props.page}
                total={this.props.total}
              />
            }
            {this.props.formDisplay.type === 'edit' && <EditTaskForm data={this.props.formDisplay.data}/>}
          </div>
        }
        <button onClick={() => this.props.showForm({ type: 'add' })}>Add task</button>
        {this.props.formDisplay.type === 'add' && <AddTaskForm />}
        {!this.props.login && <button onClick={() => this.props.showForm({ type: 'login' })}>Log in</button>}
        {this.props.login && <span>You are loggen in</span>}
        {this.props.formDisplay.type === 'login' && <LoginForm />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    loading: state.loading,
    sorting: state.sorting,
    page: state.page,
    total: Number(state.total),
    login: state.login,
    formDisplay: state.formDisplay
  }
};

const mapDispatchToProps = {
  fetchTasks,
  showForm,
  hideForm
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
