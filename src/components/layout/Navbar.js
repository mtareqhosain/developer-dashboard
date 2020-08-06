import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <div className={`side-nav show-desktop ${isOpen ? '' : 'close-sidebar'}`}>
        <div className='side-header'>
          <h2 className='brand-logo'>
            Bari<span>koi</span>
          </h2>
          <FontAwesomeIcon
            icon='times'
            size='lg'
            className='hide-tablet '
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
            <Link to='/register'>Register --check--</Link>
          </li>
        </ul>
      </div>
      <header className='nav-header container'>
        <span className='ham light-color'>
          <FontAwesomeIcon icon='bars' size='lg' onClick={toggleSidebar} />
        </span>

        <div className='dropdown'>
          <h4 className='light-color btn-1'>Account</h4>
          <div class='dropdown-content'>
            <p>Logout</p>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
