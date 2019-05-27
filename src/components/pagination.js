import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../redux/actions/handleSorting';
import { entriesPerPage } from '../constantValues';

class Pagination extends Component {
  clickHandler(e) {
    const { field, direction, page } = this.props;
    this.props.setSorting({
      sort_field: field,
      sort_direction: direction,
      page: e.target.name === 'prev' ? page - 1 : page + 1
    });
  }
  render() {
    return(
      <div>
        <button disabled={this.props.page <= 1}
          name="prev" onClick={e => this.clickHandler(e)}
        > prev </button>
        <span>{this.props.page}</span>
        <button disabled={this.props.page >= Math.ceil(this.props.total/entriesPerPage)}
          name="next" onClick={e => this.clickHandler(e)}
        > next </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sort_field: state.sorting.sort_field,
    sort_direction: state.sorting.sort_direction,
    page: state.sorting.page,
    total: Number(state.total)
  }
};

const mapDispatchToProps = {
  setSorting
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
