import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTasks from '../redux/actions/fetchTasks';
import { formHide } from '../redux/actions/formDisplay';
import { formResetValidation } from '../redux/actions/formValidate';

import FormAddTask from './formAddTask';
import FormEditTask from './formEditTask';
import FormLogin from './formLogin';
import SortingForm from './sortingForm';
import Pagination from './pagination';

import Header from '../components/header';
import Loading from '../components/loading';
import TasksList from '../components/tasksList';

import { baseUrl, devName, entriesPerPage } from '../constantValues';

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
      this.props.formHide();
    }
    if (prevProps.formDisplay !== this.props.formDisplay) {
      this.props.formResetValidation();
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
    const { loading, tasks, total, formDisplay, login } = this.props;
    return(
      <div className="app">
        <Header login={login}/>
        {loading && <Loading />}
        {!loading && <main>
          <div>
            <div>
              <SortingForm />
            </div>
            <div className="tasks">
              <TasksList tasks={tasks}/>
              {total > entriesPerPage && <Pagination /> }
              {formDisplay.type === 'edit' && <FormEditTask data={formDisplay.data}/>}
            </div>
            {formDisplay.type === 'add' && <FormAddTask />}
            {formDisplay.type === 'login' && <FormLogin />}
          </div>
        </main>}
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
  formHide,
  formResetValidation
};

App.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  sorting: PropTypes.object.isRequired,
  validation: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  formHide: PropTypes.func.isRequired,
  formResetValidation: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  formDisplay: PropTypes.object.isRequired,
  login: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
