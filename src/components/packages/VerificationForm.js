import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerificationForm = ({ verificationPopup, toggleVerificationPopup }) => {
  const [formState, setFormState] = useState({
    code: '',
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
  };

  const handleToggle = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleVerificationPopup(!verificationPopup);
  };
  return (
    <Fragment>
      <div className='modal'></div>
      <form
        ref={node}
        className='popup card-1 verification-form'
        onSubmit={handleSubmit}
      >
        <div className='popup-header'>
          <h3>Verification</h3>

          <FontAwesomeIcon
            icon='times'
            size='lg'
            className='pointer'
            onClick={() => toggleVerificationPopup(!verificationPopup)}
          />
        </div>
        <p>*Insert the verification code sent to ab**1@test.com</p>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Verification Code'
            name='token'
            onChange={handleChange}
          />
        </div>

        <button
          className='btn-1'
          onClick={() => toggleVerificationPopup(!verificationPopup)}
        >
          Verify
        </button>
      </form>
    </Fragment>
  );
};

export default VerificationForm;
