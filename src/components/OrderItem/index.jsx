import React from 'react';
import {
  Container,
  CountContainer,
  CountText,
  HorizonLine,
  Image,
  ItemImageWrapper,
  ItemInfoContainer,
  PriceContainer,
  PriceText,
  ShopImageWrapper,
  ShopInfoContainer,
} from './styled';
import Text from '../Text';

/**
 * 주문 상품 컴포넌트
 * @author 조영욱
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	조영욱        최초 생성
 * </pre>
 */

const OrderItem = ({ cart }) => {
  return (
    <>
      <Container>
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
        </PriceContainer>
        <CountContainer>
          <CountText>{`${cart?.itemCount}개`}</CountText>
        </CountContainer>
        <HorizonLine />
      </Container>
    </>
  );
};

export default OrderItem;
