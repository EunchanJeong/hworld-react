import React from 'react';

import {
  Layout,
  OrderContainer,
  LeftInfo,
  DescriptionItem,
  DescriptionLabel,
  DescriptionText,
  RightInfo,
  DetailText,
  OrderListContainer,
  PaginationContainer,
  PaginationImageButton,
  PageButton,
} from './styled';

import { useState } from 'react';
import { useQuery } from 'react-query';

import Text from '../../../components/Text';
import MyPageAPI from '../../../apis/Member/MyPageAPI';
import Spinner from '../../../components/Spinner';
import MyPageOrderModal from '../../../components/MyPageOrderModal';
import backButton from '../../../assets/images/back-button-icon.svg';
import nextButton from '../../../assets/images/next-button-icon.svg';

/**
 * 마이페이지 내 구매 내역 조회 페이지
 * @author 김지현
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	김지현        최초 생성
 * </pre>
 */

const fetchMemberOrder = async (page, size) => {
  const response = await MyPageAPI.getMemberOrder(page, size);
  return response.data;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

const Order = ({ order }) => {
  const parts = order.orderName.split('외');
  const hasSeparator = parts.length > 1;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedOrder, setClickedOrder] = useState(null);

  const handleClick = (orderId) => {
    setClickedOrder(orderId);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setClickedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <OrderContainer isOrderClicked={clickedOrder === order.orderId}>
      <LeftInfo>
        <Text theme="navytext2">{formatDate(order.approvedAt)}</Text>
        {hasSeparator ? (
          <DescriptionItem>
            <DescriptionLabel>{parts[0].trim()}</DescriptionLabel>
            <DescriptionText>외</DescriptionText>
            <DescriptionText>{parts[1].trim()}</DescriptionText>
          </DescriptionItem>
        ) : (
          <DescriptionItem>
            <DescriptionLabel>{order.orderName.trim()}</DescriptionLabel>
          </DescriptionItem>
        )}
      </LeftInfo>
      <RightInfo>
        <DetailText onClick={() => handleClick(order.orderId)}>상세 내역</DetailText>
        {isModalOpen && <MyPageOrderModal orderId={order.orderId} onClose={handleClose} />}
        <Text theme="content">{order.totalAmount.toLocaleString()}원</Text>
      </RightInfo>
    </OrderContainer>
  );
};

const Menu4 = () => {
  const [page, setPage] = useState(1);
  const size = 4;

  const {
    data: { data: orderList = [], totalCount = 0 } = {},
    isLoading,
    isError,
  } = useQuery(['memberOrder', page, size], () => fetchMemberOrder(page, size), {
    keepPreviousData: false,
  });

  const totalPages = Math.ceil(totalCount / size);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const getPageRange = (currentPage, totalPages) => {
    const maxButtons = 5;
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  const pageButtons = getPageRange(page, totalPages);

  return (
    <Layout>
      <OrderListContainer>
        {orderList.length ? (
          orderList.map((order) => <Order key={order.orderId} order={order} />)
        ) : (
          <div>주문 내역이 없습니다.</div>
        )}
      </OrderListContainer>
      <PaginationContainer>
        <PaginationImageButton
          src={backButton}
          alt="이전"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        />
        {pageButtons.map((btnPage) => (
          <PageButton key={btnPage} isactive={page === btnPage} onClick={() => handlePageChange(btnPage)}>
            {btnPage}
          </PageButton>
        ))}
        <PaginationImageButton
          src={nextButton}
          alt="다음"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        />
      </PaginationContainer>
    </Layout>
  );
};

export default Menu4;
