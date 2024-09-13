import { axiosInstance } from '../../apis';

/**
 * 콘테스트 API Axios API 함수
 * @author 정은찬
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	정은찬        최초 생성
 * 2024.09.13   정은찬        게시글 상세 조회 API 추가
 * </pre>
 */

// 콘테스트 게시글 목록 조회 API
const GetContestPostListAPI = (currentPage, POSTS_PER_PAGE, contestStatus, activeTab, selectedMonth) => {
  return axiosInstance.get('/contest/posts', {
    params: {
      page: currentPage,
      amount: POSTS_PER_PAGE,
      status: contestStatus,
      sortBy: activeTab,
      month: selectedMonth,
    },
  });
};

// 콘테스트 수상작 조회 API
const GetContestPostAwardListAPI = (selectedMonth) => {
  return axiosInstance.get('/contest/posts/award', {
    params: {
      month: selectedMonth,
    },
  });
};

// 게시글 추천하기 API
const AddRecommendAPI = (postId) => {
  return axiosInstance.post(`/contest/recommend/${postId}`);
};

// 게시글 추천취소하기 API
const RemoveRecommendAPI = (postId) => {
  return axiosInstance.delete(`/contest/recommend/${postId}`);
};

// 게시글 상세 조회 API
const GetPostDetailAPI = (postId) => {
  return axiosInstance.get(`/contest/posts/${postId}`);
};

export { GetContestPostListAPI, GetContestPostAwardListAPI, AddRecommendAPI, RemoveRecommendAPI, GetPostDetailAPI };
