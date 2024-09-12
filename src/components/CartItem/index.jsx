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

const CartItem = ({ cart }) => {
  // 체크 상태를 위한 useState 훅
  const [isChecked, setIsChecked] = useState(true);

  // 클릭 시 상태 토글
  const handleCheck = () => {
    setIsChecked((prev) => !prev);
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
            <ChangeCount>-</ChangeCount>
            <ItemCount>{cart?.itemCount}</ItemCount>
            <ChangeCount>+</ChangeCount>
          </CountContainer>
        </PriceContainer>
        <DeleteContainer>
          <Image src={black_x} />
        </DeleteContainer>
        <HorizonLine />
      </Container>
    </>
  );
};

export default CartItem;
