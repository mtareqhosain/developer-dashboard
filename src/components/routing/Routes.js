import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// component imports
import Dashboard from '../dashboard/Dashboard';
import Account from '../account/Account';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Packages from '../packages/Packages';
import MapAnalytics from '../map-vis/MapAnalytics'

import PrivateRoute from './PrivateRoute';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/account' component={Account} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/packages' component={Packages} />
        <PrivateRoute exact path='/map-analytics' component={MapAnalytics} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
