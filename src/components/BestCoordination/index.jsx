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
import { useNavigate } from 'react-router-dom';

/**
 * 베스트 코디 컴포넌트
 * @author 조영욱
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	조영욱        최초 생성
 * </pre>
 */

const CoordinationPost = ({ post }) => {
  const navigate = useNavigate();
  const [isRecommended, setIsRecommended] = useState(post.isRecommended);
  const [recommendCount, setRecommendCount] = useState(post.recommendCount);
  const [isDragging, setIsDragging] = useState(false);
  const [mouseDownPos, setMouseDownPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setMouseDownPos({ x: e.clientX, y: e.clientY });
    setIsDragging(false); // 초기화
  };

  const handleMouseUp = (e) => {
    const deltaX = Math.abs(e.clientX - mouseDownPos.x);
    const deltaY = Math.abs(e.clientY - mouseDownPos.y);
    // 일정 거리 이상 마우스가 움직이면 드래그로 간주
    if (deltaX > 5 || deltaY > 5) {
      setIsDragging(true);
    }
  };

  // 하트 버튼 클릭 시 API 호출 및 추천수 업데이트
  const handleRecommend = async () => {
    try {
      const newRecommendState = !isRecommended;
      setIsRecommended(newRecommendState);

      setRecommendCount((prevCount) => (newRecommendState ? prevCount + 1 : prevCount - 1));

      if (newRecommendState == false) {
        await axiosInstance.delete(`/contest/recommend/${post.postId}`);
      } else {
        await axiosInstance.post(`/contest/recommend/${post.postId}`);
      }
    } catch (error) {
      // 로그인 안 돼있을 시 로그인 페이지로 이동
      if (error.response?.status === 403) {
        navigate('/log-in');
      }
    }
  };

  return (
    <PostContainer>
      <CoordinationImage
        src={post.postImageUrl}
        alt="코디 이미지"
        onClick={() => {
          if (!isDragging) {
            navigate(`/contest/${post.postId}`);
          }
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
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
