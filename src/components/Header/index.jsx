import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { loginInfo, loginState } from '../../store/atoms';
import { Button, NavMenu } from '../index';

import { Container, NavGroup, Image, ButtonGroup, LogoWrapper, WhiteBox } from './styled';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';

const Header = ({ theme }) => {
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(loginInfo);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loginUserState);
  }, [loginUserState]);

  const onLogout = () => {
    console.log('로그아웃!');
    axiosInstance
      .post('/member/logout', {})
      .then((response) => {
        console.log(response);
        delete axiosInstance.defaults.headers.common['Authorization'];
        delete axiosInstance.defaults.headers.common['Refresh'];
        setLoginUserState({ isLogin: false });
        setLoginUserInfo({
          memberId: '',
          username: '',
        });
        document.cookie = `auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <WhiteBox>
      <Container>
        <NavGroup login={loginUserState.isLogin}>
          <Link to="/list">Sample1</Link>
          <Link to="/booklist">Sample2</Link>
          <Link to="/notice">Sample3</Link>
        </NavGroup>
        <ButtonGroup>
          {loginUserState.isLogin ? (
            <>
              <Link to="/mypage">
                <Button theme="yellowLoginBtn">마이페이지</Button>
              </Link>
              <Button theme="whiteLoginBtn" onClick={onLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button theme="whiteLoginBtn">로그인</Button>
              </Link>
              <Link to="/signup">
                <Button theme="yellowLoginBtn">회원가입</Button>
              </Link>
            </>
          )}
        </ButtonGroup>
      </Container>
    </WhiteBox>
  );
};

export default Header;
