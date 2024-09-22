import styled from 'styled-components';

/**
 * 버튼 styled components
 * @author 김지현
 * @since 2024.09.10
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.10  	김지현        최초 생성
 * </pre>
 */

export const StyledButton = styled.button`
  border-radius: 50px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: ${({ fontSize }) => fontSize || '20px'};
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;

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
