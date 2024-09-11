import React from 'react';
import CoordinationPost from '../../components/CoordinationPost';

const TestCoordinationPost = () => {
    // 더미 데이터
    const testPost = {
      postId: 4,
      imageUrl: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/515/B005159997.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false', // 코디 이미지 URL (대체 이미지)
      recommendCount: 1, // 추천 수
      replyCount: 2, // 댓글 수
      isRecommended: true // 추천 여부
    };
  
    return (
      <div>
        <h1>코디 콘테스트 게시글 테스트</h1>
        {/* CoordinationPost 컴포넌트에 더미 데이터 전달 */}
        <CoordinationPost post={testPost} />
      </div>
    );
  };
  
  export default TestCoordinationPost;