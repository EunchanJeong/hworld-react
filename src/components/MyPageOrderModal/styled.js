import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 60vw;
  height: 80vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden; /* 스크롤을 자식에게 넘김 */
`;

export const ModalScrollView = styled.div`
  width: 100%;
  max-height: calc(80vh - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: white;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  width: 95%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1vh;
`;

export const MainText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const SubText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 20px;
  font-weight: medium;
  color: #636363;
`;

export const NavyText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 20px;
  font-weight: bold;
  color: #284180;
  margin-bottom: 1vh;
`;

export const MemberInfo = styled.div`
  width: 95%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1vh;
`;

export const OrderDetail = styled.div`
  width: 95%;
  height: wrap-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2vh;
`;

export const TitleText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 26px;
  font-weight: bold;
  color: black;
  margin-top: 2vh;
`;

export const OrderItemDetail = styled.div`
  width: 100%;
  height: 17vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2vh;
`;

export const OrderItemImage = styled.img`
  width: 15vh;
  height: 15vh;
  border: 1px solid #c7c7c7;
`;

export const OrderItemInfo = styled.div`
  width: 30vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 1vw;
  margin-bottom: 1vh;
  gap: 1vh;
`;

export const OrderItemShopInfo = styled.div`
  width: 30vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const OrderItemShopImage = styled.img`
  width: 5vh;
  height: 5vh;
  border: 1px solid black;
  margin-right: 1vw;
`;

export const OrderItemPrice = styled.div`
  width: 30vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 1vw;
`;

export const PaymentDetail = styled.div`
  width: 95%;
  height: 23vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5vh;
`;

export const PaymentInfo = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.img`
  width: 2vw;
  height: 2vw;
  margin-bottom: 3vh;
  cursor: pointer;
`;

export const HorizonLine = styled.div`
  background-color: #ededed;
  width: 97%;
  min-height: 0.5vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;
