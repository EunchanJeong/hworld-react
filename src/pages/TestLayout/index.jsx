import React from 'react';
import CommonLayout from '../../components/Layout';

import Text from '../../components/Text';

const TestLayout = () => {
  return (
    <CommonLayout>
      <Text theme="title">Title</Text>
      <Text theme="content">Content</Text>
      <Text theme="subtext">SubText</Text>
      <Text theme="graytext">GrayText</Text>
    </CommonLayout>
  );
};

export default TestLayout;
