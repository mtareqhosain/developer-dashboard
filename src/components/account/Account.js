import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Account = ({ user: { user }, loading }) => {
  return (
    user && (
      <div className='account container'>
        <h2>Account Overview</h2>
        <div className='account-cards'>
          <div className='card-1'>
            <h3>API Panel</h3>
            <p>Active Api Key: 1</p>
            <p>Current Plan: Pay as you go</p>
            <p>Active Api Key: MTc0OTpBVjZNOFo2MzFJ</p>
            <button className='btn-1'>API</button>
          </div>
          <div className='card-1'>
            <h3>Profile</h3>
            <p>User: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Contact: {user.phone}</p>
            <button className='btn-1'>Reset Password</button>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

Account.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Account);
