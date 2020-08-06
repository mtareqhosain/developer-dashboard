import { LOGIN_USER, LOGIN_FAIL } from '../actions/types';

const initialState = {
  data: localStorage.getItem('token'),
  isAuthenticated: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log('TOKEN FOUND', action.payload);
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
        openModal: false,
      };

    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        data: null,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
