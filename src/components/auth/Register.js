import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ isAuthenticated, register }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
    register(formState);
  };

  const { name, phone, email, password } = formState;

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
          <h2 className='purple-text'>Sign up with Barikoi</h2>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            placeholder='Phone'
            name='phone'
            value={phone}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
            required
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
              SIGN UP
            </button>
          </div>

          <p>
            Already have an account?{' '}
            <Link to='/login'>
              <small className='purple-text strong'>LOG IN</small>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { register })(Register);
