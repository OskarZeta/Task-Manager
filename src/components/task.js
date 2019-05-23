import React, { Component } from 'react';
import editTask from '../redux/actions/editTask';
import { connect } from 'react-redux';

class Task extends Component {
  state = {
    text: this.props.text,
    status: this.props.status
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        text: this.props.text,
        status: this.props.status
      });
    }
  }
  changeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }
  submitChanges(id, data) {
    this.props.editTask(id, data);
  }
  render() {
    return(
      <article style={{ border: '1px solid black' }}>
        Task
        <div>{ this.props.username }</div>
        <div>{ this.props.id }</div>
        <div>{ this.props.username }</div>
        <div>{ this.props.email }</div>
        <textarea
          name="text"
          value={ this.state.text }
          onChange={e => this.changeHandler(e.target.name, e.target.value)}
        />
        <input
          type="checkbox"
          name="status"
          checked={ Number(this.state.status) }
          onChange={e => this.changeHandler(e.target.name, e.target.checked ? 10 : 0)}
        />
        <button onClick={e => this.submitChanges(this.props.id, this.state)}>edit</button>
      </article>
    );
  }
}

const mapDispatchToProps = {
  editTask
};

export default connect(null, mapDispatchToProps)(Task);
