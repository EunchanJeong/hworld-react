import { axiosInstance } from '..';

/**
 * 공지사항 API Axios API 함수
 * @author 조영욱
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	조영욱        최초 생성
 * </pre>
 */

// 공지사항 목록 조회 API
export const GetNoticeListAPI = (page, amount, category) => {
  return axiosInstance.get(`/notices?page=${page}&amount=${amount}&category=${category}`);
};

// 공지사항 상세 조회 API
export const GetNoticeDetailAPI = (noticeId) => {
  return axiosInstance.get(`/notices/${noticeId}`);
};
