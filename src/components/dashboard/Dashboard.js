import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  return (
    <div className='dashboard container'>
      <div className='analytics wrapper'>
        <small>API Usage Table</small>
        <table>
          <tr>
            <th>API</th>
            <th>Usage</th>
          </tr>
          <tr>
            <td>Autocomplete</td>
            <td>402</td>
          </tr>
          <tr>
            <td>ReverseGeo</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Geocode</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Nearby</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Distance</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Rupantor</td>
            <td>200</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
