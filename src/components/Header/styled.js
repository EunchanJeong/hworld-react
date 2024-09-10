import styled from 'styled-components';

export const WhiteBox = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Container = styled.div`
  width: 80vw;
  height: 15vh;
  position: fixed;
  z-index: 10;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  top: 5vh;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10vw;
  background-color: white;
`;

export const LogoWrapper = styled.div`
  width: 20vh;
  height: 20vh;
  background-color: white;
  position: absolute;
  top: 30%;
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
  width: 20vw;
  height: 10vh;
  padding-left: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  width: 15vw;
  padding-right: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
