import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 20px 0;
`;

export const FilterDiv = styled.div`
  font-size: 18px;
  color: #333;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StatusText = styled.p`
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'medium')};
  color: ${(props) => (props.active ? 'black' : '#A9A9A9')};
  margin: 5px;
  font-size: 20px;
  display: inline-block;
`;

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개씩 배치 */
  grid-gap: 20px; /* 게시글 간의 간격 */
  margin-top: 20px;
`;

// 이미지 버튼 스타일 정의
export const PaginationImageButton = styled.img`
  width: 0.7vw;
  height: auto;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }
`;

export const PageinationContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

// 페이지 번호 스타일 정의
export const PageNumber = styled.span`
  cursor: pointer;
  margin: 0 5px;
  font-size: 25px;
  font-weight: ${(props) => (props.active ? 'bold' : 'medium')};
  color: ${(props) => (props.active ? 'black' : '#A9A9A9')};
  &:hover {
    color: #4caf50;
  }
`;
