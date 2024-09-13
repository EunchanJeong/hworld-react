import React, { useState } from 'react';
import {
  ChangeCount,
  CheckButton,
  Container,
  CountContainer,
  DeleteContainer,
  HorizonLine,
  Image,
  ItemCount,
  ItemImageWrapper,
  ItemInfoContainer,
  PriceContainer,
  PriceText,
  ShopImageWrapper,
  ShopInfoContainer,
} from './styled';
import white_check from '../../assets/images/white_check.svg';
import gray_check from '../../assets/images/gray_check.svg';
import Text from '../Text';
import black_x from '../../assets/images/black_x.svg';
import { DeleteCartItemAPI } from '../../apis/Cart/CartAPI';

/**
 * 장바구니 상품 컴포넌트
 * @author 조영욱
 * @since 2024.09.12
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.12  	조영욱        최초 생성
 * </pre>
 */

const CartItem = ({ cart, onDelete, onItemCountChange, onCheckChange }) => {
  // 체크 상태
  const [isChecked, setIsChecked] = useState(true);
  // 아이템 개수 상태
  const [itemCount, setItemCount] = useState(cart?.itemCount || 1);

  // 클릭 시 체크 상태 토글
  const handleCheck = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    console.log(newCheckedState);
    onCheckChange(cart.cartId, newCheckedState); // Cart로 전달
  };

  // 아이템 개수 감소
  const decreaseCount = () => {
    const newCount = Math.max(1, itemCount - 1); // 최소 1
    setItemCount(newCount);
    onItemCountChange(cart.cartId, newCount); // 부모 컴포넌트로 전달
  };

  // 아이템 개수 증가
  const increaseCount = () => {
    const newCount = Math.min(99, itemCount + 1); // 최대 99
    setItemCount(newCount);
    onItemCountChange(cart.cartId, newCount); // 부모 컴포넌트로 전달
  };

  // 아이템 삭제
  const handleDelete = async () => {
    await DeleteCartItemAPI(cart.cartId);
    onDelete(cart.cartId); // 성공하면 부모 컴포넌트에 삭제된 cartId 전달
  };

  return (
    <>
      <Container>
        <CheckButton
          onClick={handleCheck}
          style={{
            backgroundColor: isChecked ? '#284180' : 'white',
          }}
        >
          <Image src={isChecked ? white_check : gray_check} />
        </CheckButton>
        <ItemImageWrapper>
          <Image src={'https://oasis-hworld.s3.ap-northeast-2.amazonaws.com/PradaBag1.jpg'} />
        </ItemImageWrapper>
        <ItemInfoContainer>
          <Text theme="content">{cart?.itemName}</Text>
          <Text theme="graytext">옵션: {cart?.itemOption}</Text>
        </ItemInfoContainer>

        <ShopImageWrapper>
          <Image src={'https://oasis-hworld.s3.ap-northeast-2.amazonaws.com/PradaShopLogo.png'} />
        </ShopImageWrapper>
        <ShopInfoContainer>
          <Text theme="content">{cart?.shopName}</Text>
        </ShopInfoContainer>
        <PriceContainer>
          <PriceText>{cart?.subtotalPrice.toLocaleString()}원</PriceText>
          <CountContainer>
            <ChangeCount onClick={decreaseCount}>-</ChangeCount>
            <ItemCount>{itemCount}</ItemCount>
            <ChangeCount onClick={increaseCount}>+</ChangeCount>
          </CountContainer>
        </PriceContainer>
        <DeleteContainer onClick={handleDelete}>
          <Image src={black_x} />
        </DeleteContainer>
        <HorizonLine />
      </Container>
    </>
  );
};

export default CartItem;
