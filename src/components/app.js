import React, { Component } from 'react';
import fetchTasks from '../redux/actions/fetchTasks';
import { connect } from 'react-redux';
//import Task from './task';
import Loading from './loading';
import TasksList from './tasksList';
import AddTaskForm from './addTaskForm';

const url = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Vasyakov';

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks(url);
  }
  render() {
    //console.log(this.props.tasks);
    // {this.props.tasks.length > 0 && this.makeTasks()}
    // <AddTaskForm />
    return(
      <>
        {this.props.loading && <Loading />}
        {!this.props.loading && <div>
          <TasksList tasks={this.props.tasks}/>
          <AddTaskForm />
        </div>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    loading: state.loading
  }
};

const mapDispatchToProps = {
  fetchTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
