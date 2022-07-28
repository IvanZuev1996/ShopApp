import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDMwMmFlMGMxNzY3YTQxMDNhZTFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODQyNzI1MywiZXhwIjoxNjU4Njg2NDUzfQ.0ND0aeyYD9H9guKjJzPLNiI6-gWwbj_BMQ30xqC2_1k';

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: TOKEN}
})