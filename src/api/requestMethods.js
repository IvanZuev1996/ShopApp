/* eslint-disable no-undef */
import axios from 'axios';

export let BASE_URL;

if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'https://shop-app-server.vercel.app';
} else {
    BASE_URL = 'http://localhost:5000/api';
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = (userToken) => axios.create({
    baseURL: BASE_URL,
    headers: { token: userToken },
});
