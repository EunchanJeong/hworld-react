import React, { useEffect, useState } from 'react';
import CommonLayout from '../../components/Layout';
import ContestBreadCrumb from '../../components/ContestBreadCrumb';
import Button from '../../components/Button';
import Text from '../../components/Text';
import CoordinationPost from '../../components/CoordinationPost'; // 게시글 목록에 사용할 CoordinationPost 컴포넌트
import CoordinationAwardPost from '../../components/CoordinationAwardPost';
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
  PostListAwardContainer,
} from './styled'; // 스타일 임포트
import { GetContestPostListAPI, GetContestPostAwardListAPI } from '../../apis/Contest/ContestAPI';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';

import backButton from '../../assets/images/back-button-icon.svg';
import nextButton from '../../assets/images/next-button-icon.svg';

const POSTS_PER_PAGE = 8; // 한 페이지에 8개의 게시글 표시

/**
 * 콘테스트 게시판 페이지
 * @author 정은찬
 * @since 2024.09.11
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.11  	정은찬        최초 생성
 * </pre>
 */
const ContestBoard = () => {
  const [postAwardList, setPostAwardList] = useState([]);

  const [activeTab, setActiveTab] = useState('latest'); // 정렬 기준 (최신순/추천순)
  const [contestStatus, setContestStatus] = useState('ongoing'); // 콘테스트 상태 (진행중/완료)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedMonth, setSelectedMonth] = useState('2024-08'); // 선택된 월

  // API 호출을 통해 게시글 목록을 가져오는 함수
  const fetchPosts = async () => {
    try {
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

  // API 호출을 통해 게시글 목록을 가져오는 함수
  const fetchPostAwards = async () => {
    try {
      const response = await GetContestPostAwardListAPI(selectedMonth);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('게시글 목록 가져오기 오류:', error);
    }
  };

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery(
    ['postList', contestStatus, activeTab, currentPage, selectedMonth], // queryKey로 contestStatus, activeTab, currentPage 사용
    fetchPosts, // 데이터를 가져오는 함수
    {
      keepPreviousData: true, // 페이지 전환 시 이전 데이터를 유지
    },
  );

  const {
    data: postAwards,
    isLoading: isLoading2,
    isError: isError2,
  } = useQuery(
    ['postAwardList', selectedMonth], // queryKey로 contestStatus, activeTab, currentPage 사용
    fetchPostAwards, // 데이터를 가져오는 함수
    {
      keepPreviousData: true, // 페이지 전환 시 이전 데이터를 유지
    },
  );

  useEffect(() => {
    // contestStatus가 변경될 때마다 currentPage를 1로 설정
    setCurrentPage(1);
  }, [contestStatus]);

  useEffect(() => {
    setPostAwardList(postAwards);
  }, [postAwards]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  if (isLoading2) {
    return <Spinner />;
  }

  if (isError2) {
    return <div>오류가 발생했습니다.</div>;
  }

  const { postList = [], totalCount = 0 } = posts || {}; // 데이터 구조에서 postList와 totalCount 추출

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE); // 전체 페이지 수 계산

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber); // 페이지 번호 클릭 시 현재 페이지 변경
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value); // 선택된 월 상태 업데이트
    console.log('여기여기', selectedMonth);
  };

  return (
    <CommonLayout>
      <ContestBreadCrumb
        title={'코디 대회'}
        contestStatus={contestStatus} // 현재 상태 전달
        onStatusChange={setContestStatus} // 상태 변경 핸들러 전달
      />

      {contestStatus === 'ongoing' ? (
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
          <ButtonWrapper>
            <Button fontSize="24px">참가하기</Button>
          </ButtonWrapper>
        </Container>
      ) : (
        <>
          <Container>
            {/* 최신순 추천순 텍스트 */}
            <Text theme="content">수상작</Text>

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
                  </Dropdown>
                </DropdownWrapper>
              )}
            </ButtonWrapper>
          </Container>

          {/* 게시글 목록 렌더링 */}
          <PostListAwardContainer>
            {postAwardList.map((post) => (
              <CoordinationAwardPost key={post.postId} post={post} />
            ))}
          </PostListAwardContainer>

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
          </Container>
        </>
      )}

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
