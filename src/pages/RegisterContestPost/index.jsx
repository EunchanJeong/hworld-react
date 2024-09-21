import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContestDetailBreadCrumb from '../../components/ContestDetailBreadCrumb';
import CommonLayout from '../../components/Layout';
import CoordinationListModal from '../../components/CoordinationListModal';
import ContestBackgroundModal from '../../components/ContestBackgroundModal';
import { AddContestPostAPI } from '../../apis/Contest/ContestAPI';
import Text from '../../components/Text';
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
  const imagePlaceholderRef = useRef(null); // ImagePlaceholder에 대한 ref 사용

  const navigate = useNavigate(); // useNavigate 사용

  // React Query Client
  const queryClient = useQueryClient();

  // AddContestPost API 호출을 위한 useMutation 설정
  const addPostMutation = useMutation(
    (formData) => AddContestPostAPI(formData), // API 호출
    {
      onSuccess: () => {
        console.log('게시글 등록 성공');
        queryClient.invalidateQueries('contestPosts'); // 게시글 목록을 다시 불러오기

        // 토스트를 띄우고, 닫히면 navigate 실행
        toast.success('게시글 등록이 완료되었습니다.', {
          onClose: () => {
            navigate('/contest'); // '/contest' 경로로 이동
          },
        });
      },
      onError: (error) => {
        toast.error('게시글 등록에 실패했습니다.');
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
    if (background && background.image) {
      setSelectedBackground(background.image); // 선택한 배경 이미지 URL 저장
    } else {
      console.error('Invalid background data:', background);
      alert('유효한 배경 이미지를 선택해주세요.');
    }
    handleCloseBackgroundModal();
  };

  // 등록 버튼 클릭 핸들러
  const handleSubmit = async () => {
    if (selectedCoordination && title) {
      // ImagePlaceholder 캡처
      const capturedImage = await captureImagePlaceholderAsPng();
      if (capturedImage) {
        const formData = new FormData();

        // JSON 데이터를 문자열로 변환
        const jsonRequest = JSON.stringify({
          coordinationId: selectedCoordination.coordinationId,
          title: title,
        });
        formData.append('request', new Blob([jsonRequest], { type: 'application/json' }));

        // Blob을 File로 변환하고 파일명에 title을 적용
        const fileName = `${title}.png`; // title을 파일명으로 사용
        const file = new File([capturedImage], fileName, { type: 'image/png' });
        formData.append('file', file); // PNG 파일 추가

        // API 호출
        addPostMutation.mutate(formData);
      } else {
        console.error('Image capture failed');
      }
    } else {
      alert('제목과 코디를 선택해주세요.');
    }
  };

  // ImagePlaceholder를 캡처하여 PNG로 변환하는 함수
  const captureImagePlaceholderAsPng = async () => {
    try {
      const canvas = await html2canvas(imagePlaceholderRef.current, {
        useCORS: true, // CORS 이슈 해결을 위해 설정
        allowTaint: false, // 이미지가 캔버스에서 오염되지 않도록 설정
      });
      const imageBlob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      return imageBlob; // Blob 형태의 PNG 이미지 반환
    } catch (error) {
      console.error('Image capture failed:', error);
      return null;
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
            <CanvasDiv>
              <ImagePlaceholder
                ref={imagePlaceholderRef} // ref 설정
                id="imagePlaceholder"
                style={{
                  backgroundImage: selectedBackground ? `url(${selectedBackground})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {selectedCoordination ? (
                  <img
                    src={`${selectedCoordination.coordinationImageUrl}?timestamp=${Date.now()}`}
                    alt="선택된 코디 이미지"
                    width="50%"
                    aspect-ratio="1"
                    crossOrigin="anonymous" // 외부 이미지에 대해 CORS 해결을 위해 설정
                  />
                ) : (
                  '코디를 선택해주세요.'
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
              <p>{item.categoryName}</p>
            </ItemContainer>
          ))
        ) : (
          <Text theme="subtext">상품 아이템이 없습니다.</Text>
        )}
      </ItemList>
      <ButtonDiv>
        {/* 등록 버튼 */}
        <SubmitButton onClick={handleSubmit} disabled={addPostMutation.isLoading}>
          {addPostMutation.isLoading ? '등록 중' : '등록'}
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
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        limit={1}
        style={{ fontSize: '20px', textAlign: 'center' }}
      />
    </CommonLayout>
  );
};

export default RegisterContestPost;
