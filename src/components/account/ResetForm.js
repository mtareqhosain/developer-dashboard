import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/auth';

const ResetForm = ({ resetPopup, toggleResetPopup, resetPassword }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);

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

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleNewPasswordVisiblity = () => {
    setNewPasswordShown(!newPasswordShown);
  };

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
            className='pointer'
            onClick={() => toggleResetPopup(!resetPopup)}
          />
        </div>

        <div className='input-group'>
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder='Current Password'
            name='oldPass'
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={`${passwordShown ? 'eye' : 'eye-slash'}`}
            size='lg'
            className='pointer'
            onClick={togglePasswordVisiblity}
          />
        </div>
        <div className='input-group'>
          <input
            type={newPasswordShown ? 'text' : 'password'}
            placeholder='New Password'
            name='newPass'
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={`${newPasswordShown ? 'eye' : 'eye-slash'}`}
            size='lg'
            className='pointer'
            onClick={toggleNewPasswordVisiblity}
          />
        </div>
        <button className='btn-1'>Update Password</button>
      </form>
    </Fragment>
  );
};

export default connect(null, { resetPassword })(ResetForm);
