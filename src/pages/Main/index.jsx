import React from 'react';
import { Sample } from './styled';
import Header from '../../components/Header';
import BreadCrumb from '../../components/BreadCrumb';

const Main = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="메인페이지" />
      <Sample>This is Sample</Sample>
    </>
  );
};

export default Main;
