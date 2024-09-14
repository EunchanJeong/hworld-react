import React, { useState } from 'react';
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
import ItemDetailModal from '../../components/ItemDetailModal';

/**
 * 게시글 코디 아이템 컴포넌트
 * @author 정은찬
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	정은찬        최초 생성
 * </pre>
 */

const ContestItem = ({ item }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
  };

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
        <ItemImage src={item.itemImageUrl} alt={item.itemName} onClick={() => handleItemClick(item.itemId)} />
        {isModalOpen && selectedItemId && <ItemDetailModal itemId={selectedItemId} onClose={handleCloseModal} />}
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
