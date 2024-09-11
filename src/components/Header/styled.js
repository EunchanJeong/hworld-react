import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WhiteBox = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const LogoWrapper = styled.div`
  width: 60vh;
  height: 30vh;
  background-color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NavGroup = styled.div`
  width: 25vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NavMenu = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const TopNavGroup = styled.div`
  width: 14vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 12%;
  left: 90%;
  transform: translate(-50%, -50%);
`;
