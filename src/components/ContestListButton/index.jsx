import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styled';

/**
 * 콘테스트 목록가기 버튼 컴포넌트
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

const ContestLsitButton = ({ onClick, children, disabled, type = 'button', fontSize }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contest'); // '/contest' 경로로 이동
  };

  return (
    <StyledButton type={type} onClick={handleClick} disabled={disabled} fontSize={fontSize}>
      {children}
    </StyledButton>
  );
};

export default ContestLsitButton;
