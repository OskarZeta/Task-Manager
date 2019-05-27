import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../redux/actions/handleSorting';
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
        sort_field: this.state.sort_field,
        sort_direction: this.state.sort_direction,
        page: defaultPage
      });
    });
  }
  render() {
    const { sort_field, sort_direction } = this.state;
    return(
      <form>
        <div>
          <label>
            <span>username</span>
            <input
              name="sort_field" type="radio" value="username"
              checked={sort_field === 'username'}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
          </label>
          <label>
            <span>email</span>
            <input
              name="sort_field" type="radio" value="email"
              checked={sort_field === 'email'}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
          </label>
          <label>
            <span>status</span>
            <input
              name="sort_field" type="radio" value="status"
              checked={sort_field === 'status'}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>asc</span>
            <input
              name="sort_direction" type="radio" value="asc"
              checked={sort_direction === 'asc'}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
          </label>
          <label>
            <span>desc</span>
            <input
              name="sort_direction" type="radio" value="desc"
              checked={sort_direction === 'desc'}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
          </label>
        </div>
      </form>
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
