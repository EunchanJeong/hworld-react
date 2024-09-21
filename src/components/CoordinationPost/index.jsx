import React, { useState } from 'react';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';
import {
  PostContainer,
  CoordinationImage,
  Content,
  RecommendButton,
  CommentSection,
  RecommendSection,
  CommentIcon,
  HeartIcon,
  Title,
} from './styled';
import Comment from '../../assets/images/comment_icon.svg';
import HeartEmpty from '../../assets/images/heart-empty-icon.svg';
import HeartFull from '../../assets/images/heart-full-icon.svg';
import Text from '../../components/Text';

/**
 * 코디 카드 컴포넌트
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

const CoordinationPost = ({ post }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = () => {
    navigate(`/contest/${post.postId}`); // postId를 포함한 경로로 이동
  };
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
      // 로그인 안 돼있을 시 로그인 페이지로 이동
      if (error.response?.status === 403) {
        navigate('/log-in');
      }
    }
  };

  return (
    <PostContainer onClick={handleClick}>
      {' '}
      {/* PostContainer에 onClick 이벤트 설정 */}
      <Title>
        <Text>{post.title}</Text>
        <Text>{post.nickname}</Text>
      </Title>
      <CoordinationImage src={post.postImageUrl} alt="코디 이미지" />
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
