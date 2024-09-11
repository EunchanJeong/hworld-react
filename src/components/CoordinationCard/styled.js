import styled from 'styled-components';

// 카드 스타일 정의
export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  text-align: center;
  margin-bottom: 16px;
`;

// 이미지 스타일 정의
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// 정보 섹션 스타일 정의
export const Info = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 추천 버튼 스타일 정의
export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

// 추천 수 스타일 정의
export const Likes = styled.span`
  margin-left: 8px;
  font-weight: bold;
`;

// 댓글 수 스타일 정의
export const Comments = styled.span`
  margin-left: auto;
  color: #777;
`;