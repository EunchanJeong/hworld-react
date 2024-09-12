import styled from 'styled-components';

export const PostContainer = styled.div`
  border-radius: 15px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18vw;
  height: 50vh;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  position: relative; /* 자식 요소의 절대 위치를 설정하기 위해 relative 추가 */
`;

export const CoordinationImage = styled.img`
  width: 100%;
  height: 85%;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
`;

/* 새로운 MedalImage 스타일링 추가 */
export const MedalImage = styled.img`
  position: absolute; /* 절대 위치를 사용하여 부모(PostContainer) 안에서 배치 */
  top: 10px; /* 상단에서 10px 떨어진 위치 */
  right: 10px; /* 우측에서 10px 떨어진 위치 */
  width: 4vw; /* 원하는 크기로 조정 */
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.4vh;
  box-sizing: border-box;
  padding-left: 8%;
  padding-right: 8%;
`;

export const RecommendSection = styled.div`
  display: flex;
  width: 3.8vw;
  justify-content: space-between;
  align-items: center;
`;

export const RecommendButton = styled.button`
  display: inline-flex;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 45%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;

export const HeartIcon = styled.img`
  display: block;
  width: 2.3vw;
  height: auto;
  padding: 0;
`;

export const CommentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.8vw;
`;

export const CommentIcon = styled.img`
  display: flex;
  width: 2vw;
  height: auto;
`;
