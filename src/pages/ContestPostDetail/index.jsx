import React, { useState } from 'react';
import ContestDetailBreadCrumb from '../../components/ContestDetailBreadCrumb';
import CommonLayout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import { GetPostDetailAPI } from '../../apis/Contest/ContestAPI';
import {
  PostDetailContainer,
  PostTitle,
  PostMeta,
  HorizontalLine,
  TitleName,
  TitleNumber,
  ContentDiv,
  ItemDiv,
} from './styled';
import DetailCoordinationPost from '../../components/DetailCoordinationPost';
import ContestItem from '../../components/ContestItem'; // Item 컴포넌트 추가

const ContestPostDetail = () => {
  const { postId } = useParams();

  // useState 훅은 항상 컴포넌트 최상단에서 호출
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const fetchPostDetail = async () => {
    try {
      const response = await GetPostDetailAPI(postId);
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error('게시글 상세 조회 오류:', error);
    }
  };

  const { data, isLoading, isError } = useQuery(['postDetail', postId], fetchPostDetail, {
    enabled: !!postId,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  const { title, nickname, createdAt, itemList } = data || {}; // itemList 받아오기

  const post = {
    imageUrl: data.imageUrl,
    isRecommended: data.isRecommended,
    postId: postId,
    recommendCount: data.recommendCount,
    replyCount: data.replyCount,
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY - e.currentTarget.offsetTop);
    setScrollTop(e.currentTarget.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const element = e.currentTarget;
    const y = e.pageY - element.offsetTop;
    const walk = (y - startY) * 1.5; // 드래그 이동 속도
    element.scrollTop = scrollTop - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <CommonLayout>
        <ContestDetailBreadCrumb title="코디 대회" />
        <PostDetailContainer>
          <PostTitle>
            <TitleNumber>
              코디 No.{postId}
              &nbsp;|&nbsp;
            </TitleNumber>
            <TitleName>{title}</TitleName>
          </PostTitle>
          <PostMeta>
            <p>작성자: {nickname}</p>
            <p>작성일: {new Date(createdAt).toLocaleDateString()}</p>
          </PostMeta>
          <HorizontalLine />
        </PostDetailContainer>

        <ContentDiv>
          <div>
            <DetailCoordinationPost key={post.postId} post={post} />
          </div>

          <ItemDiv
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // 마우스가 요소를 벗어날 때 드래그 중지
          >
            {/* itemList를 순회하여 Item 컴포넌트를 렌더링 */}
            {itemList && itemList.length > 0 ? (
              itemList.map((item) => <ContestItem key={item.itemId} item={item} />)
            ) : (
              <p>등록된 아이템이 없습니다.</p>
            )}
          </ItemDiv>
        </ContentDiv>
      </CommonLayout>
    </>
  );
};

export default ContestPostDetail;
