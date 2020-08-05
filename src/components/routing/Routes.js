import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// component imports
import Dashboard from '../dashboard/Dashboard';
import Account from '../account/Account';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/account' component={Account} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
