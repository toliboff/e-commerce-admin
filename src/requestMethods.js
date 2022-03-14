import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjExYTM3MWZiNzIxYWZmOGRlNzU5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzI2MDE2MiwiZXhwIjoxNjQ3NTE5MzYyfQ.7PfEqze7tQ9SfAO70KZfL11Sc83fhmO0fK8Uw4eMeqo';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
