import React from 'react';
import { StyledButton } from './styled';

const Button = ({ onClick, children, disabled, type = 'button', fontSize }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} fontSize={fontSize}>
      {children}
    </StyledButton>
  );
};

export default Button;
