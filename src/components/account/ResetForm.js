import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/auth';

const ResetForm = ({ resetPopup, toggleResetPopup, resetPassword }) => {
  const [formState, setFormState] = useState({
    oldPass: '',
    newPass: '',
  });
  useEffect(() => {
    document.addEventListener('mousedown', handleToggle);
    return () => {
      document.removeEventListener('mousedown', handleToggle);
    };
  }, []);

  const node = useRef();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(formState);
  };

  const handleToggle = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleResetPopup(!resetPopup);
  };
  return (
    <Fragment>
      <div className='modal'></div>
      <form ref={node} className='popup card-1' onSubmit={handleSubmit}>
        <div className='popup-header'>
          <h3>Reset Password</h3>
          <FontAwesomeIcon
            icon='times'
            size='lg'
            onClick={() => toggleResetPopup(!resetPopup)}
          />
        </div>

        <div className='input-group'>
          <input
            type='text'
            placeholder='Current Password'
            name='oldPass'
            onChange={handleChange}
          />
          <FontAwesomeIcon icon='eye-slash' size='lg' />
        </div>
        <div className='input-group'>
          <input
            type='text'
            placeholder='New Password'
            name='newPass'
            onChange={handleChange}
          />
          <FontAwesomeIcon icon='eye-slash' size='lg' />
        </div>
        <button className='btn-1'>Update Password</button>
      </form>
    </Fragment>
  );
};

export default connect(null, { resetPassword })(ResetForm);
