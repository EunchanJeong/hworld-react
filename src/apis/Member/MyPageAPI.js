import { axiosInstance } from '..';

const MyPageAPI = {
  // 회원 정보 가져오기
  getMemberInfo: () => {
    return axiosInstance.get(`/members/my-info`);
  },
  // 회원 게시글 목록 가져오기
  getMemberPost: (orderBy, page, size) => {
    return axiosInstance.get(`/members/my-posts?orderBy=${orderBy}&page=${page}&size=${size}`);
  },
  // 회원 코디 목록 가져오기
  getMemberCoordination: () => {
    return axiosInstance.get(`/members/my-coordinations`);
  },
  // 회원 코디에서 사용한 아이템 목록 가져오기
  getMemberCoordinationItem: (coordinationId) => {
    return axiosInstance.get(`/members/my-coordinations/${coordinationId}`);
  },
};
export default MyPageAPI;
