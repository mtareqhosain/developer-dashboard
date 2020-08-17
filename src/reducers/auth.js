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
} from '../actions/types';

const initialState = {
  data: localStorage.getItem('token'),
  isAuthenticated: false,
  error: null,
  loading: true,
  user: null,
  message: null,
  apiKey: null,
  apiKeyMessage: null,
  analytics: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };

    case GET_KEY_SUCCESS:
      return {
        ...state,
        apiKeyMessage: action.payload.message,
        apiKey: action.payload.current_active_key,
      };

    case GENERATE_KEY_SUCCESS:
      return {
        ...state,
        apiKeyMessage: action.payload.message,
        apiKey: action.payload.key,
      };

    case GET_ANALYTICS_SUCCESS:
      return {
        ...state,
        analytics: action.payload,
      };

    case GET_KEY_FAIL:
      return {
        ...state,
      };

    case GET_ANALYTICS_FAIL:
      return {
        ...state,
        analytics: null,
      };

    case REGISTER_SUCCESS:
    case LOGIN_USER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case LOGOUT:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case USER_LOAD_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        data: null,
        isAuthenticated: false,
        error: action.payload,
        loading: false,
        user: null,
        message: null,
        apiKey: null,
        apiKeyMessage: null,
        analytics: null,
      };
    default:
      return state;
  }
}
