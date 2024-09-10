import React from 'react';
import CustomFooter from '../Footer';
import { Container, ContentContainer, CustomContents } from './styled';

const CommonLayout = ({ children }) => {
  return (
    <Container>
      <ContentContainer>
        <CustomContents>{children}</CustomContents>
      </ContentContainer>
      <CustomFooter />
    </Container>
  );
};

export default CommonLayout;
