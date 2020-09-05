import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import api from './api';

export default combineReducers({
  auth,
  alert,
  api,
});
