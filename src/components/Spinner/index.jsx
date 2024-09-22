import React from 'react';

import { SpinnerWrapper } from './styled';

/**
 * 스피너 컴포넌트
 * @author 김지현
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	김지현        최초 생성
 * </pre>
 */

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div className="spinner"></div>
    </SpinnerWrapper>
  );
};

export default Spinner;
