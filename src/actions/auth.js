import axios from 'axios';
import { format } from 'date-fns';

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
const BASE_URL_ANALYTICS = 'https://admin.barikoi.xyz:8095/api/get/usage/date/range';

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

    const { email, password } = formData;

    dispatch(loginUser({ email, password }));
  } catch (err) {
    if (err) {
      const errors = Object.values(err.response.data.message);

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error, 'danger')));
      }
    }
  }
};

export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'X-Requested-With': 'application/json',
    },
  };

  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, formData, config);


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
    
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert(err.response.data.message, 'danger'));
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
      });
    }
  } catch (err) {
    dispatch({
      type: GET_KEY_FAIL,
    });
  }
};

export const generateKey = () => async (dispatch, getState) => {
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
      });
    }
  } catch (err) {
    dispatch({
      type: GET_KEY_FAIL,
    });
  }
};

// export const getAnalytics = apiKey => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get(`${BASE_URL}/developer/analytics`);

//     if (res.data.message === 'Token is Invalid') {
//       dispatch({
//         type: GET_ANALYTICS_FAIL,
//         payload: res.data.message,
//       });
//     } else {
//       dispatch({
//         type: GET_ANALYTICS_SUCCESS,
//         payload: res.data,
//       });
//     }
//   } catch (err) {
//     dispatch({
//       type: GET_ANALYTICS_FAIL,
//     });
//   }
// };

export const getAnalytics = apiKey => async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
      axios.get(`${BASE_URL_ANALYTICS}`, {
        params: {
          date_from: format(new Date(), 'yyyy-MM-dd'),
          api_key: apiKey,
          date_to: format(new Date(), 'yyyy-MM-dd'),
      },
      }).then((res) => {
        dispatch({
          type: GET_ANALYTICS_SUCCESS,
          payload: res.data.usage[0],
        });
      }).catch((err) => {
      // dispatch({
      //   type: GET_ANALYTICS_FAIL,
      // })
  });
  
    //   if (res.data.message === 'Token is Invalid') {
    //     dispatch({
    //       type: GET_ANALYTICS_FAIL,
    //       payload: res.data.message,
    //     });
    //   } else {
    //     dispatch({
    //       type: GET_ANALYTICS_SUCCESS,
    //       payload: res.data,
    //     });
    //   }
    // } catch (err) {
    //   dispatch({
    //     type: GET_ANALYTICS_FAIL,
    //   });
    // }
  };

export const requestNewPassword = (email) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/password/reset`, {'email': email}
    );
    
    dispatch(setAlert(res.data.message, 'success'));
    
  } catch (err) {
    // dispatch({
    //   type: RESET_EMAIL_FAIL,
    // });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

