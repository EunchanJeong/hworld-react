import React, { useState } from 'react';
import { axiosInstance } from '../../apis';
import {
  PostContainer,
  CoordinationImage,
  Content,
  RecommendButton,
  CommentSection,
  RecommendSection,
  CommentIcon,
  HeartIcon,
} from './styled';
import Comment from '../../assets/images/comment_icon.svg';
import HeartEmpty from '../../assets/images/heart-empty-icon.svg';
import HeartFull from '../../assets/images/heart-full-icon.svg';
import Text from '../../components/Text';

const CoordinationPost = ({ post }) => {
  const [isRecommended, setIsRecommended] = useState(post.isRecommended);
  const [recommendCount, setRecommendCount] = useState(post.recommendCount);

  // 하트 버튼 클릭 시 API 호출 및 추천수 업데이트
  const handleRecommend = async () => {
    try {
      const newRecommendState = !isRecommended;
      setIsRecommended(newRecommendState);

      setRecommendCount((prevCount) => (newRecommendState ? prevCount + 1 : prevCount - 1));

      if (newRecommendState == false) {
        const response = await axiosInstance.delete(`/contest/recommend/${post.postId}`);
        console.log(response);
      } else {
        const response = await axiosInstance.post(`/contest/recommend/${post.postId}`);
        console.log(response);
      }
    } catch (error) {
      console.error('추천 처리 중 오류 발생:', error);
    }
  };

  return (
    <PostContainer>
      <CoordinationImage src={post.imageUrl} alt="코디 이미지" />
      <Content>
        <RecommendSection>
          <RecommendButton onClick={handleRecommend}>
            <HeartIcon src={isRecommended ? HeartFull : HeartEmpty} alt="하트 아이콘" />
          </RecommendButton>
          <Text theme="content">{recommendCount}</Text>
        </RecommendSection>

        <CommentSection>
          <CommentIcon src={Comment} alt="댓글 아이콘" />
          <Text theme="content">{post.replyCount}</Text>
        </CommentSection>
      </Content>
    </PostContainer>
  );
};

export default CoordinationPost;
