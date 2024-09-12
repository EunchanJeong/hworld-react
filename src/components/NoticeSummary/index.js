import React from 'react';
import {
  GrayPlus,
  NoticeContent,
  NoticeContentContainer,
  NoticeSummaryContainer,
  NoticeTitleContainer,
  Title,
} from './styled';
import gray_plus from '../../assets/images/gray_plus.svg';
import { Link } from 'react-router-dom';

const NoticeSummary = ({ categoryName, noticeList }) => {
  return (
    <>
      <NoticeSummaryContainer>
        <NoticeTitleContainer>
          <Title>{categoryName}</Title>
          <Link to={`/notice?category=${noticeList[0]?.category || 0}`}>
            <GrayPlus>
              <img src={gray_plus} alt="더보기" />
            </GrayPlus>
          </Link>
        </NoticeTitleContainer>
        <NoticeContentContainer>
          {noticeList.slice(0, 3).map((notice, index) => (
            <NoticeContent>{notice.title}</NoticeContent>
          ))}
        </NoticeContentContainer>
      </NoticeSummaryContainer>
    </>
  );
};

export default NoticeSummary;
