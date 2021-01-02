import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { requestNewPassword } from '../../actions/auth';

const ForgetPassForm = ({
  passwordResetPopup,
  togglePasswordResetPopup,
  requestNewPassword
  
}) => {
  const [formState, setFormState] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
    requestNewPassword(formState.email);
    togglePasswordResetPopup(!passwordResetPopup);
  };

  return (
    <Fragment>
      <div className='modal'></div>
      <form className='popup card-1 verification-form' onSubmit={handleSubmit}>
        <div className='popup-header'>
          <h3>Request for a new Password</h3>
          
          <FontAwesomeIcon
            icon='times'
            size='lg'
            className='pointer'
            onClick={() => togglePasswordResetPopup(!passwordResetPopup)}
          />
        </div>
        <p>*Please enter the email of your account for password recovery</p>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Your email here'
            name='email'
            onChange={handleChange}
          />
        </div>

        <button className='btn-1'>Send Request</button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  // email: state.auth.user.data.email,
});

export default connect(mapStateToProps, { requestNewPassword })(ForgetPassForm);
