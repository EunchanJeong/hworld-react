import { axiosInstance } from '..';

const MyPageAPI = {
  // 회원 정보 가져오기
  getMemberInfo: () => {
    return axiosInstance.get('/members/my-info');
  },
};
export default MyPageAPI;
