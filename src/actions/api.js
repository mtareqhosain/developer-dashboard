import axios from 'axios';

import {
  GET_PACKAGES_SUCCESS,
  GET_PACKAGES_FAIL,
  RESET_EMAIL_SUCCESS,
  RESET_EMAIL_FAIL,
} from './types';

const BASE_URL = 'http://admin.barikoi.xyz:8095/api';

export const getAllPackages = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/get/all/packages`);

    dispatch({
      type: GET_PACKAGES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PACKAGES_FAIL,
    });
  }
};

export const resetEmail = (email) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `${BASE_URL}/update/billing/email/{{?billing_email=${email}`
    );

    dispatch({
      type: RESET_EMAIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RESET_EMAIL_FAIL,
    });
  }
};
