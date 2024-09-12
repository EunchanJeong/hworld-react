import React from 'react';
import { HorizonLine, TitleDiv, WhiteBox } from './styled';

/**
 * Bread Crumb 컴포넌트
 * @author 조영욱
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	조영욱        최초 생성
 * </pre>
 */

const BreadCrumb = ({ title }) => {
  return (
    <WhiteBox>
      <TitleDiv>{title}</TitleDiv>
      <HorizonLine />
    </WhiteBox>
  );
};

export default BreadCrumb;
