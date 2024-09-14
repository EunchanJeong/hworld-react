import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
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

const ContestBoard = () => {
  const [postAwardList, setPostAwardList] = useState([]);
  const [activeTab, setActiveTab] = useState('latest'); // 정렬 기준 (최신순/추천순)
  const [contestStatus, setContestStatus] = useState('ongoing'); // 콘테스트 상태 (진행중/완료)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedMonth, setSelectedMonth] = useState('2024-08'); // 선택된 월
  const navigate = useNavigate(); // useNavigate 선언

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
  } = useQuery(['postList', contestStatus, activeTab, currentPage, selectedMonth], fetchPosts, {
    keepPreviousData: true,
  });

  const {
    data: postAwards,
    isLoading: isLoading2,
    isError: isError2,
  } = useQuery(['postAwardList', selectedMonth], fetchPostAwards, { keepPreviousData: true });

  useEffect(() => {
    setCurrentPage(1); // contestStatus가 변경될 때마다 currentPage를 1로 설정
  }, [contestStatus]);

  useEffect(() => {
    setPostAwardList(postAwards);
  }, [postAwards]);

  if (isLoading || isLoading2) {
    return <Spinner />;
  }

  if (isError || isError2) {
    return <div>오류가 발생했습니다.</div>;
  }

  const { postList = [], totalCount = 0 } = posts || {}; // 데이터 구조에서 postList와 totalCount 추출
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE); // 전체 페이지 수 계산

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber); // 페이지 번호 클릭 시 현재 페이지 변경
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value); // 선택된 월 상태 업데이트
  };

  return (
    <CommonLayout>
      <ContestBreadCrumb title={'코디 대회'} contestStatus={contestStatus} onStatusChange={setContestStatus} />

      {contestStatus === 'ongoing' ? (
        <Container>
          <FilterDiv>
            <StatusText active={activeTab === 'latest'} onClick={() => setActiveTab('latest')}>
              최신순
            </StatusText>
            <StatusText active={activeTab === 'recommend'} onClick={() => setActiveTab('recommend')}>
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
            <Text theme="content">수상작</Text>
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

          <PostListAwardContainer>
            {postAwardList.map((post) => (
              <CoordinationAwardPost key={post.postId} post={post} />
            ))}
          </PostListAwardContainer>

          <Container>
            <FilterDiv>
              <StatusText active={activeTab === 'latest'} onClick={() => setActiveTab('latest')}>
                최신순
              </StatusText>
              <StatusText active={activeTab === 'recommend'} onClick={() => setActiveTab('recommend')}>
                추천순
              </StatusText>
            </FilterDiv>
          </Container>
        </>
      )}

      <PostListContainer>
        {postList.map((post) => (
          <CoordinationPost key={post.postId} post={post} />
        ))}
      </PostListContainer>

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

export default ContestBoard;
