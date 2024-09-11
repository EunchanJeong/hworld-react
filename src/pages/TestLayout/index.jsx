import React from 'react';
import CommonLayout from '../../components/Layout';

import Text from '../../components/Text';
import Button from '../../components/Button';

const TestLayout = () => {
  return (
    <CommonLayout>
      <Text theme="title">Title</Text>
      <Text theme="content">Content</Text>
      <Text theme="subtext">SubText</Text>
      <Text theme="graytext">GrayText</Text>
      <Button>버튼</Button>
      <br></br>
      <br></br>
      <Button>텍스트가 길어지면 버튼도 길어져요</Button>
      <br></br>
      <br></br>
      <Button fontSize="24px">텍스트 크기 조정 가능, 기본은 20px / 이건 24px</Button>
    </CommonLayout>
  );
};

export default TestLayout;
