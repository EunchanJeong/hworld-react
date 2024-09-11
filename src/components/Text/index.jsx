import React from 'react';
import { StyledText } from './styled';

const Text = ({ theme, children, width }) => {
  return (
    <StyledText theme={theme} width={width}>
      {children}
    </StyledText>
  );
};

export default Text;
