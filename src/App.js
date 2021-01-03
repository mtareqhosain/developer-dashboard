import React, { useEffect } from 'react';
import './styles/App.scss';
import { Route, Switch } from 'react-router-dom';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faChevronRight,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

// component imports
import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

library.add(faTimes, faBars, faChevronRight, faEye, faEyeSlash);

function App() {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Alert />
        <Switch>
          <Route component={Routes} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
