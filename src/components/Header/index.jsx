import React from 'react';
import { NavGroup, Image, TopNavGroup, LogoWrapper, WhiteBox, NavMenu, NavLink } from './styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

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
        <NavLink to="/shopping">
          <NavMenu>SHOPPING</NavMenu>
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
