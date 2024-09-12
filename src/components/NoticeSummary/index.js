import React from 'react';
import {
  GrayPlus,
  NoticeContent,
  NoticeContentContainer,
  NoticeLink,
  NoticeSummaryContainer,
  NoticeTitleContainer,
  Title,
} from './styled';
import gray_plus from '../../assets/images/gray_plus.svg';

/**
 * 공지사항 요약 컴포넌트
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

const NoticeSummary = ({ categoryName, noticeList }) => {
  return (
    <>
      <NoticeSummaryContainer>
        <NoticeTitleContainer>
          <Title>{categoryName}</Title>
          <NoticeLink to={`/notice?page=1&amount=10&category=${noticeList[0]?.category || 0}`}>
            <GrayPlus>
              <img src={gray_plus} alt="더보기" />
            </GrayPlus>
          </NoticeLink>
        </NoticeTitleContainer>
        <NoticeContentContainer>
          {noticeList.slice(0, 3).map((notice, index) => (
            <NoticeContent>
              <NoticeLink to={`/notice/${notice.noticeId}`}>{notice.title}</NoticeLink>
            </NoticeContent>
          ))}
        </NoticeContentContainer>
      </NoticeSummaryContainer>
    </>
  );
};

export default NoticeSummary;
