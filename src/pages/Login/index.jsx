import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { userInfoState, isLoggedInState } from '../../state';
import { useRecoilState } from 'recoil';

import CommonLayout from '../../components/Layout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Text from '../../components/Text';
import Button from '../../components/Button';

import { SignUpLayout, StyledHr, InputLayout, InputDetailLayout, StyledInput, InputButtonLayout } from './styled';

import AuthAPI from '../../apis/Member/AuthAPI';
import { axiosInstance } from '../../apis';

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const handleLoginIdChange = (loginId) => {
    setLoginId(loginId);
    console.log('아이디 입력 -> ' + loginId);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    console.log('패스워드 입력 -> ' + password);
  };

  const onLogInSuccess = (accessToken, refreshToken) => {
    const expiredTime = jwtDecode(accessToken).exp;
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const remainingTime = expiredTime - nowInSeconds;

    // 헤더에 토큰 저장
    axiosInstance.defaults.headers.common['auth'] = `${accessToken}`;
    axiosInstance.defaults.headers.common['refresh'] = `${refreshToken}`;

    // 로컬 스토리지에 토큰 저장
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    console.log('remainingTime: ', remainingTime);
    setTimeout(() => {
      console.log('토큰 생성', refreshToken);
      // onSilentRefresh(refreshToken);
    }, remainingTime * 1000);

    navigate('/');
  };

  const handleLogIn = () => {
    AuthAPI.LogIn({ loginId: loginId, password: password })
      .then((response) => {
        const { success, message } = response.data;
        if (success) {
          console.log(message);

          const authToken = response.headers['auth'];
          const refreshToken = response.headers['refresh'];

          console.log('authToken -> ' + authToken);
          console.log('refreshToken -> ' + refreshToken);

          onLogInSuccess(authToken, refreshToken);

          setUserInfo({
            loginId: loginId,
          });

          setIsLoggedIn(true);
          window.location.reload();

          console.log(isLoggedIn);

          toast.success(message);
        }
      })
      .catch((error) => {
        if (error.response) {
          const { message } = error.response.data;
          console.error(message);
          toast.error(message);
        } else {
          console.error(error);
          toast.error(error);
        }
      });
  };

  return (
    <CommonLayout>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        limit={1}
        style={{ fontSize: '20px', textAlign: 'center' }}
      />
      <SignUpLayout>
        <Text theme="navytext">로그인</Text>
        <StyledHr />
        <InputLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              아이디
            </Text>
            <StyledInput
              type="text"
              placeholder="아이디를 입력하세요"
              value={loginId}
              onChange={(e) => handleLoginIdChange(e.target.value)}
            ></StyledInput>
          </InputDetailLayout>
          <InputDetailLayout>
            <Text theme="content" width="10vw">
              패스워드
            </Text>
            <StyledInput
              type="password"
              placeholder="패스워드를 입력하세요"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            ></StyledInput>
          </InputDetailLayout>
        </InputLayout>
        <InputButtonLayout>
          <Button onClick={() => handleLogIn()}>로그인</Button>
          <br></br>
          <Text theme="content" width="wrap-content">
            계정이 없으신가요? <a href="/sign-up">회원가입</a>
          </Text>
        </InputButtonLayout>
      </SignUpLayout>
    </CommonLayout>
  );
};

export default Login;
