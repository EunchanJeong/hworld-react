import React, { useState, useEffect } from 'react';
import CommonLayout from '../../components/Layout';
import BreadCrumb from '../../components/BreadCrumb';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  PageinationContainer,
  PageNumber,
  PaginationImageButton,
  TitleGuide,
} from './styled';
import { GetNoticeListAPI } from '../../apis/Notice/NoticeAPI';
import backButton from '../../assets/images/back-button-icon.svg';
import nextButton from '../../assets/images/next-button-icon.svg';

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

const fetchNoticeList = async (page, amount, type) => {
  const response = await GetNoticeListAPI(page, amount, type);
  return response.data;
};

const NoticeList = () => {
  const AMOUNT_PER_PAGE = 10;
  const navigate = useNavigate(); // useNavigate 훅 사용

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const category = searchParams.get('category');

  const [type, setType] = useState(category ?? 0);
  const [currentPage, setCurrentPage] = useState(page ?? 1); // 현재 페이지

  const handleTypeChange = (e) => {
    const newType = parseInt(e.target.value);
    setType(newType);

    // URL에 쿼리 파라미터를 반영
    navigate(`?page=1&amount=${AMOUNT_PER_PAGE}&category=${newType}`);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);

    // 페이지 번호 변경 시에도 URL 업데이트
    navigate(`?page=${pageNumber}&amount=${AMOUNT_PER_PAGE}&category=${type}`);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery(
    ['noticeList', currentPage, AMOUNT_PER_PAGE, type],
    () => fetchNoticeList(currentPage, AMOUNT_PER_PAGE, type),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  const noticeList = response.noticeList;
  const totalCount = response.totalCount;
  const totalPages = Math.ceil(totalCount / AMOUNT_PER_PAGE);

  return (
    <CommonLayout>
      <BreadCrumb title="공지사항"></BreadCrumb>
      <ContentContainer>
        <DropboxContainer>
          <Dropdown value={type} onChange={handleTypeChange}>
            <option value={0}>전체</option>
            <option value={1}>콘테스트</option>
            <option value={2}>공지</option>
            <option value={3}>이벤트</option>
          </Dropdown>
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

      <PageinationContainer>
        <PaginationImageButton
          src={backButton}
          alt="이전"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PageNumber
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              active={pageNumber === currentPage}
            >
              {pageNumber}
            </PageNumber>
          );
        })}

        <PaginationImageButton
          src={nextButton}
          alt="다음"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </PageinationContainer>
    </CommonLayout>
  );
};

export default NoticeList;
