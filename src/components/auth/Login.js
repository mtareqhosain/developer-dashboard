import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth container'>
      <div className='auth-flex'>
        <img
          src={require('../../assets/auth_init.png')}
          alt=''
          className='auth_img hide-mobile'
        />
        <form className='auth-form'>
          <h2 className='purple-text'>Sign in to Barikoi</h2>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
          <br />
          <input type='checkbox' name='show-password' id='' />
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
        </form>
      </div>
    </div>
  );
};

export default Login;
