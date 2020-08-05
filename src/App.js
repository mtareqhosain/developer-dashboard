import React from 'react';
import './styles/App.scss';
import { Route, Switch } from 'react-router-dom';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

// component imports
import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';

library.add(faTimes, faBars);

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route component={Routes} />
      </Switch>
    </div>
  );
}

export default App;
