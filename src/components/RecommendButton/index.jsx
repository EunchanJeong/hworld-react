import React from 'react';
import { StyledButton } from './styled';

/**
 * 추천하기 버튼 컴포넌트
 * @author 정은찬
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	정은찬        최초 생성
 * </pre>
 */

const RecommendButton = ({ onClick, children, disabled, type = 'button', fontSize }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} fontSize={fontSize}>
      {children}
    </StyledButton>
  );
};

export default RecommendButton;
