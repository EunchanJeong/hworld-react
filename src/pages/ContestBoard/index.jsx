import React, { useState } from 'react';
import CommonLayout from '../../components/Layout';
import ContestBreadCrumb from '../../components/ContestBreadCrumb';
import Button from '../../components/Button';
import CoordinationPost from '../../components/CoordinationPost'; // 게시글 목록에 사용할 CoordinationPost 컴포넌트
import { Container, FilterDiv, ButtonWrapper, PostListContainer, PaginationButton, StatusText } from './styled'; // 스타일 임포트
import { GetContestPostListAPI } from '../../apis/Contest/ContestAPI';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';

const POSTS_PER_PAGE = 8; // 한 페이지에 8개의 게시글 표시

const ContestBoard = () => {
  const [activeTab, setActiveTab] = useState('latest'); // 정렬 기준 (최신순/추천순)
  const [contestStatus, setContestStatus] = useState('ongoing'); // 콘테스트 상태 (진행중/완료)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  // API 호출을 통해 게시글 목록을 가져오는 함수
  const fetchPosts = async () => {
    try {
      const response = await GetContestPostListAPI(contestStatus, activeTab);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('게시글 목록 가져오기 오류:', error);
    }
  };

  const {
    data: postList = [],
    isLoading,
    isError,
  } = useQuery(
    ['postList', contestStatus, activeTab], // queryKey로 contestStatus, activeTab 사용
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

  // 페이지당 표시할 게시글 계산
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = postList.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const totalPages = Math.ceil(postList.length / POSTS_PER_PAGE); // 전체 페이지 수 계산

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

        {/* 참가하기 버튼 */}
        <ButtonWrapper>
          <Button fontSize="24px">참가하기</Button>
        </ButtonWrapper>
      </Container>

      {/* 게시글 목록 렌더링 */}
      <PostListContainer>
        {currentPosts.map((post) => (
          <CoordinationPost key={post.postId} post={post} />
        ))}
      </PostListContainer>

      {/* 페이지네이션 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <PaginationButton onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          이전
        </PaginationButton>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          다음
        </PaginationButton>
      </div>
    </CommonLayout>
  );
};

export default ContestBoard;
