import React from 'react';
import PropTypes from 'prop-types';

const WarningText = ({ text }) =>
  <div className="text-danger m-1">
    {text}
  </div>

WarningText.propTypes = {
  text: PropTypes.string.isRequired
}
export default WarningText;
