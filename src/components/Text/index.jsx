import React from 'react';
import { StyledText } from './styled';

/**
 * 텍스트 컴포넌트
 * @author 김지현
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	김지현        최초 생성
 * </pre>
 */

const Text = ({ theme, children, width }) => {
  return (
    <StyledText theme={theme} width={width}>
      {children}
    </StyledText>
  );
};

export default Text;
