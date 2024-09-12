import { axiosInstance } from '../../apis';

const GetContestPostListAPI = (currentPage, POSTS_PER_PAGE, contestStatus, activeTab) => {
  return axiosInstance.get('/contest/posts', {
    params: {
      page: currentPage,
      amount: POSTS_PER_PAGE,
      status: contestStatus,
      sortBy: activeTab,
    },
  });
};

export { GetContestPostListAPI };
