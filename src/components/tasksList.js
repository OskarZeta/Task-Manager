import React, { Component } from 'react';
import { baseUrl, devName } from '../constantValues';
import Task from './task';

const url = `${baseUrl}?developer=${devName}`;

class TasksList extends Component {
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
    return(
      <div>
        {this.makeTasks()}
      </div>
    );
  }
}

export default TasksList;
