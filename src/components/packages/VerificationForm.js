import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { verifyUpgrade } from '../../actions/api';

const VerificationForm = ({
  verificationPopup,
  toggleVerificationPopup,
  verifyUpgrade,
  apiKey,
  email,
}) => {
  const [formState, setFormState] = useState({
    access_token: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUpgrade(apiKey, formState);
    toggleVerificationPopup(!verificationPopup);
  };

  return (
    <Fragment>
      <div className='modal'></div>
      <form className='popup card-1 verification-form' onSubmit={handleSubmit}>
        <div className='popup-header'>
          <h3>Verification</h3>

          <FontAwesomeIcon
            icon='times'
            size='lg'
            className='pointer'
            onClick={() => toggleVerificationPopup(!verificationPopup)}
          />
        </div>
        <p>*Insert the verification code sent to {email}</p>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Verification Code'
            name='access_token'
            onChange={handleChange}
          />
        </div>

        <button className='btn-1'>Verify</button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  email: state.auth.user.data.email,
});

export default connect(mapStateToProps, { verifyUpgrade })(VerificationForm);
