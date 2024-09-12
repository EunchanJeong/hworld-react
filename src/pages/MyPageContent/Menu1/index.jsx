import React from 'react';

import {
  Layout,
  LayoutHeader,
  SortButton,
  SortButtonLayout,
  SelectWinnerButton,
  PostContainer,
  CoordinationImage,
  Content,
  RecommendButton,
  CommentSection,
  RecommendSection,
  CommentIcon,
  HeartIcon,
} from './styled';

import { useEffect, useState } from 'react';

import Comment from '../../../assets/images/comment_icon.svg';
import HeartFull from '../../../assets/images/heart-full-icon.svg';
import Text from '../../../components/Text';

const Menu1 = () => {
  const [activeButton, setActiveButton] = useState('latest');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <Layout>
      <LayoutHeader>
        <SortButtonLayout>
          <SortButton isactive={activeButton === 'latest'} onClick={() => handleButtonClick('latest')}>
            최신순
          </SortButton>
          <SortButton isactive={activeButton === 'recommend'} onClick={() => handleButtonClick('recommend')}>
            추천순
          </SortButton>
        </SortButtonLayout>
        <SelectWinnerButton>수상작만 보기</SelectWinnerButton>
      </LayoutHeader>
      <PostContainer>
        <CoordinationImage src={HeartFull} alt="코디 이미지" />
        <Content>
          <RecommendSection>
            <RecommendButton>
              <HeartIcon src={HeartFull} alt="하트 아이콘" />
            </RecommendButton>
            <Text theme="content">10</Text>
          </RecommendSection>

          <CommentSection>
            <CommentIcon src={Comment} alt="댓글 아이콘" />
            <Text theme="content">10</Text>
          </CommentSection>
        </Content>
      </PostContainer>
    </Layout>
  );
};

export default Menu1;
