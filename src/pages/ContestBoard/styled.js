import styled from 'styled-components';

/**
 * 콘테스트 게시판 페이지 styled components
 * @author 정은찬
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	정은찬        최초 생성
 * </pre>
 */

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  height: 10vh;
  margin: 15px 0 20px 0;
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px;
  margin-top: 20px;
  justify-items: center;
  align-items: center;
`;

export const PostListAwardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  justify-items: center;
  align-items: center;
`;

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

export const PageNumber = styled.span`
  cursor: pointer;
  margin: 0 20px 0 20px;
  font-size: 25px;
  font-weight: ${(props) => (props.active ? 'bold' : 'medium')};
  color: ${(props) => (props.active ? 'black' : '#A9A9A9')};
  &:hover {
    color: #4caf50;
  }
`;

export const DropdownWrapper = styled.div`
  align-items: center;
`;

export const Dropdown = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;
