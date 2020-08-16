import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

import {
  LOGIN_USER,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  GET_KEY_SUCCESS,
  GET_KEY_FAIL,
  GENERATE_KEY_SUCCESS,
  GET_ANALYTICS_SUCCESS,
  GET_ANALYTICS_FAIL,
  CLEAR_ERRORS,
} from './types';

const BASE_URL = 'https://admin.barikoi.xyz:8090';

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${BASE_URL}/auth/user`);

    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_LOAD_FAIL,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'X-Requested-With': 'application/json',
    },
  };
  try {
    const data = { ...formData, userType: '2' };
    const res = await axios.post(`${BASE_URL}/auth/register`, data, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    console.log('Reg error', err.response.data.message);

    const errors = Object.values(err.response.data.message);
    console.log('Reg errors', errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, 'danger')));
    }
  }
};

export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'X-Requested-With': 'application/json',
    },
  };
  console.log('checking form data:', formData);

  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, formData, config);

    console.log('checking res', res.data);

    if (res && res.data.success === true) {
      dispatch({
        type: LOGIN_USER,
        payload: res.data.data,
      });

      dispatch(loadUser());
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.data.message,
      });

      dispatch(setAlert(res.data.message, 'danger'));
    }
  } catch (err) {
    // console.log('error: ', err.response.data);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const resetPassword = (formData) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.post(`${BASE_URL}/auth/UpdatePass`, formData);

    if (res.data.message === 'Password changed successfully.') {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert(res.data.message, 'success'));
    }
  } catch (err) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
    });
  }
};

export const getApiKey = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${BASE_URL}/auth/business/CurrentActiveKey`);

    if (res.data.current_active_key) {
      dispatch({
        type: GET_KEY_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_KEY_FAIL,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_KEY_FAIL,
    });
  }
};

export const generateKey = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.post(`${BASE_URL}/auth/business/keygen`);

    if (res.data.message === 'Key Generated!') {
      dispatch({
        type: GET_KEY_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_KEY_FAIL,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_KEY_FAIL,
      payload: err.data,
    });
  }
};

export const getAnalytics = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${BASE_URL}/developer/analytics`);

    if (res.data.message === 'Token is Invalid') {
      dispatch({
        type: GET_ANALYTICS_FAIL,
        payload: res.data.message,
      });
    } else {
      dispatch({
        type: GET_ANALYTICS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ANALYTICS_FAIL,
      payload: err.data.message,
    });
  }
};
