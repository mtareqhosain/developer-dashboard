import {
  GET_PACKAGES_SUCCESS,
  GET_PACKAGES_FAIL,
  GET_PACKAGE_SUCCESS,
  GET_PACKAGE_FAIL,
} from '../actions/types';

const initialState = {
  packages: null,
  currentPackage: null,
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
    case GET_PACKAGE_SUCCESS:
      return {
        ...state,
        currentPackage: action.payload.user.deal_information.name,
        loading: false,
      };
    default:
      return state;
  }
}
