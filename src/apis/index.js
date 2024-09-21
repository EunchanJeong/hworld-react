import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 10000,
  withCredentials: true, // 쿠키를 포함한 요청을 보낼 경우 필요
});

// axios 인스턴스에 인터셉터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // 토큰이 존재하면 요청 헤더에 추가
    if (accessToken) {
      config.headers['auth'] = `${accessToken}`;
    }
    if (refreshToken) {
      config.headers['refresh'] = `${refreshToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
