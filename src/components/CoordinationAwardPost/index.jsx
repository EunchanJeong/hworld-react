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
  MedalImage,
} from './styled';
import Comment from '../../assets/images/comment_icon.svg';
import HeartEmpty from '../../assets/images/heart-empty-icon.svg';
import HeartFull from '../../assets/images/heart-full-icon.svg';
import Text from '../../components/Text';

import GoldMedalIcon from '../../assets/images/gold-medal.svg';
import SilverMedalIcon from '../../assets/images/silver-medal.svg';
import BronzeMedalIcon from '../../assets/images/bronze-medal.svg';

import { AddRecommendAPI, RemoveRecommendAPI } from '../../apis/Contest/ContestAPI';

/**
 * 게시글 수상작 카드 컴포넌트
 * @author 정은찬
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	정은찬        최초 생성
 * </pre>
 */

const CoordinationAwardPost = ({ post, MedalIcon }) => {
  const [isRecommended, setIsRecommended] = useState(post.isRecommended);
  const [recommendCount, setRecommendCount] = useState(post.recommendCount);

  // 하트 버튼 클릭 시 API 호출 및 추천수 업데이트
  const handleRecommend = async () => {
    try {
      const newRecommendState = !isRecommended;
      setIsRecommended(newRecommendState);

      setRecommendCount((prevCount) => (newRecommendState ? prevCount + 1 : prevCount - 1));

      if (newRecommendState == false) {
        const response = await RemoveRecommendAPI(post.postId);
        console.log(response);
      } else {
        const response = await AddRecommendAPI(post.postId);
        console.log(response);
      }
    } catch (error) {
      console.error('추천 처리 중 오류 발생:', error);
    }
  };

  // rank에 따라 메달 아이콘 설정
  const getMedalIcon = (rank) => {
    if (rank === 1) return GoldMedalIcon;
    if (rank === 2) return SilverMedalIcon;
    if (rank === 3) return BronzeMedalIcon;
    return null; // 랭크가 1, 2, 3이 아닌 경우 메달을 표시하지 않음
  };

  return (
    <PostContainer>
      <CoordinationImage src={post.imageUrl} alt="코디 이미지" />
      <MedalImage src={getMedalIcon(post.rank)} alt="메달 아이콘" /> {/* 메달 이미지 추가 */}
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

export default CoordinationAwardPost;
