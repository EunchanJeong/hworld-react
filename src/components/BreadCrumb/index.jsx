import React from 'react';
import { HorizonLine, TitleDiv, WhiteBox } from './styled';

const BreadCrumb = ({ title }) => {
  return (
    <WhiteBox>
      <TitleDiv>{title}</TitleDiv>
      <HorizonLine />
    </WhiteBox>
  );
};

export default BreadCrumb;
