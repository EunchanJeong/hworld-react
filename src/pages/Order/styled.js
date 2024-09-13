import styled from 'styled-components';

/**
 * 주문서 페이지 styled components
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

export const ContentContainer = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ItemGuideContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5%;
  margin-left: 0.5%;
  box-sizing: border-box;
`;

export const OrderContainer = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  margin-top: 5%;
  justify-content: space-between;
`;

export const ItemGuiedTitle = styled.div`
  width: auto;
  height: auto;
  font-size: 26px;
  font-weight: bold;
  display: flex;
`;

export const DeliveryAddressContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DeliveryAddressTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const DeliveryAddressTitle = styled.div`
  width: 50%;
  height: 100%;
  left: 0;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const DeliveryAddressChangeButton = styled.button`
  width: 103px;
  height: 36px;
  right: 10%;
  font-size: 20px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #afafaf;
  border-radius: 5px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const DeliveryAddressContentContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const DeliveryAddressRequestTextarea = styled.textarea`
  width: 100%;
  height: 44%;
  border: 1px solid #afafaf;
  border-radius: 5px;
  font-size: 20px;
  padding: 3%;
  box-sizing: border-box;
  resize: none;
`;

export const RightContainer = styled.div`
  width: 45%;
  height: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-right: 5%;
  box-sizing: border-box;
`;

export const PointContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const PointGuiedContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  position: relative;
`;

export const PointGuiedTitle = styled.div`
  width: auto;
  height: 100%;
  font-size: 26px;
  font-weight: bold;
  align-items: center;
  display: flex;
`;

export const PointGuiedContent = styled.div`
  width: auto;
  height: 100%;
  font-size: 18px;
  align-items: center;
  display: flex;
  padding-left: 5%;
  line-height: 1.5;
`;

export const PointUsageTextArea = styled.textarea`
  width: 100%;
  height: 25%;
  background-color: #f8f8f8;
  border: none;
  font-size: 20px;
  color: black;
  box-sizing: border-box;
  resize: none;
  padding-left: 20px;
  padding-top: 12px; /* 글씨를 세로 가운데에 맞추기 위한 padding */
  line-height: 1.5; /* 세로 가운데 정렬 효과 */

  ::placeholder {
    color: black; /* placeholder 색을 검정으로 */
  }
`;

export const PriceGuiedContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const PriceGuiedTitle = styled.div`
  width: auto;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 3%;
`;

export const PriceGuiedContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5%;
`;

export const PriceGuiedContentLeft = styled.div`
  width: auto;
  height: auto;
  font-size: 20px;
`;

export const PriceGuiedContentLeftBold = styled.div`
  width: auto;
  height: auto;
  font-size: 20px;
  font-weight: bold;
`;

export const PriceGuiedContentRight = styled.div`
  width: auto;
  height: auto;
  font-size: 20px;
  padding-right: 5%;
  box-sizing: border-box;
`;

export const PriceGuiedContentRightBlue = styled.div`
  width: auto;
  height: auto;
  font-size: 20px;
  padding-right: 5%;
  box-sizing: border-box;
  color: #284180;
`;

export const PriceGuiedContentRightBold = styled.div`
  width: auto;
  height: auto;
  font-size: 20px;
  padding-right: 5%;
  box-sizing: border-box;
  font-weight: bold;
`;

export const PayButton = styled.button`
  border-radius: 50px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 55px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  margin-top: 4%;
  &:hover {
    background-color: rgba(40, 65, 128, 0.9);
    transform: scale(1);
    cursor: pointer;
  }
`;
