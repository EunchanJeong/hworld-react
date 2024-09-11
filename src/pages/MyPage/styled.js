import styled from 'styled-components';

export const MyInfoLayout = styled.div`
  width: 80vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const MyInfoBox = styled.div`
  width: 23%;
  height: 20vh;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  overflow: hidden;
`;

export const MyInfoBoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;
  background-color: #284180;
  align-items: center;
  justify-content: flex-start;
`;

export const MemberImage = styled.img`
  margin-left: 5%;
  margin-right: 5%;
`;

export const MyInfoBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: flex-start;
  justify-content: center;
  padding-left: 5%;
  gap: 15%;
`;

export const CustomButton = styled.button`
  display: flex;
  width: 14%;
  height: 20vh;
  border-radius: 50%;
  border: 5px solid #284180;
  background-color: ${({ isMenuClicked }) => (isMenuClicked ? '#284180' : 'white')};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.5%;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuImage = styled.img`
  width: ${(props) => props.width || '90%'};
  height: ${(props) => props.height || '90%'};
`;

export const MenuImageLayout = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  align-items: center;
  justify-content: center;
`;

export const StyledText1 = styled.div`
  color: ${({ isClicked }) => (isClicked ? 'white' : '#284180')};
  font-weight: bold;
  font-size: 20px;
`;

export const StyledText2 = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const ContentWrapper = styled.div`
  border: 1px solid red;
  margin-top: 10vh;
`;

export const MenuContent = ({ content }) => {
  return <ContentWrapper>{content}</ContentWrapper>;
};
