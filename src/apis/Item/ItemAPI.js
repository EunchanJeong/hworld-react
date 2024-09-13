import { axiosInstance } from '..';

const ItemAPI = {
  // 아이템 상세 조회 가져오기
  getItemDetail: (itemId) => {
    return axiosInstance.get(`/shop/item/${itemId}`);
  },
  // 아이템 장바구니에 담기
  addCart: (cartItemOption) => {
    return axiosInstance.post(`/carts`, cartItemOption);
  },
};
export default ItemAPI;
