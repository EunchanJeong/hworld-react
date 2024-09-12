import { axiosInstance } from '../../apis';

const GetContestPostListAPI = (contestStatus, activeTab) => {
  return axiosInstance.get('/contest/posts', {
    params: { status: contestStatus, sortBy: activeTab },
  });
};

export { GetContestPostListAPI };
