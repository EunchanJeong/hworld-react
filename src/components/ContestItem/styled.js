import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 10px;
  width: 39.2vw;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ItemImage = styled.img`
  width: 12vw;
  height: 12vw;
  object-fit: cover;
  border: 0.3px solid black;
  margin-right: 10px;
`;

export const ShopDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ShopImage = styled.img`
  width: 2vw;
  height: 2vw;
  object-fit: cover;
  border: 0.3px solid black;
`;

export const ShopName = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 0;
  margin: 0 0 0 10px;
`;

export const ItemName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const OptionText = styled.p`
  font-size: 18px;
  color: #999;
  margin-top: 0;
`;

export const HorizontalLine = styled.hr`
  width: 100%; /* 수평선이 부모 컨테이너의 전체 너비를 차지하도록 설정 */
  border: none; /* 기본 border 제거 */
  border-top: 1px solid #eee; /* 상단에만 선을 표시 */
  margin: 10px 0; /* 수평선 위아래 간격을 조정 */
`;

export const CategoryName = styled.p`
  display: flex; /* Flexbox로 변경 */
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  padding: 0;
  border-radius: 20px;
  background-color: #ededed;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  font-size: 14px; /* 텍스트 크기 조정 */
  font-weight: bold;
  text-align: center;
  width: 7vw;
  height: 5vh;
`;
