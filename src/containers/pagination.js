import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSorting } from '../redux/actions/handleSorting';

import { entriesPerPage } from '../constantValues';

class Pagination extends Component {
  clickHandler(e) {
    const { sort_field, sort_direction, page } = this.props;
    this.props.setSorting({
      sort_field,
      sort_direction,
      page: e.target.name === 'prev' ? page - 1 : page + 1
    });
  }
  render() {
    return(
      <div className="pagination-custom">
        <div className="row col-12 col-sm-8 py-3 mx-auto d-flex justify-content-center align-items-center">
          <button
            disabled={this.props.page <= 1}
            name="prev" onClick={e => this.clickHandler(e)}
            className="btn btn-outline-secondary col-3 button--page"
          > prev </button>
          <span className="mx-4">{this.props.page}</span>
          <button
            disabled={this.props.page >= Math.ceil(this.props.total/entriesPerPage)}
            name="next" onClick={e => this.clickHandler(e)}
            className="btn btn-outline-secondary col-3 button--page"
          > next </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.sorting,
    total: Number(state.total)
  }
};

const mapDispatchToProps = {
  setSorting
};

Pagination.propTypes = {
  sort_field: PropTypes.string.isRequired,
  sort_direction: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setSorting: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
