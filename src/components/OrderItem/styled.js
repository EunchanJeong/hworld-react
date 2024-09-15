import styled from 'styled-components';

/**
 * 주문 상품 styled components
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

export const Container = styled.div`
  width: 80vw;
  height: 20vh;
  position: relative;
  margin-top: 1%;
  display: flex;
  align-items: center;
`;

export const HorizonLine = styled.div`
  background-color: #9a9a9a;
  width: 80vw;
  height: 1px;
  position: absolute;
  bottom: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemImageWrapper = styled.div`
  width: 10%;
  aspect-ratio: 1;
  border: 1px solid #989898;
  margin-left: 3%;
  padding: 0px;
  display: flex;
`;

export const ItemInfoContainer = styled.div`
  width: 35%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;

  p {
    margin: 2%;
  }
`;

export const ShopImageWrapper = styled.div`
  width: 4%;
  aspect-ratio: 1;
  border: 1px solid #989898;
  margin-left: 3%;
  display: flex;
`;

export const ShopInfoContainer = styled.div`
  width: 16%;
  height: 50%;
  display: flex;
  align-items: center;

  p {
    margin: 5%;
  }
`;

export const PriceContainer = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const PriceText = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const CountContainer = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CountText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #284180;
`;
