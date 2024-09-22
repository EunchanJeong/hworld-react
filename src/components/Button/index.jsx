import React from 'react';
import { StyledButton } from './styled';

/**
 * 버튼 컴포넌트
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

const Button = ({ onClick, children, disabled, type = 'button', fontSize }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} fontSize={fontSize}>
      {children}
    </StyledButton>
  );
};

export default Button;
