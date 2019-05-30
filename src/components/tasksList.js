import React from 'react';
import PropTypes from 'prop-types';

import Task from './task';

const TasksList = ({ tasks }) =>
  <div className="container">
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
  </div>

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TasksList;
