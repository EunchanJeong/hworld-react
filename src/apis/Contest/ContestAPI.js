import { axiosInstance } from '../../apis';

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

export { GetContestPostListAPI };
