import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    const currentToken = `Bearer ${token}`;
    axios.defaults.headers.common['Authorization'] = currentToken;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
