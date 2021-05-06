import axios from 'axios';
import { setAlert } from '../actions/alert';

import {
  GET_PACKAGES_SUCCESS,
  GET_PACKAGES_FAIL,
  RESET_EMAIL_SUCCESS,
  RESET_EMAIL_FAIL,
  REQUEST_UPGRADE_SUCCESS,
  REQUEST_UPGRADE_FAIL,
  VERIFY_UPGRADE_SUCCESS,
  VERIFY_UPGRADE_FAIL,
  GET_PACKAGE_SUCCESS,
  GET_PACKAGE_FAIL,
} from './types';

const BASE_URL = 'https://admin.barikoi.xyz:8095/api';

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

export const getActivePackage = (apiKey) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/get/business/user/${apiKey}`);

    dispatch({
      type: GET_PACKAGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PACKAGE_FAIL,
    });
  }
};

export const requestUpgrade = (apiKey, id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/request/upgrade/plan/${apiKey}?package_id=${id}`
    );

    if (res.data.message === 'Email sent to the email address') {
      dispatch({
        type: REQUEST_UPGRADE_SUCCESS,
        payload: res.data,
      });
      dispatch(setAlert(res.data.message, 'success'));
    } else {
      dispatch({
        type: REQUEST_UPGRADE_FAIL,
      });
      dispatch(setAlert(res.data.message, 'danger'));
    }
  } catch (err) {
    dispatch({
      type: REQUEST_UPGRADE_FAIL,
    });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

export const verifyUpgrade = (apiKey, data) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/verify/token/${apiKey}`, data);

    if (res.data.message === 'Package Upgraded.') {
      dispatch({
        type: VERIFY_UPGRADE_SUCCESS,
        payload: res.data,
      });

      dispatch(getActivePackage(apiKey));
      dispatch(setAlert(res.data.message, 'success'));
    } else {
      dispatch({
        type: VERIFY_UPGRADE_FAIL,
      });
      dispatch(setAlert(res.data.message, 'danger'));
    }
  } catch (err) {
    dispatch({
      type: VERIFY_UPGRADE_FAIL,
    });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

export const resetEmail = (apiKey, email) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `${BASE_URL}/update/billing/email/${apiKey}?billing_email=${email}`
    );

    if (res.data.message === 'Billing email updated successfully') {
      dispatch({
        type: RESET_EMAIL_SUCCESS,
        payload: res.data,
      });
      dispatch(setAlert(res.data.message, 'success'));
    } else {
      dispatch({
        type: RESET_EMAIL_FAIL,
      });
      dispatch(setAlert(res.data.message, 'danger'));
    }
  } catch (err) {
    dispatch({
      type: RESET_EMAIL_FAIL,
    });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};
