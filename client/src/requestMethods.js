import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDMwMmFlMGMxNzY3YTQxMDNhZTFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDg1MDc0NSwiZXhwIjoxNjYxMTA5OTQ1fQ.fMgqJG3Wv1ZIMkqomi4qAT4dHjLQ5FP482_6HTFnfac';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});
