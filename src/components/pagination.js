import React, { Component } from 'react';
import { connect } from 'react-redux';
import setPage from '../redux/actions/setPage';
import { entriesPerPage } from '../constantValues';

class Pagination extends Component {
  clickHandler(e) {
    const page = this.props.page;
    e.target.name === 'prev' ?
      this.props.setPage(page - 1) :
      this.props.setPage(page + 1);
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
    page: state.page,
    //total: Number(state.total)
  }
};

const mapDispatchToProps = {
  setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
