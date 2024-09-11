import React from 'react';
import CustomFooter from '../Footer';
import CustomHeader from '../Header';
import { Container, ContentContainer, CustomContents } from './styled';

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
