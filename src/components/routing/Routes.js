import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// component imports
import Dashboard from '../dashboard/Dashboard';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
