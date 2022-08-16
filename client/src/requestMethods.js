import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDMwMmFlMGMxNzY3YTQxMDNhZTFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU3ODkxNCwiZXhwIjoxNjYwODM4MTE0fQ.UsF0cvpWoaim3CWUscewW0M6euyzoaUeItGvgMAzbCo';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});
