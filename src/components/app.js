import React, { Component } from 'react';
import fetchTasks from '../redux/actions/fetchTasks';
import { connect } from 'react-redux';
import { baseUrl, devName } from '../constantValues';
//import Task from './task';
import Loading from './loading';
import TasksList from './tasksList';
import AddTaskForm from './addTaskForm';
import SortingForm from './sortingForm';

//const url = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Vasyakov';
let url = `${baseUrl}?developer=${devName}`;

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks(url + this._encodeParams());
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sorting !== this.props.sorting) {
      this.props.fetchTasks(url + this._encodeParams());
    }
  }
  _encodeParams() {
    let params = this.props.sorting;
    let encodedParams = '';
    for (let key in params) {
      encodedParams += `&${key}=${params[key]}`
    }
    return encodedParams;
  }
  render() {
    //console.log(this.props.tasks);
    // {this.props.tasks.length > 0 && this.makeTasks()}
    // <AddTaskForm />
    return(
      <>
        <SortingForm />
        {this.props.loading && <Loading />}
        {!this.props.loading && <TasksList tasks={this.props.tasks}/>}
        <AddTaskForm />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    loading: state.loading,
    sorting: state.sorting
  }
};

const mapDispatchToProps = {
  fetchTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
