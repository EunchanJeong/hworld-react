import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import Spinner from '../../components/Spinner';
import ItemAPI from '../../apis/Item/ItemAPI';

import CloseButtonImg from '../../assets/images/close_button.svg';
import DropDownImg from '../../assets/images/dropdown.svg';

import {
  ModalOverlay,
  ModalContent,
  ModalScrollView,
  CloseButton,
  ModalHeader,
  ItemImage,
  RightHeader,
  ItemInfo,
  ShopInfo,
  ShopImage,
  CartContainer,
  MainText,
  MainText2,
  SubText,
  DropdownContainer,
  DropdownButton,
  DropdownButtonText,
  DropdownList,
  DropdownListItem,
  StyledButton,
  HorizonLine,
  ItemDetailView,
  ItemDetailImage,
} from './styled';

const fetchItemDetail = async (itemId) => {
  const response = await ItemAPI.getItemDetail(itemId);
  console.log(response.data);
  return response.data;
};

const ItemDetailModal = ({ itemId, onClose }) => {
  const {
    data: itemDetail,
    isLoading,
    isError,
  } = useQuery(['itemDetail', itemId], () => fetchItemDetail(itemId), {
    enabled: !!itemId,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('옵션');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton src={CloseButtonImg} onClick={onClose} />
        <ModalScrollView>
          <ModalHeader>
            <ItemImage src={itemDetail.itemImageUrl} alt={itemDetail.itemName}></ItemImage>
            <RightHeader>
              <ItemInfo>
                <ShopInfo>
                  <ShopImage src={itemDetail.shopImageUrl} alt={itemDetail.shopName}></ShopImage>
                  <SubText>{itemDetail.shopName}</SubText>
                </ShopInfo>
                <MainText>{itemDetail.itemName}</MainText>
                <MainText2>{itemDetail.price.toLocaleString()}원</MainText2>
              </ItemInfo>
              <CartContainer>
                <DropdownContainer>
                  <DropdownButton onClick={toggleDropdown}>
                    <DropdownButtonText>{selectedOption}</DropdownButtonText>
                    <img src={DropDownImg} alt="select"></img>
                  </DropdownButton>
                  {isOpen && (
                    <DropdownList>
                      {itemDetail.itemOptionList.map((option) => (
                        <DropdownListItem
                          key={option.itemOptionId}
                          onClick={() => handleOptionClick(option.itemOption)}
                        >
                          {option.itemOption}
                        </DropdownListItem>
                      ))}
                    </DropdownList>
                  )}
                </DropdownContainer>
                <StyledButton>장바구니 담기</StyledButton>
              </CartContainer>
            </RightHeader>
          </ModalHeader>
          <HorizonLine />
          <ItemDetailView>
            <MainText>상품 상세</MainText>
            <ItemDetailImage src={itemDetail.itemDetailImageUrl} alt={itemDetail.itemName}></ItemDetailImage>
          </ItemDetailView>
        </ModalScrollView>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ItemDetailModal;
