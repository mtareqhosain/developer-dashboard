import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiKey, generateKey } from '../../actions/auth';

// Component imports
import ResetForm from './ResetForm';
import ApiList from './ApiList';
import Spinner from '../layout/Spinner';

const Account = ({
  user: { user },
  loading,
  apiKey,
  apiKeyMessage,
  getApiKey,
}) => {
  const [resetPopup, toggleResetPopup] = useState(false);
  const [apiPopup, toggleApiPopup] = useState(false);

  useEffect(() => {
    getApiKey();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    user && (
      <div className='account container'>
        <h2>Account Overview</h2>
        <div className='account-cards'>
          <div className='card-2 account-card'>
            <div className='card-header'>
              <h3>API Panel</h3>
            </div>
            <p>{apiKeyMessage}</p>
            <p>Current Plan: Pay as you go</p>
            <p>Active Api Key: {apiKey}</p>
            {apiKey ? (
              <button
                className='btn-1 btn-left-corner'
                onClick={() => toggleApiPopup(!apiPopup)}
              >
                API
              </button>
            ) : (
              <button
                className='btn-1 btn-left-corner'
                onClick={() => generateKey()}
              >
                Generate API KEY
              </button>
            )}
          </div>
          <div className='card-2 account-card'>
            <div className='card-header'>
              <h3>Profile</h3>
            </div>
            <p>User: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Contact: {user.phone}</p>
            <button
              className='btn-1 btn-left-corner'
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
          <ApiList
            apiPopup={apiPopup}
            toggleApiPopup={toggleApiPopup}
            apiKey={apiKey}
          />
        )}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  apiKey: state.auth.apiKey,
  apiKeyMessage: state.auth.apiKeyMessage,
});

Account.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  apiKey: PropTypes.string.isRequired,
  apiKeyMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { getApiKey, generateKey })(Account);
