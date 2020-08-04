import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  return (
    <div className='dashboard container'>
      <header>
        <FontAwesomeIcon icon='bars' size='lg' />
        <h4>Account</h4>
      </header>
      <div className='analytics'>
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
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
