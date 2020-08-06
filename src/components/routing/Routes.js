import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// component imports
import Dashboard from '../dashboard/Dashboard';
import Account from '../account/Account';
import Register from '../auth/Register';
import Login from '../auth/Login';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
