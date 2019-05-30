import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../redux/actions/handleSorting';

import Button from '../components/button';

import { defaultPage } from '../constantValues';

class SortingForm extends Component {
  state = {
    sort_field: this.props.sort_field,
    sort_direction: this.props.sort_direction
  }
  changeHandler(field, value) {
    this.setState({
      [field]: value
    }, () => {
      this.props.setSorting({
        ...this.state,
        page: defaultPage
      });
    });
  }
  render() {
    const { sort_field, sort_direction } = this.state;
    return(
      <div className="container">
        <div className="row p-4 d-flex align-items-center justify-content-between">
          <form className="sorting__form">
            <div className="d-flex flex-column flex-sm-row my-1 justify-content-between">
              <div className="mr-3">Поле сортировки: </div>
              <div className="d-flex flex-column flex-sm-row">
                <label className="d-flex align-items-baseline mr-3">
                  <input
                    name="sort_field" type="radio" value="username"
                    checked={sort_field === 'username'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <span className="ml-1">пользователь</span>
                </label>
                <label className="d-flex align-items-baseline mr-3">
                  <input
                    name="sort_field" type="radio" value="email"
                    checked={sort_field === 'email'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <span className="ml-1">email</span>
                </label>
                <label className="d-flex align-items-baseline">
                  <input
                    name="sort_field" type="radio" value="status"
                    checked={sort_field === 'status'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <span className="ml-1">статус</span>
                </label>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row my-1 justify-content-between">
              <div className="mr-3">Направление сортировки: </div>
              <div className="d-flex flex-column flex-sm-row">
                <label className="d-flex align-items-baseline mr-3">
                  <input
                    name="sort_direction" type="radio" value="asc"
                    checked={sort_direction === 'asc'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <span className="ml-1">возрастание</span>
                </label>
                <label className="d-flex align-items-baseline">
                  <input
                    name="sort_direction" type="radio" value="desc"
                    checked={sort_direction === 'desc'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <span className="ml-1">убывание</span>
                </label>
              </div>
            </div>
          </form>
          <Button type="add">
            <span className="button--add-text">+</span>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sort_field: state.sorting.sort_field,
    sort_direction: state.sorting.sort_direction
  }
};

const mapDispatchToProps = {
  setSorting
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingForm);
