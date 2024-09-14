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
  width: 55vw;
  height: 80vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  overflow: scroll;
  position: relative;
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
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 2vw;
  height: 2vw;
  margin-bottom: 3vh;
  cursor: pointer;
`;

export const MainText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const MainText2 = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 22px;
  font-weight: bold;
  color: #284180;
`;

export const SubText = styled.div`
  width: wrap-content;
  height: wrap-content;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemImage = styled.img`
  width: auto;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const RightHeader = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 2vw;
`;

export const ItemInfo = styled.div`
  width: 100%;
  height: wrap-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1vh;
`;

export const ShopInfo = styled.div`
  width: 100%;
  height: wrap-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1vw;
`;

export const ShopImage = styled.img`
  width: auto;
  height: 5vh;
`;

export const CartContainer = styled.div`
  width: 85%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 20vw;
  height: 70%;
`;

export const DropdownButton = styled.button`
  width: 20vw;
  height: 100%;
  border: 1px solid #a5a5a5;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownButtonText = styled.div`
  font-size: 16px;
  font-weight: medium;
  color: black;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  width: 100%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const DropdownListItem = styled.li`
  padding: 10px;
  font-size: 16px;
  font-weight: medium;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const StyledButton = styled.button`
  border-radius: 50px;
  background-color: #284180;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    cursor: pointer;
  }
`;

export const HorizonLine = styled.div`
  background-color: #ededed;
  width: 100%;
  min-height: 0.5vh;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

export const ItemDetailView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ItemDetailImage = styled.img`
  width: 100%;
  height: auto;
`;
