import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDMwMmFlMGMxNzY3YTQxMDNhZTFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDA2MTMwMCwiZXhwIjoxNjYwMzIwNTAwfQ.cIJ442wYMADUgch0v-fEq0tRMkuYT36clx9QlxmVZoU';

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: TOKEN}
})