import { axiosInstance } from '..';

const ItemAPI = {
  // 아이템 상세 조회 가져오기
  getItemDetail: (itemId) => {
    return axiosInstance.get(`/shop/item/${itemId}`);
  },
};
export default ItemAPI;
