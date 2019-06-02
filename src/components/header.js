import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const Header = ({ login }) =>
  <header className="header">
    <div className="container">
      <div className="header__content py-4 px-1">
        <h1>Task manager</h1>
        {!login &&
          <Button type="login">
            <span>🔑</span>
          </Button>
        }
        {login &&
          <div className="header__admin">
            <span className="header__admin-icon">👤</span>
            <span>Админ</span>
          </div>
        }
      </div>
    </div>
  </header>

Header.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Header;
