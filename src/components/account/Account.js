import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import ResetForm from './ResetForm';
import ApiList from './ApiList';
import Spinner from '../layout/Spinner';

const Account = ({ user: { user }, loading }) => {
  const [resetPopup, toggleResetPopup] = useState(false);
  const [apiPopup, toggleApiPopup] = useState(false);

  return (
    user && (
      <div className='account container'>
        <Spinner loading={loading} />
        <h2>Account Overview</h2>
        <div className='account-cards'>
          <div className='card-2 account-card'>
            <div className='card-header'>
              <h3>API Panel</h3>
            </div>
            <p>Active Api Key: 1</p>
            <p>Current Plan: Pay as you go</p>
            <p>Active Api Key: MTc0OTpBVjZNOFo2MzFJ</p>
            <button
              className='btn-1'
              onClick={() => toggleApiPopup(!resetPopup)}
            >
              API
            </button>
          </div>
          <div className='card-2 account-card'>
            <div className='card-header'>
              <h3>Profile</h3>
            </div>
            <p>User: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Contact: {user.phone}</p>
            <button
              className='btn-1'
              onClick={() => toggleResetPopup(!resetPopup)}
            >
              Reset Password
            </button>
          </div>
        </div>
        {resetPopup && (
          <ResetForm
            resetPopup={resetPopup}
            toggleResetPopup={toggleResetPopup}
          />
        )}

        {apiPopup && (
          <ApiList apiPopup={apiPopup} toggleApiPopup={toggleApiPopup} />
        )}
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
