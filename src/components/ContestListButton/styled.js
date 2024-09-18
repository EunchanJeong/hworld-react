import styled from 'styled-components';

/**
 * 콘테스트 목록가기 버튼 styled components
 * @author 정은찬
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	정은찬        최초 생성
 * </pre>
 */

export const StyledButton = styled.button`
  border-radius: 50px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: ${({ fontSize }) => fontSize || '20px'};
  font-weight: bold;
  padding: 0.5px 7px 0.5px 7px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;
  height: 5vh;
  width: 6vw;

  &:active,
  &:focus {
    transform: scale(0.95);
  }

  &:hover {
    background-color: rgba(40, 65, 128, 0.9);
    transform: scale(1);
    cursor: pointer;
  }
`;
