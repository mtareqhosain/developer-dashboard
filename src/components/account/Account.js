import React, { Fragment } from 'react';

const Account = () => {
  return (
    <div className='account container'>
      <h2>Account Overview</h2>
      <div className='account-cards'>
        <div className='card-1'>
          <h3>API Panel</h3>
          <p>Active Api Key: 1</p>
          <p>Current Plan: Pay as you go</p>
          <p>Active Api Key: MTc0OTpBVjZNOFo2MzFJ</p>
          <button className='btn-1'>API</button>
        </div>
        <div className='card-1'>
          <h3>Profile</h3>
          <p>User: maruf_m1</p>
          <p>Email: maruf.ahmed@northsouth.edu</p>
          <p>Contact: 01681851089</p>
          <button className='btn-1'>Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
