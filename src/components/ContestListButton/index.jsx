import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styled';

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
