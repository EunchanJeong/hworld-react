import React from 'react';
import {
  ItemContainer,
  ItemImage,
  ShopName,
  ItemName,
  OptionText,
  HorizontalLine,
  ShopImage,
  ShopDiv,
  CategoryName,
  ContentContainer,
  DescriptionContainer,
} from './styled';
import { DescriptionItem } from '../../pages/MyPageContent/Menu3/styled';

const ContestItem = ({ item }) => {
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
      <CategoryName>{getCategoryName(item.categoryId)}</CategoryName> {/* 카테고리 이름 */}
      <ContentContainer>
        <ItemImage src={item.itemImageUrl} alt={item.itemName} /> {/* 상품 이미지 */}
        <DescriptionContainer>
          <ShopDiv>
            <ShopImage src={item.shopImageUrl} alt={item.itemName} /> {/* 상품 이미지 */}
            <ShopName>{item.shopName}</ShopName> {/* 상점 이름 */}
          </ShopDiv>
          <ItemName>{item.itemName}</ItemName> {/* 상품 이름 */}
          <OptionText>옵션: {item.itemOption || '기본 옵션'}</OptionText> {/* 옵션 이름 */}
        </DescriptionContainer>
      </ContentContainer>
      <HorizontalLine />
    </ItemContainer>
  );
};

export default ContestItem;
