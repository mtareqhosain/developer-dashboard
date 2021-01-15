import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiKey, getAnalytics } from '../../actions/auth';

//filtering
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import qs from 'qs';

//style import from node modules
//import 'react-datepicker/dist/react-datepicker.css';

//style import from local
import {} from '../../styles/react-datepicker.css';

// component imports
import Spinner from '../layout/Spinner';

const BASE_URL = 'https://admin.barikoi.xyz:8095/api/get/usage/date/range';

const Dashboard = ({ isAuthenticated, loading, apiKey, analytics, getApiKey, getAnalytics }) => {
    //initializing dates
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [results, setResult] = useState([]);
    const [isResults, setIsResults] = useState(false);

    useEffect(() => {
        getApiKey();
        getAnalytics();
    }, [getApiKey, getAnalytics]);

    const handleClick = async (e) => {
        if (startDate !== null && endDate !== null) {
            //console.log('api: ', props.api);

            setIsResults(true);

            // formate dates
            format(startDate, 'yyyy-mm-dd');
            format(endDate, 'yyyy-mm-dd');

            // get filtered responses
            axios
                .get(`${BASE_URL}`, {
                    params: {
                        date_from: startDate,
                        api_key: apiKey,
                        date_to: endDate,
                    },
                    paramsSerializer: (params) => {
                        return qs.stringify(params, { arrayFormat: 'repeat' });
                    },
                })
                .then((response) => {
                    setResult(response.data.usage);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return loading ? (
        <Spinner loading={loading} />
    ) : (
        <div className='dashboard container'>
            <div className='analytics wrapper'>
                <div style={{ padding: '10px', display: 'flex' }}>
                    <div style={{ flex: 'auto', alignSelf: 'center' }}>
                        <small>API Usage Table</small>
                    </div>
                    <div style={{ display: 'flex' }}>
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
                        <button
                            className='btn-1 button-space btn-left-corner'
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', alignSelf: 'center' }}
                            title='Get usage count within date interval'
                            onClick={() => handleClick()}
                        >
                            Get Count
                        </button>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>API</th>
                            <th>Usage</th>
                        </tr>
                    </thead>
                    {apiKey ? (
                        analytics && (
                            <tbody>
                                <tr>
                                    <td>Autocomplete</td>
                                    <td>{isResults && results.length > 0 ? results[0].autocomplete_count : analytics[0].autocomplete_count} calls</td>
                                </tr>
                                <tr>
                                    <td>ReverseGeo</td>
                                    <td>{isResults && results.length > 0 ? results[0].reverse_geo_code_count : analytics[0].reverse_geo_code_count} calls</td>
                                </tr>
                                <tr>
                                    <td>Geocode</td>
                                    <td>{isResults && results.length > 0 ? results[0].geo_code_count : analytics[0].geo_code_count} calls</td>
                                </tr>
                                <tr>
                                    <td>Nearby</td>
                                    <td>{isResults && results.length > 0 ? results[0].nearby_count : analytics[0].nearby_count} calls</td>
                                </tr>
                                <tr>
                                    <td>Distance</td>
                                    <td>{isResults && results.length > 0 ? results[0].distance_count : analytics[0].distance_count} calls</td>
                                </tr>
                                <tr>
                                    <td>Rupantor</td>
                                    <td>{isResults && results.length > 0 ? results[0].rupantor_batchgeo_count : analytics[0].rupantor_batchgeo_count} calls</td>
                                </tr>
                            </tbody>
                        )
                    ) : (
                        <tbody>
                            <tr>
                                <td>No Api key in use</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
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
