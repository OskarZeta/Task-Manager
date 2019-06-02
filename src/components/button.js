import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formShow } from '../redux/actions/formDisplay';

const Button = ({ formShow, children, type }) =>
  <button
    className={'btn btn-outline-' + (type === 'login' ? 'info' : 'success') + ' button button--' + type}
    onClick={() => formShow({ type })}
  >
    {children}
  </button>

const mapDispatchToProps = {
  formShow
};

Button.propTypes = {
  formShow: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default connect(null, mapDispatchToProps)(Button);
