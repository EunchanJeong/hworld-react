import React from 'react';

const index = ({ post, onLike }) => {
  console.log("Post Data: ", post); // post 데이터 확인

  if (!post) {
    return <div>Loading...</div>; // post가 없을 경우
  }

  return (
    <div className="post">
      <img src={post.imageUrl} alt="Post" className="post-image" />
      <div className="post-info">
        <button onClick={() => onLike(post.postId, !post.isRecommended)}>
          {post.isRecommended ? '❤️' : '🤍'} {/* 하트가 채워졌는지 여부 표시 */}
        </button>
        <span>{post.recommendCount} Likes</span>
        <span>{post.replyCount} Comments</span>
      </div>
    </div>
  );
};

export default index;