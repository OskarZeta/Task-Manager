import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';
import LoginIcon from '../login.svg';

const Header = ({ login }) =>
  <header className="header">
    <div className="container">
      <div className="header__content row p-4">
        <h1>Task manager</h1>
        {!login &&
          <Button type="login">
            <LoginIcon/>
          </Button>
        }
        {login && <span>You are logged in</span>}
      </div>
    </div>
  </header>

Header.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Header;
