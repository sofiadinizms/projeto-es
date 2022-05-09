/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import base64 from 'react-native-base64';
import axios from 'axios';

const login = (username: string, password:string) => axios.post('http://159.65.188.149/auth/login', {}, {
  headers: {
    Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
  },
});

const print = (username: string, password: string) => {
  try {
    console.log('Basic', base64.encode(`${username}:${password}`));
  } catch (err) {
    console.log('Ops');
  }
};

export default {
  login,
  print,
};
