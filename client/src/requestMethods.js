import axios from 'axios';

const BASE_URL = 'https://shop-app-server.vercel.app';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (userToken) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: { token: userToken },
  });
};
