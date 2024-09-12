import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * 헤더 styled components
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

export const WhiteBox = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const LogoWrapper = styled.div`
  width: 45vh;
  height: 20vh;
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
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 88%;
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
  top: 15%;
  left: 87%;
  transform: translate(-50%, -50%);
`;
