import {
  LOGIN_USER,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
} from '../actions/types';

const initialState = {
  data: localStorage.getItem('token'),
  isAuthenticated: false,
  error: null,
  loading: true,
  user: null,
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
    case REGISTER_SUCCESS:
    case LOGIN_USER:
      console.log('TOKEN FOUND', action.payload);
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
        loading: false,
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
      };
    default:
      return state;
  }
}
