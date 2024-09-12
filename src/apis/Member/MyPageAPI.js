import { axiosInstance } from '..';

const MyPageAPI = {
  // 회원 정보 가져오기
  getMemberInfo: () => {
    return axiosInstance.get('/members/my-info');
  },
  // 회원 게시글 목록 가져오기
  getMemberPost: (orderBy, page, size) => {
    return axiosInstance.get(`/members/my-posts?orderBy=${orderBy}&page=${page}&size=${size}`);
  },
};
export default MyPageAPI;
