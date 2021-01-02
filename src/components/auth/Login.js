import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth';
import PropTypes from 'prop-types';

import ForgetPassForm from './ForgetPassForm'

const Login = ({ isAuthenticated, loginUser }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const [passwordResetPopup, togglePasswordResetPopup] = useState(false);


  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(formState);
  };

  const { email, password } = formState;

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div className='auth container'>
      <div className='auth-flex'>
        <img
          src={require('../../assets/auth_init.png')}
          alt=''
          className='auth_img hide-mobile'
        />
        <form className='auth-form' onSubmit={handleSubmit}>
          <h2 className='purple-text'>Sign in to Barikoi</h2>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <br />
          <input
            type='checkbox'
            name='show-password'
            id=''
            onChange={togglePasswordVisiblity}
          />
          <span>Show Password</span>
          <div className='button-space'>
            <button className='bkoi-btn btn-primary btn-primary-circle'>
              SIGN IN
            </button>
          </div>

          <p>
            Don't have an account yet?{' '}
            <Link to='/register'>
              <small className='purple-text strong'>SIGN UP</small>
            </Link>
          </p>
          
          <p>
            <span onClick={() => togglePasswordResetPopup(!passwordResetPopup)}>
              <small className='purple-text strong'>Forgot Password ?</small>
            </span>
          </p>
        </form>
      </div>

      {passwordResetPopup && (
        <ForgetPassForm
          passwordResetPopup={passwordResetPopup}
          togglePasswordResetPopup={togglePasswordResetPopup}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { loginUser })(Login);
