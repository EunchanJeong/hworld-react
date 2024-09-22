import styled from 'styled-components';

/**
 * 게임 다운로드 모달 styled components
 * @author 조영욱
 * @since 2024.09.22
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.22  	조영욱        최초 생성
 * </pre>
 */

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  width: 35vw;
  height: 25vh;
  background: white;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 26px;
  font-weight: bold;
  color: #284180;
`;

export const ButtonLayout = styled.div`
  width: 80%;
  height: wrap-content;
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  border-radius: 50px;
  background-color: #999999;
  border: none;
  padding: 0px 15px;

  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
  }
  width: 100%;
  justify-content: left;
  align-items: center;
  height: 6vh;
  overflow: hidden;
`;

export const StyledButtonText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const LogoImageBig = styled.img`
  width: 35%;
  height: auto;
`;

export const LogoImage = styled.img`
  width: 25%;
  height: auto;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: wrap-content;
  height: wrap-content;
  width: 40%;
  height: 6vh;
`;
