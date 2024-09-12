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
  PostListContainer,
  PaginationContainer,
  PaginationImageButton,
  PageButton,
} from './styled';

import { useState } from 'react';
import { useQuery } from 'react-query';

import Comment from '../../../assets/images/comment_icon.svg';
import HeartFull from '../../../assets/images/heart-full-icon.svg';
import Text from '../../../components/Text';
import MyPageAPI from '../../../apis/Member/MyPageAPI';
import Spinner from '../../../components/Spinner';
import backButton from '../../../assets/images/back-button-icon.svg';
import nextButton from '../../../assets/images/next-button-icon.svg';

const fetchMemberPost = async (orderBy, page, size) => {
  const response = await MyPageAPI.getMemberPost(orderBy, page, size);
  return response.data;
};

const Post = ({ post }) => (
  <PostContainer>
    <CoordinationImage src={post.imageUrl} alt="코디 이미지" />
    <Content>
      <RecommendSection>
        <RecommendButton>
          <HeartIcon src={HeartFull} alt="하트 아이콘" />
        </RecommendButton>
        <Text theme="content">{post.recommendCount}</Text>
      </RecommendSection>
      <CommentSection>
        <CommentIcon src={Comment} alt="댓글 아이콘" />
        <Text theme="content">{post.replyCount}</Text>
      </CommentSection>
    </Content>
  </PostContainer>
);

const Menu1 = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const [page, setPage] = useState(1);
  const size = 4;

  const {
    data: { data: postList = [], totalCount = 0 } = {},
    isLoading,
    isError,
  } = useQuery(['memberPost', orderBy, page, size], () => fetchMemberPost(orderBy, page, size), {
    keepPreviousData: false,
  });

  const totalPages = Math.ceil(totalCount / size);

  const handleButtonClick = (order) => {
    setOrderBy(order);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <Layout>
      <LayoutHeader>
        <SortButtonLayout>
          <SortButton isactive={orderBy === 'latest'} onClick={() => handleButtonClick('latest')}>
            최신순
          </SortButton>
          <SortButton isactive={orderBy === 'recommend'} onClick={() => handleButtonClick('recommend')}>
            추천순
          </SortButton>
        </SortButtonLayout>
        <SelectWinnerButton>수상작만 보기</SelectWinnerButton>
      </LayoutHeader>
      <PostListContainer>
        {postList.length ? (
          postList.map((post) => <Post key={post.postId} post={post} />)
        ) : (
          <div>게시글이 없습니다.</div>
        )}
      </PostListContainer>
      <PaginationContainer>
        <PaginationImageButton
          src={backButton}
          alt="이전"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton key={index + 1} isactive={page === index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </PageButton>
        ))}
        <PaginationImageButton
          src={nextButton}
          alt="다음"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        />
      </PaginationContainer>
    </Layout>
  );
};

export default Menu1;
