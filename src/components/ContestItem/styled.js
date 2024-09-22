import styled from 'styled-components';

/**
 * 게시글 코디 아이템 styled components
 * @author 정은찬
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	정은찬        최초 생성
 * </pre>
 */

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
  width: 6vw;
  height: 6vw;
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
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding: 0;
  margin: 0 0 0 10px;
`;

export const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const OptionText = styled.p`
  font-size: 16px;
  color: #999;
  margin-top: 0;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

export const CategoryName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 20px;
  background-color: #ededed;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  text-align: center;
  width: 5vw;
  height: 4vh;
  font-size: 16px;
`;
