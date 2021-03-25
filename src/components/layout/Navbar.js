import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';

const Navbar = ({ isAuthenticated, loading, logout }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <div
        className={`side-nav show-desktop ${
          isOpen && isAuthenticated ? '' : 'close-sidebar'
        }`}
      >
        <div className='side-header'>
          <h2 className='brand-logo'>
            Bari<span>koi</span>
          </h2>
          <FontAwesomeIcon
            icon='bars'
            size='lg'
            className='pointer'
            onClick={toggleSidebar}
          />
        </div>

        <ul>
          <li>
            <Link to='/'>Dashboard</Link>
          </li>
          <li>
            <Link to='/account'>Account</Link>
          </li>
          <li>
            <Link to='/packages'>Packages</Link>
          </li>
          <li>
            <Link to='/map-analytics'>Map Analytics</Link>
          </li>
        </ul>
      </div>
      <header
        className={`nav-header container ${
          isAuthenticated ? '' : 'close-sidebar'
        }`}
      >
        <span className='ham light-color'>
          <FontAwesomeIcon
            icon='chevron-right'
            size='lg'
            onClick={toggleSidebar}
            className={` ${isOpen && isAuthenticated ? 'hide' : ''}`}
          />
        </span>

        <div className='dropdown'>
          <h4
            className='light-color btn-1'
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            Account
          </h4>
          <div className={`dropdown-content ${dropdown ? 'open' : ''}`}>
            <p
              onClick={() => {
                logout();
                setDropdown(false);
              }}
            >
              Logout
            </p>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(Navbar);
