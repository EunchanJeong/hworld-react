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

export const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
