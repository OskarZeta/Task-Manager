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
        <div className="sorting py-4 px-1">
          <form className="sorting__form">
            <div className="sorting__form-row flex-sm-row my-1">
              <div className="mr-3">Поле сортировки: </div>
              <div className="d-flex flex-column flex-sm-row">
                <div className="mr-2 custom-control custom-radio">
                  <input
                    name="sort_field" type="radio" value="username" id="username"
                    className="custom-control-input" checked={sort_field === 'username'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="username">
                    <span>пользователь</span>
                  </label>
                </div>
                <div className="mr-2 custom-control custom-radio">
                  <input
                    name="sort_field" type="radio" value="email" id="email"
                    className="custom-control-input" checked={sort_field === 'email'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="email">
                    <span>email</span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    name="sort_field" type="radio" value="status" id="status"
                    className="custom-control-input" checked={sort_field === 'status'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="status">
                    <span>статус</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="sorting__form-row flex-sm-row my-1">
              <div className="mr-3">Направление сортировки: </div>
              <div className="d-flex flex-column flex-sm-row">
                <div className="mr-2 custom-control custom-radio">
                  <input
                    name="sort_direction" type="radio" value="asc" id="asc"
                    className="custom-control-input" checked={sort_direction === 'asc'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="asc">
                    <span>возрастание</span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    name="sort_direction" type="radio" value="desc" id="desc"
                    className="custom-control-input" checked={sort_direction === 'desc'}
                    onChange={e => this.changeHandler(e.target.name, e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="desc">
                    <span>убывание</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
          <Button type="add">
            <span>+</span>
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
