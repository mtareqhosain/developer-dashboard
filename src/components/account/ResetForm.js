import React, { Fragment, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResetForm = ({ resetPopup, toggleResetPopup }) => {
  useEffect(() => {
    document.addEventListener('mousedown', handleToggle);
    return () => {
      document.removeEventListener('mousedown', handleToggle);
    };
  }, []);

  const node = useRef();

  const handleToggle = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleResetPopup(!resetPopup);
  };
  return (
    <Fragment>
      <div className='modal'></div>
      <div ref={node} className='popup card-1'>
        <div className='popup-header'>
          <h3>Reset Password</h3>
          <FontAwesomeIcon
            icon='times'
            size='lg'
            onClick={() => toggleResetPopup(!resetPopup)}
          />
        </div>

        <div className='input-group'>
          <input type='text' placeholder='Current Password' />
          <FontAwesomeIcon icon='eye-slash' size='lg' />
        </div>
        <div className='input-group'>
          <input type='text' placeholder='New Password' />
          <FontAwesomeIcon icon='eye-slash' size='lg' />
        </div>
        <button className='btn-1'>Update Password</button>
      </div>
    </Fragment>
  );
};

export default ResetForm;
