import React, { useEffect } from 'react';
import { NavGroup, Image, TopNavGroup, LogoWrapper, WhiteBox, NavMenu, NavLink } from './styled';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from '../../state';
import logo from '../../assets/images/logo.svg';

/**
 * 헤더 컴포넌트
 * @author 조영욱
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	조영욱        최초 생성
 * 2024.09.16   김지현        로그인 여부에 따라 헤더 변경
 * </pre>
 */

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <WhiteBox>
      <LogoWrapper>
        <Link to="/">
          <Image src={logo} />
        </Link>
      </LogoWrapper>
      <NavGroup>
        <NavLink to="/contest">
          <NavMenu>CONTEST</NavMenu>
        </NavLink>
        <NavLink to="/cart">
          <NavMenu>CART</NavMenu>
        </NavLink>
        <NavLink to="/notice">
          <NavMenu>NOTICE</NavMenu>
        </NavLink>
      </NavGroup>
      <TopNavGroup>
        {isLoggedIn ? (
          <>
            <NavLink
              onClick={() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                setIsLoggedIn(false);
                window.location.reload();
              }}
            >
              <NavMenu>LOG-OUT</NavMenu>
            </NavLink>
            <NavLink to="/mypage">
              <NavMenu>MYPAGE</NavMenu>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/log-in">
              <NavMenu>LOG-IN</NavMenu>
            </NavLink>
            <NavLink to="/sign-up">
              <NavMenu>SIGN-UP</NavMenu>
            </NavLink>
          </>
        )}
      </TopNavGroup>
    </WhiteBox>
  );
};

export default Header;
