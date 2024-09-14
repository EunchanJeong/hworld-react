import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import ContestDetailBreadCrumb from '../../components/ContestDetailBreadCrumb';
import CommonLayout from '../../components/Layout';
import CoordinationListModal from '../../components/CoordinationListModal';
import ContestBackgroundModal from '../../components/ContestBackgroundModal';
import { AddContestPostAPI } from '../../apis/Contest/ContestAPI';
import {
  PostFormContainer,
  TitleLabel,
  TitleInput,
  ImageLabel,
  ImagePlaceholder,
  ButtonContainer,
  Button,
  HorizontalLine,
  ItemList,
  Item,
  SubmitButton,
  TitleContainer,
  ImageContainer,
  CoordinationContainer,
  CanvasDiv,
  ItemContainer,
  ItemListTitle,
  ButtonDiv,
} from './styled';

const RegisterContestPost = () => {
  const [title, setTitle] = useState(''); // 제목 상태
  const [isCoordinationModalOpen, setIsCoordinationModalOpen] = useState(false); // 코디 모달 상태
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false); // 배경 모달 상태
  const [selectedCoordination, setSelectedCoordination] = useState(null); // 선택된 코디 상태
  const [selectedBackground, setSelectedBackground] = useState(null); // 선택된 배경 이미지 상태

  // React Query Client
  const queryClient = useQueryClient();

  // AddContestPost API 호출을 위한 useMutation 설정
  const addPostMutation = useMutation(
    ({ coordinationId, title }) => AddContestPostAPI(coordinationId, title), // API 호출
    {
      onSuccess: () => {
        console.log('게시글 등록 성공');
        // 성공 시 데이터 캐시 무효화나 추가 동작 수행
        queryClient.invalidateQueries('contestPosts'); // 예: 게시글 목록을 다시 불러오기
      },
      onError: (error) => {
        console.error('게시글 등록 실패:', error);
      },
    },
  );

  // 코디 모달 열기
  const handleOpenCoordinationModal = () => {
    setIsCoordinationModalOpen(true);
  };

  // 코디 모달 닫기
  const handleCloseCoordinationModal = () => {
    setIsCoordinationModalOpen(false);
  };

  // 코디에서 선택한 값 처리
  const handleCoordinationSubmit = (coordination) => {
    setSelectedCoordination(coordination[0]); // 첫 번째 선택된 코디만 사용
    handleCloseCoordinationModal();
  };

  // 배경 모달 열기
  const handleOpenBackgroundModal = () => {
    setIsBackgroundModalOpen(true);
  };

  // 배경 모달 닫기
  const handleCloseBackgroundModal = () => {
    setIsBackgroundModalOpen(false);
  };

  // 배경에서 선택한 값 처리
  const handleBackgroundSubmit = (background) => {
    setSelectedBackground(background.image); // 선택한 배경 이미지 URL 저장
    handleCloseBackgroundModal();
  };

  // 등록 버튼 클릭 핸들러
  const handleSubmit = () => {
    if (selectedCoordination && title) {
      addPostMutation.mutate({
        coordinationId: selectedCoordination.coordinationId,
        title: title,
      });
    } else {
      alert('제목과 코디를 선택해주세요.');
    }
  };

  return (
    <CommonLayout>
      <ContestDetailBreadCrumb title={'게시글 작성'} />

      <PostFormContainer>
        {/* 제목 */}
        <TitleContainer>
          <TitleLabel>제목</TitleLabel>
          <TitleInput
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleContainer>

        {/* 코디 이미지 및 배경 */}
        <ImageContainer>
          <CoordinationContainer>
            <ImageLabel>코디</ImageLabel>
            <CanvasDiv>
              <ImagePlaceholder
                style={{
                  backgroundImage: selectedBackground ? `url(${selectedBackground})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {selectedCoordination ? (
                  <img
                    src={selectedCoordination.coordinationImageUrl}
                    alt="선택된 코디 이미지"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  '이미지 선택 영역'
                )}
              </ImagePlaceholder>
              <ButtonContainer>
                <Button onClick={handleOpenCoordinationModal}>코디 불러오기</Button>
                <Button onClick={handleOpenBackgroundModal}>배경 선택</Button>
              </ButtonContainer>
            </CanvasDiv>
          </CoordinationContainer>
        </ImageContainer>
      </PostFormContainer>

      <ItemListTitle>상품</ItemListTitle>
      {/* 상품 목록 */}
      <HorizontalLine />

      <ItemList>
        {selectedCoordination && selectedCoordination.itemList.length > 0 ? (
          selectedCoordination.itemList.map((item, index) => (
            <ItemContainer key={index}>
              <Item>
                <img src={item.itemImageUrl} alt={item.itemName} width="100%" height="100%" />
              </Item>
              <p>{item.categoryName}</p> {/* 카테고리 이름 추가 */}
            </ItemContainer>
          ))
        ) : (
          <Item>상품 아이템이 없습니다.</Item>
        )}
      </ItemList>
      <ButtonDiv>
        {/* 등록 버튼 */}
        <SubmitButton onClick={handleSubmit} disabled={addPostMutation.isLoading}>
          {addPostMutation.isLoading ? '등록 중...' : '등록'}
        </SubmitButton>
      </ButtonDiv>

      {/* 코디 모달 */}
      {isCoordinationModalOpen && (
        <CoordinationListModal onClose={handleCloseCoordinationModal} onSubmit={handleCoordinationSubmit} />
      )}

      {/* 배경 모달 */}
      {isBackgroundModalOpen && (
        <ContestBackgroundModal onClose={handleCloseBackgroundModal} onSubmit={handleBackgroundSubmit} />
      )}
    </CommonLayout>
  );
};

export default RegisterContestPost;
