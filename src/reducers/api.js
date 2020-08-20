import { GET_PACKAGES_SUCCESS, GET_PACKAGES_FAIL } from '../actions/types';

const initialState = {
  packages: null,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGES_SUCCESS:
      return {
        ...state,
        packages: action.payload.packages,
        loading: false,
      };
    default:
      return state;
  }
}
