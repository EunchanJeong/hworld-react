import React from 'react';

import {
  Layout,
  PointHistoryContainer,
  LeftInfo,
  TypeImage,
  TypeText,
  RightInfo,
  DescriptionItem,
  DescriptionLabel,
  DescriptionText,
  PointHistoryListContainer,
  PaginationContainer,
  PaginationImageButton,
  PageButton,
} from './styled';

import { useState } from 'react';
import { useQuery } from 'react-query';

import Text from '../../../components/Text';
import MyPageAPI from '../../../apis/Member/MyPageAPI';
import Spinner from '../../../components/Spinner';
import backButton from '../../../assets/images/back-button-icon.svg';
import nextButton from '../../../assets/images/next-button-icon.svg';
import Plus from '../../../assets/images/plus.svg';
import Minus from '../../../assets/images/minus.svg';

const fetchMemberPointHistory = async (page, size) => {
  const response = await MyPageAPI.getMemberPointHistory(page, size);
  return response.data;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

const PointHistory = ({ pointHistory }) => {
  const [label, text] = pointHistory.description.split('|').map((part) => part.trim());

  return (
    <PointHistoryContainer>
      <LeftInfo>
        <TypeImage src={pointHistory.type === '사용' ? Minus : Plus} alt="타입"></TypeImage>
        <Text theme="title">{pointHistory.amount.toLocaleString()}P</Text>
        <TypeText type={pointHistory.type}>{pointHistory.type}</TypeText>
      </LeftInfo>
      <RightInfo>
        <Text theme="navytext2">{formatDate(pointHistory.createdAt)}</Text>
        <DescriptionItem>
          <DescriptionLabel>{label}</DescriptionLabel>
          <Text theme="content">|</Text>
          <DescriptionText>{text}</DescriptionText>
        </DescriptionItem>
      </RightInfo>
    </PointHistoryContainer>
  );
};

const Menu3 = () => {
  const [page, setPage] = useState(1);
  const size = 4;

  const {
    data: { data: pointHistoryList = [], totalCount = 0 } = {},
    isLoading,
    isError,
  } = useQuery(['memberPointHistory', page, size], () => fetchMemberPointHistory(page, size), {
    keepPreviousData: false,
  });

  const totalPages = Math.ceil(totalCount / size);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <Layout>
      <PointHistoryListContainer>
        {pointHistoryList.length ? (
          pointHistoryList.map((pointHistory) => (
            <PointHistory key={pointHistory.pointHistoryId} pointHistory={pointHistory} />
          ))
        ) : (
          <div>포인트 사용내역이 없습니다.</div>
        )}
      </PointHistoryListContainer>
      <PaginationContainer>
        <PaginationImageButton
          src={backButton}
          alt="이전"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton key={index + 1} isactive={page === index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
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

export default Menu3;
