import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiKey, getAnalytics } from '../../actions/auth';

//filtering
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import qs from 'qs';
import 'react-datepicker/dist/react-datepicker.css';

// component imports
import Spinner from '../layout/Spinner';

// date range import
//import DateRange from './DateRange'

const BASE_URL = 'https://admin.barikoi.xyz:8095/api/get/usage/date/range';

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

  
  //initializing dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [results, setResult] = useState([]);
  
  const handleClick = async (e) => {
    if (startDate !== null && endDate !== null) {
        //console.log('api: ', props.api);

        // formate dates
        format(startDate, 'yyyy-mm-dd');
        format(endDate, 'yyyy-mm-dd');

        // get filtered responses
        axios
            .get(`${BASE_URL}`, {
                params: {
                    date_from: startDate,
                    api_key: 'MTY5MjpZRVhZVDBRQkVT',
                    //api_key: apiKey,
                    date_to: endDate,
                },
                paramsSerializer: (params) => {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                },
            })
            .then(
                (response) => {
                      setResult(response.data.usage);
                  
                }
            ).catch (err => {
                  console.error(err);
              });
    }
};

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
          <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                maxDate={new Date()}
                dateFormat='yyyy-MM-dd'
                placeholderText='Start Date'
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                maxDate={new Date()}
                dateFormat='yyyy-MM-dd'
                placeholderText='End Date'
            />
            <button className='btn-1' onClick={() => handleClick()}>
            Ok
            </button>
            {apiKey ? (
            results.length > 0 && (
              <table>
                <tr>
                            <th>API</th>
                            <th>Usage</th>
                        </tr>
              <Fragment>
                <tr>
                  <td>Autocomplete</td>
                  <td>{results[0].autocomplete_count}</td>
                </tr>
                <tr>
                  <td>ReverseGeo</td>
                  <td>{results[0].reverse_geo_code_count}</td>
                </tr>
                <tr>
                  <td>Geocode</td>
                  <td>{results[0].geo_code_count}</td>
                </tr>
                <tr>
                  <td>Nearby</td>
                  <td>{results[0].nearby_count}</td>
                </tr>
                <tr>
                  <td>Distance</td>
                  <td>{results[0].distance_count}</td>
                </tr>
                <tr>
                  <td>Rupantor</td>
                  <td>{results[0].rupantor_batchgeo_count}</td>
                </tr>
                </Fragment>
                </table>
            )
          ) : (
            <tr>
              <td>No Api key in use</td>
              <td>0</td>
            </tr>
          )}
          
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