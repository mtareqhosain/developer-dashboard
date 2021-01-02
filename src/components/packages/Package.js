import React from 'react';
import { connect } from 'react-redux';
import { requestUpgrade, getActivePackage } from '../../actions/api';
import { useEffect } from 'react';

const Package = ({
  id,
  name,
  base_price,
  additional_calls,
  api_calls,
  verificationPopup,
  toggleVerificationPopup,
  requestUpgrade,
  apiKey,
  currentPackage,
  getActivePackage,
}) => {
  useEffect(() => {
    getActivePackage(apiKey);
  }, [apiKey]);

  const handleClick = (e) => {
    window.scrollTo(0, 0);
    requestUpgrade(apiKey, id);
    toggleVerificationPopup(!verificationPopup);
  };
  return (
    <div
      className={`card-2 package-card ${
        currentPackage === name ? 'active-card' : ''
      }`}
    >
      <div className='card-header'>
        <h3>{name}</h3>
      </div>
      <p>৳{base_price} / mo</p>
      <p>{api_calls} API Calls</p>
      <p>{name === 'Developer' ? '2000' : 'No'} Daily Limit</p>
      <p>
        {name === 'Developer'
          ? 'Pay as you go'
          : name === 'StartUp' || name === 'Business'
          ? 'Monthly Billing'
          : 'Analytics Support'}
      </p>
      <p>Additional Calls ৳{additional_calls}</p>
      {currentPackage === name ? (
        ''
      ) : (
        <button className='btn-1 btn-left-corner' onClick={handleClick}>
          Activate
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPackage: state.api.currentPackage,
});

export default connect(mapStateToProps, { requestUpgrade, getActivePackage })(
  Package
);
