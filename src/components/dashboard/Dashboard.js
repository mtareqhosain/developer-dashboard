import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiKey, getAnalytics } from '../../actions/auth';

// component imports
import Spinner from '../layout/Spinner';

const Dashboard = ({
  isAuthenticated,
  loading,
  apiKey,
  analytics,
  getApiKey,
  getAnalytics,
}) => {
  useEffect(() => {
    getApiKey();
    getAnalytics();
  }, [apiKey]);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <div className='dashboard container'>
      <div className='analytics wrapper'>
        <small>API Usage Table</small>
        <table>
          <tr>
            <th>API</th>
            <th>Usage</th>
          </tr>
          {apiKey ? (
            analytics && (
              <Fragment>
                <tr>
                  <td>Autocomplete</td>
                  <td>{analytics[0].autocomplete_count}</td>
                </tr>
                <tr>
                  <td>ReverseGeo</td>
                  <td>{analytics[0].reverse_geo_code_count}</td>
                </tr>
                <tr>
                  <td>Geocode</td>
                  <td>{analytics[0].geo_code_count}</td>
                </tr>
                <tr>
                  <td>Nearby</td>
                  <td>{analytics[0].nearby_count}</td>
                </tr>
                <tr>
                  <td>Distance</td>
                  <td>{analytics[0].distance_count}</td>
                </tr>
                <tr>
                  <td>Rupantor</td>
                  <td>{analytics[0].rupantor_batchgeo_count}</td>
                </tr>
              </Fragment>
            )
          ) : (
            <tr>
              <td>No Api key in use</td>
              <td>0</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  apiKey: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.user,
  loading: state.auth.loading,
  apiKey: state.auth.apiKey,
  analytics: state.auth.analytics,
});

export default connect(mapStateToProps, { getApiKey, getAnalytics })(Dashboard);
