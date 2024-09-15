import React from 'react';
import { NavGroup, Image, TopNavGroup, LogoWrapper, WhiteBox, NavMenu, NavLink } from './styled';
import { Link } from 'react-router-dom';
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
 * </pre>
 */

const Header = () => {
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
        <NavLink to="/log-in">
          <NavMenu>LOG-IN</NavMenu>
        </NavLink>
        <NavLink to="/sign-up">
          <NavMenu>SIGN-UP</NavMenu>
        </NavLink>
      </TopNavGroup>
    </WhiteBox>
  );
};

export default Header;
