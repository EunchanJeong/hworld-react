import styled from 'styled-components';

/**
 * 마이페이지 styled components
 * @author 김지현
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	김지현        최초 생성
 * </pre>
 */

export const MyInfoLayout = styled.div`
  width: 80vw;
  height: 25vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  gap: 2vw;
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
  padding-left: 10%;
  gap: 15%;
`;

export const CustomButton = styled.button`
  display: flex;
  width: 16%;
  height: 23vh;
  border-radius: 50%;
  border: 5px solid #284180;
  background-color: ${({ ismenuclicked }) => (ismenuclicked ? '#284180' : 'white')};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1%;
  margin-left: 0.2vw;

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
  margin-bottom: 0.5vh;
`;

export const StyledText1 = styled.div`
  color: ${({ isclicked }) => (isclicked ? 'white' : '#284180')};
  font-weight: bold;
  font-size: 20px;
`;

export const StyledText2 = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;
