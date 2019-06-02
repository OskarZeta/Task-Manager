import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTasks from '../redux/actions/fetchTasks';

import FormAddTask from './formAddTask';
import FormEditTask from './formEditTask';
import FormLogin from './formLogin';
import SortingForm from './sortingForm';
import Pagination from './pagination';

import Header from '../components/header';
import Loading from '../components/loading';
import TasksList from '../components/tasksList';
import Error from '../components/error';

import { baseUrl, devName, entriesPerPage } from '../constantValues';
import serialize from '../utils/serialize';

const url = `${baseUrl}?developer=${devName}`;

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks(url + serialize(this.props.sorting));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sorting !== this.props.sorting) {
      this.props.fetchTasks(url + serialize(this.props.sorting));
    }
  }
  render() {
    const { error, loading, tasks, total, formDisplay, login, sorting } = this.props;
    return(
      <div className="app">
        <Header isError={error.isError} login={login}/>
        {!error.isError && <>
          {loading &&
            <div className="container pt-5">
              <Loading />
            </div>
          }
          {!loading &&
            <main>
              <section>
                <SortingForm />
              </section>
              <section className="app__tasks">
                <TasksList tasks={tasks}/>
                {total > entriesPerPage && <Pagination /> }
              </section>
              {formDisplay.type === 'add' && <FormAddTask sorting={sorting} />}
              {formDisplay.type === 'edit' &&
                <FormEditTask data={formDisplay.data} sorting={sorting} />
              }
              {formDisplay.type === 'login' && <FormLogin />}
            </main>
          }
        </>}
        {error.isError && <Error text={error.text}/>}
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
    error: state.error,
    formDisplay: state.formDisplay
  }
};

const mapDispatchToProps = {
  fetchTasks
};

App.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  sorting: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  formDisplay: PropTypes.object.isRequired,
  login: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
