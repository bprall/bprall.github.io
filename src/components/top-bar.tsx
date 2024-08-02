import React from 'react';
import { Link } from 'react-router-dom';
import ChangeIcon from '../utils/mouseEvents';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="brand-container">
        <Link
          className="nonuser-navbar-brand navbar-brand"
          to="/"
          onMouseEnter={() => ChangeIcon('.icon', 'icon-bp-logo', 'icon-bp-bb')}
          onMouseLeave={() => ChangeIcon('.icon', 'icon-bp-bb', 'icon-bp-logo')}
        >
          <i className="icon icon-bp-logo"></i>
        </Link>
      </div>
    </div>
  );
}

export default TopBar