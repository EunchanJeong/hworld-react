import { axiosInstance } from '..';

/**
 * 장바구니 API Axios API 함수
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

// 장바구니 목록 조회 API
export const GetCartAPI = () => {
  return axiosInstance.get(`/carts`);
};
