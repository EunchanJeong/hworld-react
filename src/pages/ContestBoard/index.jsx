import React, { useState } from 'react';
import CommonLayout from '../../components/Layout';
import ContestBreadCrumb from '../../components/ContestBreadCrumb';
import Button from '../../components/Button';
import CoordinationPost from '../../components/CoordinationPost'; // 게시글 목록에 사용할 CoordinationPost 컴포넌트
import {
  Container,
  FilterDiv,
  ButtonWrapper,
  PostListContainer,
  PageinationContainer,
  StatusText,
  PaginationImageButton,
  PageNumber,
  DropdownWrapper,
  Dropdown,
} from './styled'; // 스타일 임포트
import { GetContestPostListAPI } from '../../apis/Contest/ContestAPI';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';

import backButton from '../../assets/images/back-button-icon.svg';
import nextButton from '../../assets/images/next-button-icon.svg';

const POSTS_PER_PAGE = 8; // 한 페이지에 8개의 게시글 표시

const ContestBoard = () => {
  const [activeTab, setActiveTab] = useState('latest'); // 정렬 기준 (최신순/추천순)
  const [contestStatus, setContestStatus] = useState('ongoing'); // 콘테스트 상태 (진행중/완료)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedMonth, setSelectedMonth] = useState('2024-08'); // 선택된 월

  // API 호출을 통해 게시글 목록을 가져오는 함수
  const fetchPosts = async () => {
    try {
      console.log(currentPage);
      const response = await GetContestPostListAPI(
        currentPage,
        POSTS_PER_PAGE,
        contestStatus,
        activeTab,
        selectedMonth,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('게시글 목록 가져오기 오류:', error);
    }
  };

  const { data, isLoading, isError } = useQuery(
    ['postList', contestStatus, activeTab, currentPage, selectedMonth], // queryKey로 contestStatus, activeTab, currentPage 사용
    fetchPosts, // 데이터를 가져오는 함수
    {
      keepPreviousData: true, // 페이지 전환 시 이전 데이터를 유지
    },
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  const { postList = [], totalCount = 0 } = data || {}; // 데이터 구조에서 postList와 totalCount 추출

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE); // 전체 페이지 수 계산

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber); // 페이지 번호 클릭 시 현재 페이지 변경
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value); // 선택된 월 상태 업데이트
  };

  return (
    <CommonLayout>
      <ContestBreadCrumb
        title={'코디 대회'}
        contestStatus={contestStatus} // 현재 상태 전달
        onStatusChange={setContestStatus} // 상태 변경 핸들러 전달
      />
      <Container>
        {/* 최신순 추천순 텍스트 */}
        <FilterDiv>
          <StatusText
            active={activeTab === 'latest'} // 최신순 활성화 여부 확인
            onClick={() => setActiveTab('latest')}
          >
            최신순
          </StatusText>
          <StatusText
            active={activeTab === 'recommend'} // 추천순 활성화 여부 확인
            onClick={() => setActiveTab('recommend')}
          >
            추천순
          </StatusText>
        </FilterDiv>

        {/* 참가하기 버튼 또는 월별 드롭다운 */}
        <ButtonWrapper>
          {contestStatus === 'ongoing' ? (
            <Button fontSize="24px">참가하기</Button>
          ) : (
            <DropdownWrapper>
              <Dropdown value={selectedMonth} onChange={handleMonthChange}>
                <option value="2024-08">8월 코디</option>
                <option value="2024-07">7월 코디</option>
                <option value="2024-06">6월 코디</option>
                <option value="2024-05">5월 코디</option>
                <option value="2024-04">4월 코디</option>
                <option value="2024-03">3월 코디</option>
                <option value="2024-02">2월 코디</option>
                <option value="2024-01">1월 코디</option>

                {/* 추가적으로 필요한 월을 추가할 수 있음 */}
              </Dropdown>
            </DropdownWrapper>
          )}
        </ButtonWrapper>
      </Container>

      {/* 게시글 목록 렌더링 */}
      <PostListContainer>
        {postList.map((post) => (
          <CoordinationPost key={post.postId} post={post} />
        ))}
      </PostListContainer>

      {/* 페이지네이션 버튼 */}
      <PageinationContainer>
        <PaginationImageButton
          src={backButton}
          alt="이전"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />

        {/* 페이지 번호 목록 */}
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

export default ContestBoard;
