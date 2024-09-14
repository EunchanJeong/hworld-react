import React, { useState } from 'react';
import CommonLayout from '../../components/Layout';
import BreadCrumb from '../../components/BreadCrumb';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import {
  ContentContainer,
  CustomLink,
  DateGuide,
  DropboxContainer,
  Dropdown,
  GuideContainer,
  HorizonLine,
  HorizonLineGray,
  NoticeDate,
  NoticeListContainer,
  NoticeNumber,
  NoticeSummary,
  NoticeTitle,
  NoticeType,
  NoticeTypeBox,
  NumberGuide,
  TitleGuide,
} from './styled';
import { GetNoticeListAPI } from '../../apis/Notice/NoticeAPI';

/**
 * 공지사항 목록 페이지
 * @author 조영욱
 * @since 2024.09.14
 * @version 1.0
 *
 * <pre>
 * 수정일        	수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.14  	조영욱        최초 생성
 * </pre>
 */

const fetchNoticeList = async (type) => {
  const response = await GetNoticeListAPI(1, 10, type);
  return response.data;
};

const NoticeList = () => {
  const [type, setType] = useState(0);

  const handleTypeChange = (e) => {
    setType(parseInt(e.target.value));
  };

  const {
    data: noticeList,
    isLoading,
    isError,
  } = useQuery(['noticeList', type], () => fetchNoticeList(type), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <CommonLayout>
      <BreadCrumb title="공지사항"></BreadCrumb>
      <ContentContainer>
        <DropboxContainer>
          {/* <DropdownWrapper> */}
          <Dropdown value={type} onChange={handleTypeChange}>
            <option value={0}>전체</option>
            <option value={1}>콘테스트</option>
            <option value={2}>공지</option>
            <option value={3}>이벤트</option>
          </Dropdown>
          {/* </DropdownWrapper> */}
        </DropboxContainer>
        <NoticeListContainer>
          <GuideContainer>
            <NumberGuide>번호</NumberGuide>
            <TitleGuide>제목</TitleGuide>
            <DateGuide>작성날짜</DateGuide>
          </GuideContainer>
          <HorizonLine />

          {noticeList.map((notice, index) => (
            <>
              <NoticeSummary>
                <NoticeNumber>{notice.noticeId}</NoticeNumber>
                <NoticeType>
                  <NoticeTypeBox>{notice.categoryName}</NoticeTypeBox>
                </NoticeType>

                <NoticeTitle>
                  <CustomLink to={`/notice/${notice.noticeId}`}>{notice.title}</CustomLink>
                </NoticeTitle>

                <NoticeDate>{new Date(notice.createdAt + 'Z').toLocaleDateString('sv')}</NoticeDate>
              </NoticeSummary>
              <HorizonLineGray />
            </>
          ))}
        </NoticeListContainer>
      </ContentContainer>
    </CommonLayout>
  );
};

export default NoticeList;
