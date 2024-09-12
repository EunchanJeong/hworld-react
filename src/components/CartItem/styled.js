import styled from 'styled-components';

/**
 * 헤더 styled components
 * @author 조영욱
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	조영욱        최초 생성
 * </pre>
 */

export const Container = styled.div`
  width: 80vw;
  height: 20vh;
  position: relative;
  margin-top: 2%;
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

export const CheckButton = styled.button`
  background-color: white;
  width: 32px;
  height: 32px;
  background: #284180;
  border: 1px solid #989898;
  margin-left: 1%;

  &:hover {
    cursor: pointer;
  }
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

  &:hover {
    cursor: pointer;
  }
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

  &:hover {
    cursor: pointer;
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
`;

export const PriceText = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const CountContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemCount = styled.div`
  width: 25%;
  aspect-ratio: 1;
  border: 1px solid #989898;
  border-left: 0;
  border-right: 0;
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangeCount = styled.div`
  width: 25%;
  aspect-ratio: 1;
  border: 1px solid #989898;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8d8d8d;
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteContainer = styled.div`
  width: 2%;
  aspect-ratio: 1;
  margin-left: 3%;
  display: flex;
  position: absolute;
  right: 1%;
  &:hover {
    cursor: pointer;
  }
`;
