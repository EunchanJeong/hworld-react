import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: 10px;
  border: 1px solid green;
  width: 100%;
`;

export const ItemImage = styled.img`
  width: 12vw;
  height: 12vw;
  object-fit: cover;
  border: 0.3px solid black;
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
  font-size: 12px;
  color: #666;
`;

export const ItemName = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const OptionText = styled.p`
  font-size: 12px;
  color: #999;
`;

// export const HorizontalLine = styled.hr`
//   margin-top: 10px;
//   border: 1px solid #eee;
// `;
