import React, { useState } from 'react';
import ContestDetailBreadCrumb from '../../components/ContestDetailBreadCrumb';
import CommonLayout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Spinner from '../../components/Spinner';
import { GetPostDetailAPI, AddReplyAPI, RemoveReplyAPI } from '../../apis/Contest/ContestAPI';
import {
  PostDetailContainer,
  PostTitle,
  PostMeta,
  HorizontalLine,
  TitleName,
  TitleNumber,
  ContentDiv,
  ItemDiv,
  ReplyContainer,
  ReplyInput,
  ReplyButton,
  ReplyItem,
  ReplyHeader,
  ReplyContent,
  DeleteButton,
  ReplyAuthor,
  ReplyCreatedAt,
  ReplyInputContainer,
  ReplyContentContainer,
  PostAuthor,
  PostAuthorDiv,
  PostAuthorContent,
  PageinationContainer,
  PageNumber,
  PaginationImageButton,
  ReplyTop,
} from './styled';
import DetailCoordinationPost from '../../components/DetailCoordinationPost';
import ContestItem from '../../components/ContestItem'; // Item 컴포넌트 추가

import backButton from '../../assets/images/back-button-icon.svg';
import nextButton from '../../assets/images/next-button-icon.svg';

/**
 * 콘테스트 게시글 상세조회 페이지
 * @author 정은찬
 * @since 2024.09.13
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.13  	정은찬        최초 생성
 * </pre>
 */
const ContestPostDetail = () => {
  const { postId } = useParams();
  const queryClient = useQueryClient();
  const [newReply, setNewReply] = useState(''); // 새로운 댓글 입력 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const repliesPerPage = 5; // 페이지당 댓글 수

  // 게시글 상세 조회 함수
  const fetchPostDetail = async () => {
    const response = await GetPostDetailAPI(postId);
    return response.data;
  };

  // 게시글 상세 조회 query
  const { data, isLoading, isError } = useQuery(['postDetail', postId], fetchPostDetail, {
    enabled: !!postId,
  });

  // 댓글 등록 mutation
  const addReplyMutation = useMutation(
    async () => {
      await AddReplyAPI(postId, newReply); // postId와 댓글 내용을 API로 전송
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['postDetail', postId]); // 댓글 목록을 다시 가져옴
        setNewReply(''); // 입력 필드 초기화
      },
    },
  );

  // 댓글 삭제 mutation
  const deleteReplyMutation = useMutation(
    async (replyId) => {
      await RemoveReplyAPI(postId, replyId); // postId와 replyId로 삭제 요청
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['postDetail', postId]); // 댓글 목록을 다시 가져옴
      },
    },
  );

  // 댓글 등록 함수
  const handleReplySubmit = () => {
    if (newReply.trim()) {
      addReplyMutation.mutate(); // 댓글 등록
    }
  };

  // 댓글 삭제 함수
  const handleDeleteReply = (replyId) => {
    deleteReplyMutation.mutate(replyId); // 댓글 삭제
  };

  // 로딩 상태 처리
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  // data가 있을 때만 값에 접근
  const { title, nickname, createdAt, itemList, replyList } = data || {};

  const post = {
    imageUrl: data?.imageUrl || '', // data가 없을 경우 빈 값
    isRecommended: data?.isRecommended || false,
    postId: postId,
    recommendCount: data?.recommendCount || 0,
    replyCount: data?.replyCount || 0,
    postImageUrl: data?.postImageUrl || '', // data가 없을 경우 빈 값
  };

  // 페이지네이션을 위한 계산
  const totalPages = Math.ceil(replyList.length / repliesPerPage);
  const startIndex = (currentPage - 1) * repliesPerPage;
  const endIndex = startIndex + repliesPerPage;
  const currentReplies = replyList.slice(startIndex, endIndex); // 현재 페이지에 해당하는 댓글 슬라이스

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <CommonLayout>
      <ContestDetailBreadCrumb title="코디 대회" />
      <PostDetailContainer>
        <PostTitle>
          <TitleNumber>
            No.{postId}
            &nbsp;&nbsp;
          </TitleNumber>
          <TitleName>{title}</TitleName>
        </PostTitle>
        <PostMeta>
          <PostAuthorDiv>
            <PostAuthor fontWeight="bold">작성자 </PostAuthor>
            <PostAuthorContent fontWeight="300">| {nickname}</PostAuthorContent>
          </PostAuthorDiv>
          <PostAuthorDiv>
            <PostAuthor fontWeight="bold">작성일 </PostAuthor>
            <PostAuthorContent fontWeight="300">| {createdAt}</PostAuthorContent>
          </PostAuthorDiv>
        </PostMeta>
        <HorizontalLine />
      </PostDetailContainer>

      <ContentDiv>
        <div>
          <DetailCoordinationPost key={post.postId} post={post} />
        </div>

        <ItemDiv>
          {itemList && itemList.length > 0 ? (
            itemList.map((item) => <ContestItem key={item.itemId} item={item} />)
          ) : (
            <p>등록된 아이템이 없습니다.</p>
          )}
        </ItemDiv>
      </ContentDiv>

      <ReplyContainer>
        <ReplyTop>댓글</ReplyTop>

        <ReplyInputContainer>
          <ReplyInput
            type="text"
            placeholder="댓글을 입력하세요"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
          <ReplyButton onClick={handleReplySubmit}>등록</ReplyButton>
        </ReplyInputContainer>
        <ReplyContentContainer>
          {currentReplies && currentReplies.length > 0 ? (
            currentReplies.map((reply) => (
              <ReplyItem key={reply.replyId}>
                <ReplyHeader>
                  <ReplyAuthor>{reply.nickname}</ReplyAuthor>
                  <ReplyCreatedAt>{reply.createdAt}</ReplyCreatedAt>
                </ReplyHeader>
                <ReplyContent>{reply.content}</ReplyContent>
              </ReplyItem>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </ReplyContentContainer>

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
      </ReplyContainer>
    </CommonLayout>
  );
};

export default ContestPostDetail;
