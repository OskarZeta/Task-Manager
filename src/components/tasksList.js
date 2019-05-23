import React, { Component } from 'react';
import fetchTasks from '../redux/actions/fetchTasks';
//import { startLoading, stopLoading } from '../redux/actions/handleLoading';
import { connect } from 'react-redux';
import { baseUrl, devName } from '../constantValues';
import Task from './task';
import Loading from './loading';

const url = `${baseUrl}?developer=${devName}`;

class TasksList extends Component {
  // componentDidMount() {
  //   this.props.fetchTasks(url);
  // }
  makeTasks() {
    const tasks = this.props.tasks;
    return(
      <>
        {tasks.map(task =>
          <Task
            key = { task.id }
            id = { task.id }
            username = { task.username }
            email = { task.email }
            text = { task.text }
            status = { task.status }
          />
        )}
      </>
    );
  }
  render() {
    // <div>
    //   <div>
    //     <span>ID</span>
    //     <span>{sort.by === 'id' ? sort.dir === 'asc' ? '▲' : '▼' : '⇳'}
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span>User name</span>
    //     <span>{sort.by === 'username' ? sort.dir === 'asc' ? '▲' : '▼' : '⇳'}
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span>E-mail</span>
    //     <span>{sort.by === 'email' ? sort.dir === 'asc' ? '▲' : '▼' : '⇳'}
    //     </span>
    //   </div>
    //
    //   <div>
    //     <span>Status</span>
    //     <span>{sort.by === 'phone' ? sort.dir === 'asc' ? '▲' : '▼' : '⇳'}
    //     </span>
    //   </div>
    // </div>

    // {this.props.loading && <Loading />}
    // <div>
    //   {!this.props.loading && this.makeTasks()}
    // </div>
    return(
      <div>
        {this.makeTasks()}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     tasks: state.tasks,
//     loading: state.loading
//   }
// };
//
// const mapDispatchToProps = {
//   fetchTasks,
//   //startLoading,
//   //stopLoading
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
export default TasksList;
