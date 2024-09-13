import { axiosInstance } from '..';

/**
 * 주문 API Axios API 함수
 * @author 조영욱
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	조영욱        최초 생성
 * </pre>
 */

// 배송지 목록 조회 API
export const GetDeliveryAddressAPI = () => {
  return axiosInstance.get(`/delivery-addresses`);
};
