import React from 'react';
import CustomFooter from '../Footer';
import CustomHeader from '../Header';
import { Container, ContentContainer, CustomContents } from './styled';

/**
 * 공통 레이아웃 컴포넌트
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

const CommonLayout = ({ children }) => {
  return (
    <Container>
      <CustomHeader />
      <ContentContainer>
        <CustomContents>{children}</CustomContents>
      </ContentContainer>
      <CustomFooter />
    </Container>
  );
};

export default CommonLayout;
