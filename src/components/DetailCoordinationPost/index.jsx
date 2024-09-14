import React, { useState } from 'react';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';
import {
  PostContainer,
  CoordinationImage,
  Content,
  CommentSection,
  RecommendHeart,
  HeartIcon,
  RecommendSection,
} from './styled';
import HeartEmpty from '../../assets/images/heart-empty-icon.svg';
import HeartFull from '../../assets/images/heart-full-icon.svg';
import Text from '../../components/Text';
import RecommendButton from '../../components/RecommendButton';

/**
 * 게시글 상세보기용 코디 카드 컴포넌트
 * @author 정은찬
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	정은찬        최초 생성
 * </pre>
 */

const DetailCoordinationPost = ({ post }) => {
  const [isRecommended, setIsRecommended] = useState(post.isRecommended);
  const [recommendCount, setRecommendCount] = useState(post.recommendCount);

  // 하트 버튼 클릭 시 API 호출 및 추천수 업데이트
  const handleRecommend = async (e) => {
    e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되지 않도록 설정
    try {
      const newRecommendState = !isRecommended;
      setIsRecommended(newRecommendState);
      setRecommendCount((prevCount) => (newRecommendState ? prevCount + 1 : prevCount - 1));

      if (newRecommendState === false) {
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
          <RecommendHeart>
            <HeartIcon src={isRecommended ? HeartFull : HeartEmpty} alt="하트 아이콘" />
          </RecommendHeart>
          <Text theme="content">{recommendCount}</Text>
        </RecommendSection>

        <CommentSection>
          {/* 버튼 클릭 시 부모의 onClick 이벤트가 실행되지 않도록 stopPropagation 추가 */}
          <RecommendButton fontSize="20px" onClick={handleRecommend}>
            추천하기
          </RecommendButton>
        </CommentSection>
      </Content>
    </PostContainer>
  );
};

export default DetailCoordinationPost;
