import React from 'react';
import { ItemContainer, ItemImage, ShopName, ItemName, OptionText, HorizontalLine, ShopImage, ShopDiv } from './styled';

const Item = ({ item }) => {
  const getCategoryName = (categoryId) => {
    switch (categoryId) {
      case 1:
        return '모자';
      case 2:
        return '목걸이';
      case 3:
        return '안경';
      case 4:
        return '가방';
      default:
        return '기타';
    }
  };

  return (
    <ItemContainer>
      <p>{getCategoryName(item.categoryId)}</p> {/* 카테고리 이름 */}
      <ItemImage src={item.itemImageUrl} alt={item.itemName} /> {/* 상품 이미지 */}
      <ShopDiv>
        <ShopImage src={item.shopImageUrl} alt={item.itemName} /> {/* 상품 이미지 */}
        <ShopName>{item.shopName}</ShopName> {/* 상점 이름 */}
      </ShopDiv>
      <ItemName>{item.itemName}</ItemName> {/* 상품 이름 */}
      <OptionText>옵션: {item.optionName || '기본 옵션'}</OptionText> {/* 옵션 이름 */}
      {/* <HorizontalLine /> 수평선 */}
    </ItemContainer>
  );
};

export default Item;
