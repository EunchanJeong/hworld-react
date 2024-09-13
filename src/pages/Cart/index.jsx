import React, { useState, useEffect } from 'react';
import CommonLayout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import CartItem from '../../components/CartItem';
import { useQuery } from 'react-query';
import { GetCartAPI } from '../../apis/Cart/CartAPI';
import Spinner from '../../components/Spinner';
import { ContentContainer, PurchaseButton, PurchaseContainer } from './styled';
import Text from '../../components/Text';
import { ChangeCartItemCountAPI } from '../../apis/Cart/CartAPI';

/**
 * 장바구니 페이지
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

const fetchCartList = async () => {
  const response = await GetCartAPI();
  return response.data;
};

const Cart = () => {
  const navigate = useNavigate();
  const { data: getCartResponse, isLoading, isError, refetch } = useQuery('cartList', fetchCartList);
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [uncheckedItems, setUncheckedItems] = useState({});

  useEffect(() => {
    if (getCartResponse) {
      setCartList(getCartResponse.cartList);
      setTotalPrice(getCartResponse.totalPrice);
    }
  }, [getCartResponse]);

  const handleDelete = (cartId) => {
    setCartList((prevCartList) => prevCartList.filter((cart) => cart.cartId !== cartId));
  };

  // 아이템 체크 상태 변경 시 호출될 함수
  const handleCheckChange = (cartId, isChecked) => {
    if (isChecked) {
      setUncheckedItems((prevUncheckedItems) => {
        const { [cartId]: _, ...rest } = prevUncheckedItems;
        return rest;
      });
    } else {
      setUncheckedItems((prevUncheckedItems) => ({
        ...prevUncheckedItems,
        [cartId]: true,
      }));
    }
  };

  const handleItemCountChange = async (cartId, newItemCount) => {
    console.log(newItemCount);
    // 먼저 itemCount 변경 API 호출
    const requestBody = {
      cartId: cartId,
      itemCount: newItemCount,
    };

    await ChangeCartItemCountAPI(requestBody);

    // API 호출 후 데이터를 다시 불러옴
    const { data: updatedCartResponse } = await refetch();

    // 받아온 데이터를 통해 장바구니 목록과 총 가격 업데이트
    if (updatedCartResponse) {
      setCartList(updatedCartResponse.cartList);
      setTotalPrice(updatedCartResponse.totalPrice);
    }
  };

  // 구매 버튼 클릭 시 호출되는 함수
  const handlePurchase = () => {
    const checkedItems = cartList.map((cart) => cart.cartId).filter((cartId) => !(cartId in uncheckedItems));
    navigate('/order', { state: { checkedItems } }); // 체크된 아이템만 주문서 페이지로 이동
  };

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
        {cartList.length === 0 ? (
          <Text theme="title">장바구니가 비어있어요!</Text>
        ) : (
          <>
            {cartList.map((cart) => (
              <CartItem
                cart={cart}
                onDelete={handleDelete}
                onItemCountChange={(cartId, newItemCount) => handleItemCountChange(cartId, newItemCount)}
                onCheckChange={handleCheckChange}
              />
            ))}
            <PurchaseContainer>
              총 금액&nbsp;&nbsp;|&nbsp;&nbsp;{totalPrice.toLocaleString()}원
              <PurchaseButton onClick={handlePurchase}>구매하기</PurchaseButton>
            </PurchaseContainer>
          </>
        )}
      </ContentContainer>
    </CommonLayout>
  );
};

export default Cart;
