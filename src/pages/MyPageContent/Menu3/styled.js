import styled from 'styled-components';

export const Layout = styled.div`
  width: 80vw;
  height: wrap-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PointHistoryListContainer = styled.div`
  width: 80vw;
  height: wrap-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const PointHistoryContainer = styled.div`
  width: 77vw;
  height: 18vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
  border: 1px solid #ededed;
`;

export const LeftInfo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2vw;
`;

export const RightInfo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 2vw;
`;

export const TypeImage = styled.img`
  width: 10vh;
  height: 10vh;
  margin-right: 2vw;
`;

export const TypeText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ type }) => (type === '사용' ? '#ff5050' : '#50bb47')};
  margin-top: 1vh;
  margin-left: 1vw;
`;

export const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionLabel = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 0.5vw;
`;

export const DescriptionText = styled.span`
  font-weight: normal;
  font-size: 20px;
  margin-left: 0.5vw;
`;

export const PaginationContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

export const PaginationImageButton = styled.img`
  width: wrap-content;
  height: wrap-content;
  cursor: pointer;
`;

export const PageButton = styled.span`
  cursor: pointer;
  margin: 0 5px;
  font-size: 25px;
  font-weight: ${(props) => (props.isactive ? 700 : 300)};
  color: black;
`;
