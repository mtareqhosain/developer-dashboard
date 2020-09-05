import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllPackages } from '../../actions/api';
import { getApiKey } from '../../actions/auth';

// Component imports
import Spinner from '../layout/Spinner';
import VerificationForm from './VerificationForm';
import Package from './Package';

const Packages = ({ apiKey, packages, loading, getAllPackages, getApiKey }) => {
  const [verificationPopup, toggleVerificationPopup] = useState(false);

  useEffect(() => {
    getApiKey();
    getAllPackages();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className='account container'>
      <h2>Packages</h2>
      <div className='account-cards package-cards'>
        {packages &&
          packages.map((item) => (
            <Package
              key={item.id}
              id={item.id}
              name={item.name}
              base_price={item.base_price}
              additional_calls={item.limit_exceed_rate}
              api_calls={item.base_cap}
              verificationPopup={verificationPopup}
              toggleVerificationPopup={toggleVerificationPopup}
              apiKey={apiKey}
            />
          ))}
        {/* <div className='card-2 package-card active-card'>
          <div className='card-header'>
            <h3>StartUp</h3>
          </div>
          <p>৳0 / mo</p>
          <p>30,000 API Calls</p>
          <p>2000 Daily Limit</p>
          <p>Pay As you Go</p>
          <p>Additional Calls ৳0.15</p>

          <button disabled className='btn-1 btn-left-corner'>
            Activate
          </button>
        </div> */}
      </div>
      {verificationPopup && (
        <VerificationForm
          verificationPopup={verificationPopup}
          toggleVerificationPopup={toggleVerificationPopup}
          apiKey={apiKey}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  packages: state.api.packages,
  loading: state.api.loading,
  apiKey: state.auth.apiKey,
});

Packages.propTypes = {
  packages: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { getAllPackages, getApiKey })(
  Packages
);
