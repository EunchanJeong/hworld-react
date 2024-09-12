import React from 'react';
import CommonLayout from '../../components/Layout';
import BreadCrumb from '../../components/BreadCrumb';
import CartItem from '../../components/CartItem';
import { useQuery } from 'react-query';
import { GetCartAPI } from '../../apis/Cart/CartAPI';
import Spinner from '../../components/Spinner';
import { ContentContainer, PurchaseButton, PurchaseContainer } from './styled';

const fetchCartList = async () => {
  const response = await GetCartAPI();
  return response.data;
};

const Cart = () => {
  const { data: getCartResponse, isLoading, isError } = useQuery('cartList', fetchCartList);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <CommonLayout>
      <BreadCrumb title="장바구니"></BreadCrumb>
      <ContentContainer>
        {getCartResponse.cartList.map((cart, index) => (
          <CartItem cart={cart} />
        ))}
        <PurchaseContainer>
          총 금액&nbsp;&nbsp;|&nbsp;&nbsp;{getCartResponse.totalPrice.toLocaleString()}원
          <PurchaseButton>구매하기</PurchaseButton>
        </PurchaseContainer>
      </ContentContainer>
    </CommonLayout>
  );
};

export default Cart;
