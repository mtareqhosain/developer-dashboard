import React from 'react';

const Package = ({
  key,
  name,
  base_price,
  additional_calls,
  api_calls,
  verificationPopup,
  toggleVerificationPopup,
}) => {
  return (
    <div className='card-2 package-card'>
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
      <button
        className='btn-1 btn-left-corner'
        onClick={() => toggleVerificationPopup(!verificationPopup)}
      >
        Activate
      </button>
    </div>
  );
};

export default Package;
