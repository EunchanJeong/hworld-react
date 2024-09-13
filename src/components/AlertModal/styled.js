import styled from 'styled-components';

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

export const ContentText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 20px;
  font-weight: medium;
  color: black;
  margin-top: 2vh;
`;

export const ButtonLayout = styled.div`
  width: 40%;
  height: wrap-content;
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  border-radius: 50px;
  background-color: ${(props) => (props.buttonType === 'confirm' ? '#284180' : '#CECECE')};
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
  }
`;
