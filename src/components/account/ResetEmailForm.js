import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import { resetEmail } from '../../actions/api';

const ResetEmailForm = ({
  resetEmailPopup,
  toggleResetEmailPopup,
  resetEmail,
}) => {
  const [formState, setFormState] = useState({
    newEmail: '',
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
    resetEmail(formState);
  };

  const handleToggle = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleResetEmailPopup(!resetEmailPopup);
  };
  return (
    <Fragment>
      <div className='modal'></div>
      <form ref={node} className='popup card-1' onSubmit={handleSubmit}>
        <div className='popup-header'>
          <h3>Reset Email</h3>
          <FontAwesomeIcon
            icon='times'
            size='lg'
            className='pointer'
            onClick={() => toggleResetEmailPopup(!resetEmailPopup)}
          />
        </div>

        <div className='input-group'>
          <input
            type='text'
            placeholder='New Email'
            name='newEmail'
            onChange={handleChange}
          />
        </div>
        <button className='btn-1'>Update Email</button>
      </form>
    </Fragment>
  );
};

export default connect(null, { resetEmail })(ResetEmailForm);
