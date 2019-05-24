import React, { Component } from 'react';
import fetchTasks from '../redux/actions/fetchTasks';
import { connect } from 'react-redux';
import { baseUrl, devName } from '../constantValues';
import Loading from './loading';
import TasksList from './tasksList';
import AddTaskForm from './addTaskForm';
import SortingForm from './sortingForm';
import Pagination from './pagination';
import { entriesPerPage } from '../constantValues';

//const url = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Vasyakov';
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
          </div>
        }
        <AddTaskForm />
      </>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    tasks: state.tasks,
    loading: state.loading,
    sorting: state.sorting,
    page: state.page,
    total: Number(state.total)
  }
};

const mapDispatchToProps = {
  fetchTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
