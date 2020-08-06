import axios from 'axios';
import { LOGIN_USER, LOGIN_FAIL } from './types';

export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log('checking form data:', formData);

  try {
    const res = await axios.post(
      'https://admin.barikoi.xyz/v1/auth/login',
      formData,
      config
    );

    console.log('checking res', res.data);

    dispatch({
      type: LOGIN_USER,
      payload: res.data.data,
    });

    //else {
    //   dispatch({
    //     type: LOGIN_FAIL,
    //     payload: res.data.message,
    //   });
    // }
  } catch (err) {
    console.log('error: ', err.response.data);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
