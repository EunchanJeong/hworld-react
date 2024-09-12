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

const NoticeSummary = ({ type, noticeList }) => {
  return (
    <>
      <NoticeSummaryContainer>
        <NoticeTitleContainer>
          <Title>{type}</Title>
          <Link to={`/notice?category=${type}`}>
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
