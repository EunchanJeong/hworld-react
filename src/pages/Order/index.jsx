import React, { useState } from 'react';
import CommonLayout from '../../components/Layout';
import BreadCrumb from '../../components/BreadCrumb';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import { useLocation } from 'react-router-dom';
import { GetCartAPI } from '../../apis/Cart/CartAPI';
import { GetDeliveryAddressAPI } from '../../apis/Order/OrderAPI';
import MyPageAPI from '../../apis/Member/MyPageAPI';
import OrderItem from '../../components/OrderItem';
import {
  ContentContainer,
  DeliveryAddressChangeButton,
  DeliveryAddressContainer,
  DeliveryAddressContentContainer,
  DeliveryAddressRequestTextarea,
  DeliveryAddressTitle,
  DeliveryAddressTitleContainer,
  ItemGuideContainer,
  ItemGuiedTitle,
  OrderContainer,
  PayButton,
  PointContainer,
  PointGuiedContainer,
  PointGuiedContent,
  PointGuiedTitle,
  PointUsageTextArea,
  PriceGuiedContainer,
  PriceGuiedContent,
  PriceGuiedContentLeft,
  PriceGuiedContentLeftBold,
  PriceGuiedContentRight,
  PriceGuiedContentRightBlue,
  PriceGuiedContentRightBold,
  PriceGuiedTitle,
  RightContainer,
} from './styled';

/**
 * 주문서 페이지
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

const fetchCartList = async () => {
  const response = await GetCartAPI();
  return response.data;
};

const fetchGetDeliveryAddress = async () => {
  const response = await GetDeliveryAddressAPI();
  return response.data;
};

const fetchMemberInfo = async () => {
  const response = await MyPageAPI.getMemberInfo();
  return response.data;
};

const Order = () => {
  const { data: getCartResponse, isLoading, isError } = useQuery('cartList', fetchCartList);

  const {
    data: getDeliveryAddressResponse,
    isLoadingDA,
    isErrorDA,
  } = useQuery('deliveryAddressList', fetchGetDeliveryAddress);

  const { data: getMemberResponse, isLoadingMember, isErrorMember } = useQuery('memberInfo', fetchMemberInfo);

  const currentDeliveryAddress = getDeliveryAddressResponse?.[0] || {
    location: '배송지가 존재하지 않습니다.',
    name: '',
    phone: '',
  };

  const location = useLocation();
  const { checkedItems } = location.state || {};
  const checkedCartIdSet = new Set(checkedItems);

  const [inputValue, setInputValue] = useState('');

  if (isLoading || isLoadingDA || isLoadingMember) {
    return <Spinner />;
  }
  if (isError || isErrorDA || isErrorMember) {
    return <div>오류가 발생했습니다.</div>;
  }

  const totalPrice = getCartResponse.cartList
    .filter((cart) => checkedCartIdSet.has(cart.cartId))
    .reduce((total, cart) => total + cart.subtotalPrice, 0);
  const pointUsage = inputValue ? Number(inputValue) : 0;
  const finalPrice = totalPrice - pointUsage;
  const maxPointUsage = totalPrice * 0.1;
  const memberPoint = Number(getMemberResponse.point);
  // 입력값 처리 함수
  const handlePointUsageChange = (e) => {
    const value = e.target.value;

    // 숫자만 입력
    if (/^\d*$/.test(value)) {
      const numericValue = Number(value);
      const maxPointFinal = Math.min(maxPointUsage, memberPoint);
      // maxPointUsage 제한
      if (numericValue > maxPointFinal) {
        setInputValue(maxPointFinal.toString());
      } else {
        setInputValue(value);
      }
    }
  };
  return (
    <CommonLayout>
      <BreadCrumb title="주문서 "></BreadCrumb>
      <ContentContainer>
        <ItemGuideContainer>
          <ItemGuiedTitle>주문 상품</ItemGuiedTitle>
        </ItemGuideContainer>
        {getCartResponse.cartList
          .filter((cart) => checkedCartIdSet.has(cart.cartId))
          .map((cart) => (
            <OrderItem cart={cart} />
          ))}
        <OrderContainer>
          <DeliveryAddressContainer>
            <DeliveryAddressTitleContainer>
              <DeliveryAddressTitle>배송지</DeliveryAddressTitle>
              <DeliveryAddressChangeButton>배송지 변경</DeliveryAddressChangeButton>
            </DeliveryAddressTitleContainer>
            <DeliveryAddressContentContainer>
              {currentDeliveryAddress.location}
              <br />
              {currentDeliveryAddress.name} | {currentDeliveryAddress.phone}
            </DeliveryAddressContentContainer>
            <DeliveryAddressRequestTextarea placeholder="배송 시 요청사항을 입력해주세요."></DeliveryAddressRequestTextarea>
          </DeliveryAddressContainer>
          <RightContainer>
            <PointContainer>
              <PointGuiedContainer>
                <PointGuiedTitle>보유 포인트 사용</PointGuiedTitle>
                <PointGuiedContent>
                  적용 한도 (10%)
                  <br />
                  보유 포인트 {memberPoint.toLocaleString()}P
                </PointGuiedContent>
              </PointGuiedContainer>
              <PointUsageTextArea
                placeholder="0"
                value={inputValue ? `${inputValue}` : ''}
                maxLength={10}
                onChange={handlePointUsageChange}
              />
            </PointContainer>
            <PriceGuiedContainer>
              <PriceGuiedTitle>결제 금액</PriceGuiedTitle>
              <PriceGuiedContent>
                <PriceGuiedContentLeft>상품 금액</PriceGuiedContentLeft>
                <PriceGuiedContentRight>{totalPrice.toLocaleString()}원</PriceGuiedContentRight>
              </PriceGuiedContent>
              <PriceGuiedContent>
                <PriceGuiedContentLeft>포인트 사용</PriceGuiedContentLeft>
                <PriceGuiedContentRightBlue>-{pointUsage.toLocaleString()}원</PriceGuiedContentRightBlue>
              </PriceGuiedContent>
              <PriceGuiedContent>
                <PriceGuiedContentLeftBold>총 결제 금액</PriceGuiedContentLeftBold>
                <PriceGuiedContentRightBold>{finalPrice.toLocaleString()}원</PriceGuiedContentRightBold>
              </PriceGuiedContent>
            </PriceGuiedContainer>
          </RightContainer>
        </OrderContainer>
        <PayButton>{finalPrice.toLocaleString()}원 결제하기</PayButton>
      </ContentContainer>
    </CommonLayout>
  );
};

export default Order;
