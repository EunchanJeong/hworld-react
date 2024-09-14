import React, { useState } from 'react';
import ContestDetailBreadCrumb from '../../components/ContestDetailBreadCrumb';
import CommonLayout from '../../components/Layout';
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
} from './styled';
import backButton from '../../assets/images/back-button-icon.svg';
import nextButton from '../../assets/images/next-button-icon.svg';

const RegisterContestPost = () => {
  const [title, setTitle] = useState(''); // 제목 상태

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

        {/* 코디 이미지 */}
        <ImageContainer>
          <CoordinationContainer>
            <ImageLabel>코디</ImageLabel>
            <CanvasDiv>
              <ImagePlaceholder>이미지 선택 영역</ImagePlaceholder>
              <ButtonContainer>
                <Button>코디 불러오기</Button>
                <Button>배경 선택</Button>
              </ButtonContainer>
            </CanvasDiv>
          </CoordinationContainer>
        </ImageContainer>
      </PostFormContainer>

      {/* 상품 목록 */}
      <HorizontalLine />
      <ItemList>
        <Item>상품 아이템 1</Item>
        <Item>상품 아이템 2</Item>
        <Item>상품 아이템 3</Item>
        <Item>상품 아이템 4</Item>
      </ItemList>

      {/* 등록 버튼 */}
      <SubmitButton>등록</SubmitButton>
    </CommonLayout>
  );
};

export default RegisterContestPost;
