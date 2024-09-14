import React from 'react';

import {
  ModalOverlay,
  ModalContent,
  ModalScrollView,
  HorizonLine,
  ModalHeader,
  MemberInfo,
  OrderDetail,
  PaymentDetail,
  LeftHeader,
  OrderItemDetail,
  OrderItemImage,
  OrderItemInfo,
  OrderItemShopInfo,
  OrderItemShopImage,
  OrderItemPrice,
  PaymentInfo,
  MainText,
  SubText,
  TitleText,
  NavyText,
  CloseButton,
} from './styled';

import { useQuery } from 'react-query';
import MyPageAPI from '../../apis/Member/MyPageAPI';
import Spinner from '../Spinner';
import CloseButtonImg from '../../assets/images/close_button.svg';

const fetchMemberOrderDetail = async (orderId) => {
  const response = await MyPageAPI.getMemberOrderDetail(orderId);
  console.log(response.data);
  return response.data;
};

const MyPageOrderModal = ({ orderId, onClose }) => {
  const {
    data: memberOrderDetail,
    isLoading,
    isError,
  } = useQuery(['memberOrderDetail', orderId], () => fetchMemberOrderDetail(orderId), {
    enabled: !!orderId,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length === 11) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
    }
    return phoneNumber;
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalScrollView>
          <ModalHeader>
            <LeftHeader>
              <MainText>{memberOrderDetail.approvedAt}</MainText>
              <SubText>주문번호 | {orderId}</SubText>
            </LeftHeader>
            <CloseButton src={CloseButtonImg} onClick={onClose} />
          </ModalHeader>
          <HorizonLine />
          <MemberInfo>
            <MainText>{memberOrderDetail.ordererName}</MainText>
            <SubText>{formatPhoneNumber(memberOrderDetail.ordererPhone)}</SubText>
            <SubText>{memberOrderDetail.location}</SubText>
          </MemberInfo>
          <HorizonLine />
          <OrderDetail>
            <TitleText>주문 상품 {memberOrderDetail.totalItemCount}개</TitleText>
            {memberOrderDetail.itemList.map((item, index) => (
              <OrderItemDetail key={index}>
                <OrderItemImage src={item.itemImageUrl} alt={item.itemName} />
                <OrderItemInfo>
                  <OrderItemShopInfo>
                    <OrderItemShopImage src={item.shopImageUrl} alt={item.shopName} />
                    <MainText>{item.shopName}</MainText>
                  </OrderItemShopInfo>
                  <MainText>{item.itemName}</MainText>
                  <SubText>옵션 : {item.itemOption}</SubText>
                </OrderItemInfo>
                <OrderItemPrice>
                  <NavyText>{item.itemCount}개</NavyText>
                  <MainText>{item.itemPrice.toLocaleString()}원</MainText>
                </OrderItemPrice>
              </OrderItemDetail>
            ))}
          </OrderDetail>
          <HorizonLine />
          <PaymentDetail>
            <PaymentInfo>
              <SubText>결제 수단</SubText>
              <SubText>
                {memberOrderDetail.method} - {memberOrderDetail.methodDetail} (
                {memberOrderDetail.installmentsMonth === 0 ? '일시불' : `${memberOrderDetail.installmentsMonth}개월`})
              </SubText>
            </PaymentInfo>
            <PaymentInfo>
              <SubText>상품 금액</SubText>
              <SubText>{memberOrderDetail.priceBeforeDiscount.toLocaleString()}원</SubText>
            </PaymentInfo>
            <PaymentInfo>
              <SubText>포인트 사용</SubText>
              <SubText>-{memberOrderDetail.pointUsage.toLocaleString()}원</SubText>
            </PaymentInfo>
            <PaymentInfo>
              <MainText>결제 금액</MainText>
              <MainText>{memberOrderDetail.totalAmount.toLocaleString()}원</MainText>
            </PaymentInfo>
          </PaymentDetail>
        </ModalScrollView>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MyPageOrderModal;
