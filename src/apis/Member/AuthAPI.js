import { axiosInstance } from '..';

const AuthAPI = {
  // 회원가입
  SignUp: (signUpRequest) => {
    return axiosInstance.post(`/members/sign-up`, signUpRequest);
  },
  // 로그인
  LogIn: (logInRequest) => {
    return axiosInstance.post(`/members/login`, logInRequest);
  },
};
export default AuthAPI;
